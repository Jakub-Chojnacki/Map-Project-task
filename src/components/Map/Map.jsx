import React,{useRef,useEffect,useContext} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import LeafletControlGeocoder from './LeafletControlGeocoder'
import MapContext from '../../context/map-context'

const Map = (props) => {
  const {waypointA,waypointB,setWaypointA,setWaypointB,setAddressA,setAddressB} = useContext(MapContext)
  const rMachine = useRef();
  useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints([waypointA,waypointB]);
    }
  }, [waypointA,waypointB, rMachine]);
 
    const validateAddress = (city,country,road,house_number,town,municipality) => {
      //depending on the search you might not get a road for example so we need to check whether the property exists
        let temp = '';
        if(road){
          temp+=`${road}`
        }
        if(house_number){
          temp+=` ${house_number}`
        }
        if(city){
            temp+=`, ${city}`
        }
        if(town){
          temp+=`, ${town}`
        }
        if((!city && !town) && municipality){
          temp+=`, ${municipality}`
        }
        if(country){
            temp+=`, ${country}`
        }
        // regex to remove a comma if it's first
        temp = temp.replace(/^,/, '');
        return temp;
    }
  
    const updateWaypointA = (geoData) => {
      setWaypointA(geoData.center);
       const {city,country,road,house_number,town,municipality}= geoData.properties.address
       const temp = validateAddress(city,country,road,house_number,town,municipality)
      setAddressA(temp)
    }
    
    const updateWaypointB = (geoData) => {
      setWaypointB(geoData.center);
      const {city,country,road,house_number,town,municipality}= geoData.properties.address
      const temp = validateAddress(city,country,road,house_number,town,municipality)
      setAddressB(temp)
      

    }
  return (
    <div className="map">
    <MapContainer center={props.center} zoom={8}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {props.showSearch && <LeafletControlGeocoder updateWaypointA={updateWaypointA}  placeholder="Enter point A"/>}
      {props.showSearch && <LeafletControlGeocoder updateWaypointB={updateWaypointB}    placeholder="Enter point B"/>}
      <RoutingMachine ref={rMachine} />
    </MapContainer>
    </div>

    
  );
};

export default Map;
