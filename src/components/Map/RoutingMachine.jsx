import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import *  as Geocoder from 'leaflet-control-geocoder'


const CreateRoutingMachineLayer = (props) => {

  const {waypoints} = props;
  const instance = L.Routing.control({
    waypoints,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    showAlternatives: false,

  });

  instance.on('routesfound', function (e) {
   let distance = e.routes[0].summary.totalDistance;
    props.onSubmit(distance)
});
  return instance;
};

const RoutingMachine = createControlComponent(CreateRoutingMachineLayer);

export default RoutingMachine;
