import './App.css';
import Map from './components/Map/Map'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import Results from './pages/Results'
function App() {
 
  return (
    <div className="App">
       <Map />
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/results" element={<Results />}/>
       </Routes>
    </div>
  );
}

export default App;
