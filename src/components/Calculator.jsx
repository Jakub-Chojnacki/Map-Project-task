import React,{useContext,useState,useRef} from 'react'
import MapContext from '../context/map-context'
import styles from './Calculator.module.css'
import Pdf from "react-to-pdf";
const Calculator = (props) => {
    const pdf = useRef()
    const [pricePerKm, setPricePerKm] = useState(1.25)
    const {distance,addressA,addressB} = useContext(MapContext) // in metres
    const distanceKm = (distance / 1000).toFixed(2) // in kilometers

    const numberOfDays = Math.ceil(distanceKm/800);
    const totalCost = ((distanceKm * pricePerKm * 1.1)+ numberOfDays * 1000).toFixed(2);

    const handleChange = (e) => {
        if(e.target.value >= 0){
        setPricePerKm(e.target.value)
        }
    }
    return (
        <div className={styles.calculator} >
            <input type="number" step="0.01" min="0.01" value={pricePerKm} onChange={handleChange} className={styles.price}/>
            <label>Input price per km above</label>
            <div ref={pdf} className={styles.data}>
                <p>You are traveling from: {addressA}</p>
                <p>To: {addressB}</p>
                <p>Price per km: {pricePerKm}</p>
                <p>Distance in kilometers: {distanceKm}</p>
                <p>Number of days: {numberOfDays}</p>
                <p>Total cost: {totalCost}zł</p>
            </div>

            <Pdf targetRef={pdf} filename="map-results.pdf">
                {({ toPdf }) => <button className={styles.btn} onClick={toPdf}>Download as a PDF</button>}
             </Pdf>
           
        </div>
       
    )
   
}

export default Calculator