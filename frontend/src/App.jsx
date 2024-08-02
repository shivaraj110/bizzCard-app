import { useEffect } from "react";
import "./App.css";
import { Bizz } from "../components/Bizz";
import { AddCard } from "../components/AddCard";
import { useRecoilState, useRecoilValue , useSetRecoilState} from "recoil";
import { cardAtom, nameAtom } from "../store/atoms/cardAtoms";
import { Filter } from "../components/Filter";
function App() {
  const [cards,setCards] = useRecoilState(cardAtom)
  const name = useRecoilValue(nameAtom)
  const setName = useSetRecoilState(nameAtom)
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
      <br />

         <input type="text" placeholder="filter by name" onInput={(e)=>{
            setName(x => x = e.target.value)
        }} />
        {name !== "" ? <Filter/> : cards.map((card) =>
        <Bizz props={card} key={card._id} />
      ) }
      
     
   
    </div>
  );
}
export default App;
