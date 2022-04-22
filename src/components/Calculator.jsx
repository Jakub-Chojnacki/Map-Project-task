import React,{useContext,useState} from 'react'
import MapContext from '../context/map-context'
const Calculator = (props) => {

    const [pricePerKm, setPricePerKm] = useState(1.25)
    const {distance} = useContext(MapContext) // in metres
    const distanceKm = (distance / 1000).toFixed(2) // in kilometers
    const numberOfDays = Math.ceil(distanceKm/800);
    const totalCost = ((distanceKm * pricePerKm* 1.1)+ numberOfDays * 1000).toFixed(2);
    const handleChange = (e) => {
        if(e.target.value >= 0.01){
        setPricePerKm(e.target.value)
        }
    }
    return (
        <div >
            <input type="number" step="0.01" min="0.1" value={pricePerKm} onChange={handleChange}/>
            <p>Price per km: {pricePerKm}</p>
            <p>Distance in kilometers: {distanceKm}</p>
            <p>Total cost: {totalCost}zł</p>
            <p>Number of days: {numberOfDays}</p>
        </div>
       
    )
   
}

export default Calculator