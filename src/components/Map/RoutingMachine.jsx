import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import {useContext} from 'react'
import MapContext from '../../context/map-context'


const CreateRoutingMachineLayer = (props) => {

  const {setDistance,waypointA,waypointB} = useContext(MapContext)

  const instance = L.Routing.control({
    waypoints:[
      L.latLng(waypointA),
      L.latLng(waypointB)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    showSpinner: true,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,

  });
  
  instance
  .on('routesfound', function (e) {
   let distance = e.routes[0].summary.totalDistance;
    setDistance(distance)
});
  return instance;
};

const RoutingMachine = createControlComponent(CreateRoutingMachineLayer);

export default RoutingMachine;
