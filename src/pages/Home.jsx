import { useNavigate } from "react-router-dom";
import MapContext from '../context/map-context'
import {useContext,useState} from 'react'
import styles from './Home.module.css'
import Map from '../components/Map/Map'
import History from '../components/History'

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
    <main className={styles.container}>
         <Map showSearch={true} center={waypointA ? waypointA : [51.15,1.1]}/>
         {(!waypointA || !waypointB) &&<p>Choose two waypoints to see results</p>}
         { (waypointA && waypointB) &&
        <button color="primary"  onClick={checkResultsHandler} disabled={!waypointA || !waypointB} className={styles.btn}>
             Check results
         </button>
         }
        
        <button onClick={showHistoryHandler}>Show History</button>
        {(history && showHistory )&& <History />}
    </main>
)

}

export default Home;