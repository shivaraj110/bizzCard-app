import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Bizz } from "../components/Bizz";
import { AddCard } from "../components/AddCard";

function App() {
  const [cards,setCards] = useState([]);
  const fetchCards = async() => {
  fetch("http://localhost:3000/cards").then(async(res) => {
        const cardss = await res.json();
        setCards(cardss.cards);
      });
  }
  useEffect(() => {
    fetchCards()
  }, []);
  return (
    <div>
      <AddCard onCardUpdate={fetchCards}/>
      {cards.map((card) =>
        <Bizz props={card} key={card._id} />
      )}
    </div>
  );
}
export default App;
