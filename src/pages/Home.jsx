import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/results`; 
    navigate(path);
  }
return (
    <div className="home">
        <div>This is the homepage</div>
        <button color="primary" className="px-4"
            onClick={routeChange}
              >
              Submit
            </button>
    </div>
)

}

export default Home;