import { TCard } from "./card";
export type TPlace = {
  id: number;
  name: string;
  cards: TCard[];
  x: number;
  y: number;
}