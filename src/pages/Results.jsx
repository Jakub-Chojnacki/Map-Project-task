import Calculator from '../components/Calculator'
import React from 'react'
import styles from './Results.module.css'
import Map from '../components/Map/Map'
import MapContext from '../context/map-context'
import {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import { motion } from 'framer-motion';
const Results = () => {
    

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  }
  
};

    const {waypointA,waypointB} = useContext(MapContext)
    return (
        <motion.main className={styles.results} variants={containerVariants}
        initial="hidden"
        animate="visible"
        >
             <Map center={waypointA ? waypointA : [51.15,1.1]}/>
             <Calculator />
             {/* Navigate to homepage if someone tries to modify url to /results without inputting data */}
             {(!waypointA || !waypointB) && <Navigate replace to="/"/>}  
        </motion.main>
    )
}

export default Results;