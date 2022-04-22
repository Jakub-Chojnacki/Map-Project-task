import './App.css';
import Map from './components/Map/Map'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import Results from './pages/Results'
import {MapProvider} from './context/map-context'
import MainNavigation from './components/UI/MainNavigation'
function App() {
 
  return (
    <div >
      <MainNavigation/>
      <div className="App">
      <MapProvider>
       
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/results" element={<Results />}/>
        </Routes>
       </MapProvider>
       </div>
    </div>
  );
}

export default App;
