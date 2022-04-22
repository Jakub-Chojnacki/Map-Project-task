import './App.css';
import Home from './pages/Home'
import Results from './pages/Results'
import { Routes, Route } from "react-router-dom";
import {MapProvider} from './context/map-context'
import MainNavigation from './components/UI/MainNavigation'
import NotFound from './pages/NotFound'
function App() {

  return (
    <div >
     
      <MainNavigation/>
      <div className="App">
      <MapProvider>
    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/results" element={<Results />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
        </MapProvider>
     
       </div>
    </div>
  );
}

export default App;
