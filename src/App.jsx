import './App.css';
import Home from './pages/Home'
import Results from './pages/Results'
import { Routes, Route} from "react-router-dom";
import MainNavigation from './components/UI/MainNavigation'
import NotFound from './pages/NotFound'
function App() {

  return (
    <div >
      <MainNavigation/>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/results" element={<Results />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
        
       </div>
    </div>
  );
}

export default App;
