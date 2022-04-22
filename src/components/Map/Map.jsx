import React,{useRef,useEffect,useContext} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import LeafletControlGeocoder from './LeafletControlGeocoder'
import MapContext from '../../context/map-context'

const Map = (props) => {
  const {waypointA,waypointB,setWaypointA,setWaypointB,setNameA,setNameB} = useContext(MapContext)
  const rMachine = useRef();
  useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints([waypointA,waypointB]);
    }
  }, [waypointA,waypointB, rMachine]);
 
  
    const updateWaypointA = (point,name) => {
      setWaypointA(point);
      setNameA(name)

    }
    const updateWaypointB = (point,name) => {
      setWaypointB(point);
      setNameB(name)

    }
  return (
    <div className="map">
    <MapContainer center={props.center} zoom={15}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <LeafletControlGeocoder updateWaypointA={updateWaypointA}  placeholder="Enter point A"/>
      <LeafletControlGeocoder updateWaypointB={updateWaypointB}    placeholder="Enter point B"/>
      <RoutingMachine ref={rMachine} />
    </MapContainer>
    </div>

    
  );
};

export default Map;
