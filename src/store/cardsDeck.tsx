import { create } from 'zustand';
import { TCard } from '../types/card';
import {defaultCardList} from './defaultCardList';
interface CardsDeckState {
  shaffleTimes: number;
  cardsDeck: TCard[];
  shuffleDeck: () => void;
  resetDeck: () => void;
  getCard: () => TCard;
}
export const useCardsDeck = create<CardsDeckState>((set,get) => ({
  shaffleTimes: Math.random() * 10 + 5,
  cardsDeck: defaultCardList,
  shuffleDeck: () => {
    const ShaffleTimes = Math.random() * 10 + 5;
    for (let i = 0; i < ShaffleTimes; i++){
      const shuffledDeck = [...get().cardsDeck].sort(() => Math.random() - 0.5);
      set((state) => ({
        cardsDeck: shuffledDeck,
      }));
    }
  },
  resetDeck: () => {
    
  },
  getCard: () => {
      const TOReturn = get().cardsDeck[0] as TCard;
      set((state) => ({
          cardsDeck: state.cardsDeck.slice(1),
      }));
      return TOReturn;
  }
}));