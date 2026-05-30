import { TCard } from "./types/card";
interface props {
    suit: TCard['suit'];
    value: TCard['value'];
    open: boolean;
}
export default function({ suit, value, open }: props){
    return (
        <div className={`plaing-card plaing-card-${suit}-${value} is-${(open ? 'open' : 'closed')}`}></div>
    );
}