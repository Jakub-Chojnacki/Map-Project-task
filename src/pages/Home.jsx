import { useNavigate } from "react-router-dom";
import MapContext from '../context/map-context'
import {useContext,useState} from 'react'
import styles from './Home.module.css'
import Map from '../components/Map/Map'
import History from '../components/History'
const Home = () => {

  const {waypointA,waypointB,nameA,nameB} = useContext(MapContext)
  const [showHistory,setShowHistory] = useState(false)
  let navigate = useNavigate(); 
  const history = JSON.parse(localStorage.getItem("searches"));
  const checkResultsHandler = () =>{ 
   
    if(history != null){
      const newHistory = JSON.stringify([...history, {nameA,nameB,id:history.length+1}])
      localStorage.setItem('searches', newHistory)
    }else {
      localStorage.setItem('searches',JSON.stringify([ {nameA,nameB, id:1}]))
    }
    let path = `/results`; 
    navigate(path);
  }
  const showHistoryHandler = () => {
    setShowHistory(!showHistory)
  }
return (
    <div className={styles.container}>
        <div>This is the homepage</div>
         <Map center={waypointA ? waypointA : [51.15,1.1]}/>
         {(!waypointA || !waypointB) &&<p>Choose two waypoints to see results</p>}
         { (waypointA && waypointB) &&
        <button color="primary"  onClick={checkResultsHandler} disabled={!waypointA || !waypointB} className={styles['btn--results']}>
             Check results
         </button>
         }
        
        <button onClick={showHistoryHandler}>Show History</button>
        {(history && showHistory )&& <History />}
    </div>
)

}

export default Home;