import Calculator from '../components/Calculator'
import React from 'react'
import styles from './Results.module.css'
import Map from '../components/Map/Map'
import MapContext from '../context/map-context'
import {useContext} from 'react'
import {Navigate} from 'react-router-dom'

const Results = () => {
    const {waypointA,waypointB} = useContext(MapContext)
    
  
    return (
        <div className={styles.results}>
            <p>This is the results page</p>
             <Map center={waypointA ? waypointA : [51.15,1.1]}/>
             <Calculator />
             {/* Navigate to homepage if someone tries to modify url to /results without inputting data */}
             {(!waypointA || !waypointB) && <Navigate replace to="/"/>}  
        </div>
    )
}

export default Results;