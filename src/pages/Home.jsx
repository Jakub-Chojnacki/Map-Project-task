import { useNavigate } from "react-router-dom";
import MapContext from '../context/map-context'
import {useContext,useState} from 'react'
import styles from './Home.module.css'
import Map from '../components/Map/Map'
import History from '../components/History'
import { motion } from 'framer-motion';


const Home = () => {

  const {waypointA,waypointB,addressA,addressB} = useContext(MapContext)
  
  const [showHistory,setShowHistory] = useState(false)
  let navigate = useNavigate(); 
  const history = JSON.parse(localStorage.getItem("searches"));
  const checkResultsHandler = () =>{ 
   
    if(history != null){
     
      const newHistory = JSON.stringify([...history, {addressA,addressB,id:history.length+1}])
      localStorage.setItem('searches', newHistory)
    }else {
      localStorage.setItem('searches',JSON.stringify([ {addressA,addressB, id:1}]))
    }
    let path = `/results`; 
    navigate(path);
  }
  const showHistoryHandler = () => {
    setShowHistory(!showHistory)
  }
return (
    <main className={styles.container}
     >
          {(!waypointA || !waypointB) &&<h1 className={styles.important}>Choose two waypoints to see results</h1>}
         <Map showSearch={true} center={waypointA ? waypointA : [51.15,1.1]}/>
         { (waypointA && waypointB) &&
        <button className={styles.btn} onClick={checkResultsHandler} disabled={!waypointA || !waypointB} >
             Check results
         </button>
         }
        <h2 className={styles[`history-title`]}>Your History:</h2>
        {(history && showHistory )&& <History />}
        {(!history && showHistory ) && <p>There is no history to show</p>} 
        <button className={styles.btn} onClick={showHistoryHandler}>{showHistory?  `Hide History` : `Show History`}</button>
       
    </main>
)

}

export default Home;