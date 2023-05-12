import {ReactComponent as Grid} from "./assets/grid.svg";
import {ReactComponent as GridHorizontal} from "./assets/grid-horizontal.svg";
import {ReactComponent as GridVertical} from "./assets/grid-vertical.svg";
import './style.css'
const BtnFilterGrid = ({onClickGridHorizonal, onClickGridVertical}) => {

  return(
      <div className='set-filter-grid'>
          <button onClick={onClickGridHorizonal}><GridHorizontal/></button>
          <button onClick={onClickGridVertical}><GridVertical/></button>
      </div>
  )
}
export default BtnFilterGrid