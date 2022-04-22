import { useNavigate } from "react-router-dom";
import MapContext from '../context/map-context'
import {useContext} from 'react'
import styles from './Home.module.css'
import Map from '../components/Map/Map'
const Home = () => {

  const {waypointA,waypointB} = useContext(MapContext)
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/results`; 
    navigate(path);
  }
return (
    <div className={styles.container}>
        <div>This is the homepage</div>
         <Map center={waypointA ? waypointA : [51.15,1.1]}/>
         {(!waypointA || !waypointB) &&<p>Choose two waypoints to see results</p>}
         { (waypointA && waypointB) &&
        <button color="primary"  onClick={routeChange} disabled={!waypointA || !waypointB} className={styles['btn--results']}>
             Check results
         </button>
         }
    </div>
)

}

export default Home;