import { create } from 'zustand';
import { TCard } from '../types/card';
import { TPlace } from '../types/place';

interface TableState {
  Place:TPlace[];
  addCardToPlace: (placeId: number, card: TCard) => void;
  removeCardFromPlace: (placeId: number, card: TCard) => void;
}
export const useTable = create<TableState>((set,get) => ({
  Place: [
    {
      id: 1,
      name: "Place 1",
      cards: [],
      x: 100,
      y: 100
    },
  ],
  addCardToPlace: (placeId, card) => {
    set((state) => {
      const placeIndex = state.Place.findIndex(place => place.id === placeId);
      if (placeIndex !== -1) {
        const updatedPlace = {
          ...state.Place[placeIndex],
          cards: [...state.Place[placeIndex].cards, card],
        };
        const updatedPlaces = [...state.Place];
        updatedPlaces[placeIndex] = updatedPlace;
        return { Place: updatedPlaces };
      }
      return state;
    });
  },
  removeCardFromPlace: (placeId, card) => {
    set((state) => {
      const placeIndex = state.Place.findIndex(place => place.id === placeId);
      if (placeIndex !== -1) {
        const updatedCards = state.Place[placeIndex].cards.filter(c => c.id !== card.id);
        const updatedPlace = {
          ...state.Place[placeIndex],
          cards: updatedCards,
        };
        const updatedPlaces = [...state.Place];
        updatedPlaces[placeIndex] = updatedPlace;
        return { Place: updatedPlaces };
      }
      return state;
    });
  }
}));