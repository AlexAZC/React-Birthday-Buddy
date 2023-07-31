const url = 'https://course-api.com/react-tours-project';
import Loading from "./components/Loading";
import { useState,useEffect } from "react";
import Tours from "./components/Tours";

const App = () => {

  const [isloading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  function fetchTours(){
    fetch(url)
    .then((response) => response.json())
    .then((data) => setTours(data))
    .finally(() => setIsLoading(false))
  }

  useEffect(() => {
        setIsLoading(true)
        fetchTours();
  },[])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button type="button" style={{marginTop:"2rem"}} className="btn" onClick={fetchTours}></button>
      </div>
    </main>
  }


  return (
    <main>
      {isloading 
      ? <Loading/> : 
      <Tours tours={tours} removeTour={removeTour} />
      }
    </main>
  );
};
export default App;
