import { useState } from "react";
import Form from "./Components/Form/Form";
import NavBar from "./Components/Nav/NavBar";
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
    <NavBar setPokemons={setPokemons} handle={handleToggleCreate}/>
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
