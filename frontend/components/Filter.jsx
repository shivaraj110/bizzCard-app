import { useSetRecoilState, useRecoilValue } from "recoil";
import { filterName , nameAtom} from "../store/atoms/cardAtoms";
import { Bizz } from "./Bizz";
export function Filter({ name }) {

  const cards = useRecoilValue(filterName);
 
    return (
        
      <div>
        
        {cards.map((card) => (
          <Bizz props={card} key={card._id} />
        ))}
      </div>
    );
}
