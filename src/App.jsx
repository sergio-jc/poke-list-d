import { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import Search from "./Components/Nav/Search";
import plus_icon from './img/plus_icon.svg'
import "./App.css"
import Table from "./Components/Table/Table";
import { usePokemons } from "./Hooks/usePokemons";
import { useToggle } from "./Hooks/useToggle";

function App() {
  const [pokemons, setPokemons] = usePokemons([])
  const [toggle , handleToggle] = useToggle(false)
  return (
   <div>
    <nav className="nav-container">
      <Search setPokemons={setPokemons}/>
      <button onClick={handleToggle} className="btn__new-pokemon"><img src={plus_icon} alt="plus_icon"  style={{width:"30px", }} className="btn__new-pokemon_icon"/>New</button>
    </nav>
    <main className="main-container">
      <Table pokemons={pokemons} handleToggle={handleToggle}/>
      {toggle && <Form handleToggle={handleToggle}/>}
    </main>
   </div>
  );
}

export default App;
