import React,{useRef,useEffect,useContext} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import LeafletControlGeocoder from './LeafletControlGeocoder'
import MapContext from '../../context/map-context'

const Map = (props) => {
  const {waypointA,waypointB,setWaypointA,setWaypointB} = useContext(MapContext)
  const rMachine = useRef();
  useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints([waypointA,waypointB]);
    }
  }, [waypointA,waypointB, rMachine]);
 
  return (
    <div>
    <MapContainer center={[51.505, 0.1]} zoom={13}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <LeafletControlGeocoder updateWaypointA={pointA => setWaypointA(pointA)} placeholder="Enter point A"/>
      <LeafletControlGeocoder updateWaypointB={pointB => setWaypointB(pointB)}   placeholder="Enter point B"/>
      <RoutingMachine ref={rMachine} />
    </MapContainer>
    </div>

    
  );
};

export default Map;
