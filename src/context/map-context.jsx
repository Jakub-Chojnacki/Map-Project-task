import React from 'react';
import {createContext,useState} from 'react'
const MapContext = createContext();

export function MapProvider({children}){
    const [distance,setDistance] = useState(0)
    const [waypointA,setWaypointA] = useState([51.5024,0.1])
    const [waypointB,setWaypointB] = useState([51.324,0.154132])
    return (
        <MapContext.Provider
         value={{
             distance,
             setDistance,
             waypointA,
             setWaypointA,
             waypointB,
             setWaypointB}}>
                 
            {children}
        </MapContext.Provider>
    )
}

export default MapContext;