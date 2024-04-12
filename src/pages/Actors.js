import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"




function Actors() {
  
  const [actors, setActors] = useState([])
  
  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error=> console.error(error))
  }, []);

  const actorList= actors.map(actor =>{
    return(

      <article>
        <h1>{actor.name}</h1>
        <ul>
          <li>{actor.movies[0]}</li>
          <li>{actor.movies[1]}</li>
          <li>{actor.movies[2]}</li>
        </ul>

      </article>
    )
  })
  
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;
