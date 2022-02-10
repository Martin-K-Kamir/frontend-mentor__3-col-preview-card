import Card from "./react/Card";
import Attribution from "./react/Attribution";
import dataCard from './data'


export default function App() {

  const cards = dataCard.map(curCard => {
    return <Card
      key={curCard.id}
      {...curCard}
    />
  })

  return (
    <div className="body-container">
      <div className="cards-container">
        {cards}
      </div>
      <Attribution />
    </div>
  );
}