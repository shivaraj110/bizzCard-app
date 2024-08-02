import {  useRecoilValue } from "recoil";
import { filteredCards } from "../store/atoms/cardAtoms";
import { Bizz } from "./Bizz";
export function Filter() {

  const cards = useRecoilValue(filteredCards);
 
    return (
      <div>
        {cards.map((card) => (
          <Bizz props={card} key={card._id} />
        ))}
      </div>
    );
}
