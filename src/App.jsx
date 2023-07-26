import data from "./data";
import { useState } from "react";


const App = () => {

  const [person,setPerson] = useState(data)
  
  const displayPerson = person.map((person) => {
      return(
        <section className="person"  key={person.id} >
      
        <img src={person.image} alt={person.name} className="img" />
        <div>
        <h4>{person.name}</h4>
        <p>{person.age} Años</p>
        </div>
  
        </section>
      )
  })

  const clearAll = () =>{
    setPerson(prevPerson => [])
  }

  return (
    <main>
      <div className="container" >
      <h3>{person.length} Personas Cumplen Años Hoy </h3>
      {displayPerson}
      <button className="btn btn-block" type="button" onClick={clearAll} >Limpiar Todo</button>
      </div>
      </main>

  )
};
export default App;
