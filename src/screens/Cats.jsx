import { useState, useEffect } from "react";
import { getCats } from "../services/cats";
import Cat from "../components/Cat.jsx"

function Cats() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats();
  }, []);

  async function fetchCats(){
    const allCats = await getCats();
    setCats(allCats);
  }

  return (
    <div className="Cats">
      <h1>All the Cats</h1>
      <div>
        {
          cats.map((cat) =>(
            <Cat cat={cat} key={cat.id}/>
          ))
        }
      </div>
    </div>
  );
}

export default Cats;
