import { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import Search from "./Components/Nav/Search";
import plus_icon from './img/plus_icon.svg'
import "./App.css"
import Table from "./Components/Table/Table";
import { usePokemons } from "./Hooks/usePokemons";
import { useToggle } from "./Hooks/useToggle";
import { handlePost } from "./func/handlePost";

function App() {
  const [pokemons, setPokemons] = usePokemons([])
  const [toggleCreate , handleToggleCreate] = useToggle()
  const [toggleUpdate , handleToggleUpdate] = useToggle()
  const [purpose, setPurpose] = useState({})
  return (
   <div>
    
    <nav className="nav-container">
      <Search setPokemons={setPokemons}/>
      <button onClick={handleToggleCreate} className="btn__new-pokemon"><img src={plus_icon} alt="plus_icon"  style={{width:"30px", }} className="btn__new-pokemon_icon"/>New</button>
    </nav>

    <main className="main-container">
      <Table pokemons={pokemons} handle={handleToggleUpdate} set={setPurpose}/>
      
      {toggleCreate && <Form 
      handle={handleToggleCreate} 
      purpose={{title : "New Pokemon",method : handlePost}}/>}

      {toggleUpdate && <Form handle={handleToggleUpdate} purpose={purpose}/>}
    </main>
   </div>
  );
}

export default App;
