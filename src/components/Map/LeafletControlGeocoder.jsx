import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

import icon from "./constants";

export default function LeafletControlGeocoder(props) {
  const map = useMap();
  const {updateWaypointA,updateWaypointB} = props;

  useEffect(() => {
    var geocoder = L.Control.Geocoder.nominatim();
    if (typeof URLSearchParams !== "undefined" && window.location.search) {
      
      var params = new URLSearchParams(window.location.search);
      var geocoderString = params.get("geocoder");
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn("Unsupported geocoder", geocoderString);
      }
    }

    L.Control.geocoder({
      query: "",
      placeholder: props.placeholder,
      defaultMarkGeocode: false,
      position:"topleft",
      collapsed:false,
      errorMessage:"We couldn't find a location for you :(",
      geocoder
    })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng, { icon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
        if(props.updatePointA){
          updateWaypointA(e.geocode.center)
        }else{
          updateWaypointB(e.geocode.center)
        }
       
      })
      .addTo(map);

    //eslint-disable-next-line
  }, []);

  // I only need this to run ONCE because otherwise it would create new Search boxes on each reload

  return null;
}
