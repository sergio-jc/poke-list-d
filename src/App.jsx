import { useEffect, useState } from "react";
import CreatePokemon from "./Components/Form/CreatePokemon";
import Search from "./Components/Nav/Search";
import Table from "./Components/Main/Table";
import plus_icon from './img/plus_icon.svg'
import "./App.css"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [toggle , setToggle] = useState(false)

  useEffect(()=>{
    fetch("https://bp-pokemons.herokuapp.com/?idAuthor=1")
      .then((res)=>res.json())
      .then((json)=> setPokemons(json))
  },[])

  const HandleSearch = (pokemons, string) => {
    const findPokemons = pokemons.filter((pokemon)=>{
      return pokemon.name.toUpperCase().includes(string.toUpperCase())
    })
    if(!findPokemons.length) return alert("no pokemon found with that name")
    setPokemons(findPokemons)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
   <div>
    <nav>
      <Search HandleSearch={HandleSearch}/>
      <button onClick={handleToggle} className="btn__new-pokemon"><img src={plus_icon} alt="plus_icon"  style={{width:"30px", }} className="btn__new-pokemon_icon"/>New</button>
    </nav>
    <main className="main-container">
      <Table pokemons={pokemons}/>
      {
        toggle && <CreatePokemon handleToggle={handleToggle}/>
      }
    </main>
   </div>
  );
}

export default App;