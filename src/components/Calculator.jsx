import React,{useContext} from 'react'
import MapContext from '../context/map-context'
const Calculator = (props) => {

    const {distance} = useContext(MapContext)
    return (
        <div >
        This is the calculator
        {distance}
        
        </div>
    )
   
}

export default Calculator