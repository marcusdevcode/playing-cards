import { useEffect } from 'react'
import './App.css'
import Card from './Card'
import Place from './Place';
import { useCardsDeck } from './store/cardsDeck';
import { useTable } from './store/Table';

function App() {
  const cardsDeck = useCardsDeck();
  const table = useTable();
  const shuffleDeck = () => {
    cardsDeck.shuffleDeck();
  }
  useEffect(() => {
    const ShaffleTimes = Math.random() * 10 + 5;
    for (let i = 0; i < ShaffleTimes; i++){
      shuffleDeck();
    }
  }, []);
  return (
    <>
    <div className='deck'>
          { cardsDeck.cardsDeck.map((card) => {
          return (
            <div onClick={() => console.log(card)}>
              <Card key={card.id} suit={card.suit} value={card.value} open={false} />
            </div>
          )
        })}
    </div>
    <div className='table'>
          { table.Place.map((place) => {
          return (
            <Place key={place.id} className={"place-"+place.id} style={{ left: place.x, top: place.y, width: place.width, height: place.height }}/>
          )
        })}
    </div>
    </>
  )
}

export default App
