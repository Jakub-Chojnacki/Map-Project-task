import React from 'react';
import {createContext,useState} from 'react'
const MapContext = createContext();

export function MapProvider({children}){
    const [distance,setDistance] = useState(0)
    const [waypointA,setWaypointA] = useState()
    const [waypointB,setWaypointB] = useState()
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