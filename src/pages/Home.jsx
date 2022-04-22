import { useNavigate } from "react-router-dom";
import MapContext from '../context/map-context'
import {useContext} from 'react'
import Map from '../components/Map/Map'
const Home = () => {

  const {waypointA} = useContext(MapContext)
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/results`; 
    navigate(path);
  }
return (
    <div className="home">
        <div>This is the homepage</div>
         <Map center={waypointA ? waypointA : [51.15,1.1]}/>
        <button color="primary" className="px-4"
            onClick={routeChange}
              >
              Submit
            </button>
    </div>
)

}

export default Home;