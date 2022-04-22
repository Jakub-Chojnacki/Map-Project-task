import React from 'react';
import {createContext,useState} from 'react'
const MapContext = createContext();

export function MapProvider({children}){
    const [distance,setDistance] = useState(0)
    const [waypointA,setWaypointA] = useState()
    const [nameA,setNameA] = useState()
    const [waypointB,setWaypointB] = useState()
    const [nameB, setNameB] = useState()
    return (
        <MapContext.Provider
         value={{
             distance,
             setDistance,
             waypointA,
             nameA,
             setNameA,
             setWaypointA,
             waypointB,
             setWaypointB,
             nameB,
             setNameB}}>
                 
            {children}
        </MapContext.Provider>
    )
}

export default MapContext;