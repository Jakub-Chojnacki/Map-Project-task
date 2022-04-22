import Calculator from '../components/Calculator'
import React from 'react'
import styles from './Results.module.css'
import Map from '../components/Map/Map'
import MapContext from '../context/map-context'
import {useContext} from 'react'

const Results = () => {
    const {waypointA} = useContext(MapContext)
    return (
        <div className={styles.results}>
            <p>This is the results page</p>
             <Map center={waypointA ? waypointA : [51.15,1.1]}/>
             <Calculator />
        </div>
    )
}

export default Results;