import {  useRecoilValue } from "recoil";
import { filteredCards } from "../store/atoms/cardAtoms";
import { Bizz } from "./Bizz";
export function Filter() {

const cards = useRecoilValue(filteredCards);
const isthere = useRecoilValue(isThere)
if(isthere === 0){
 return <div>not found...</div>
}
else return (
      <div>
        {cards.map((card) => (
          <Bizz props={card} key={card._id} />
        )) }
      </div>
    );
}
