import React,{useState,useRef,useEffect} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import LeafletControlGeocoder from './LeafletControlGeocoder'


const Map = (props) => {
  const rMachine = useRef();
  const [pointA,setPointA] = useState([51.5024,0.1])
  const [pointB,setPointB] = useState([51.324,0.154132])
  const [distance,setDistance] = useState()
  const waypointsToUse = [pointA,pointB]
  useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints(waypointsToUse);
    }
  }, [waypointsToUse, rMachine]);
 

 
  return (
    <div>
    <MapContainer center={[51.505, 0.1]} zoom={13}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
      <LeafletControlGeocoder updatePointA={pointA => setPointA(pointA)} placeholder="Enter point A"/>
      <LeafletControlGeocoder updatePointB={pointB => setPointB(pointB)}  placeholder="Enter point B"/>
      <RoutingMachine ref={rMachine} waypoints={waypointsToUse} pointA={pointA} pointB={pointB} onSubmit={distance => setDistance(distance)}/>
    
    </MapContainer>

    <div>{`Distance ${Math.round(((distance/1000) * 100)) / 100} km`}</div> 

    </div>

    
  );
};

export default Map;
