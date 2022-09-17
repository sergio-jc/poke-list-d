import React, { useState } from 'react'

const CreatePokemon = ({handleToggle}) => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    attack: "50" ,
    defense : "50" ,
    hp : "0",
    type: "pokemon",
    idAuthor: 1
  })
  console.log(input)

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    };
    console.log(options)
    fetch("https://bp-pokemons.herokuapp.com/?idAuthor=1",options)
    .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
        console.log(update)
        window.location.reload();
      })
      .catch(e => {
      console.log(e);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Pokemon</h2>
      <div>
        <label htmlFor="pokeName">
          Name:
          <input type="text" name="name" id="pokeName" onChange={handleInput}/>
        </label>
        <label htmlFor="imgPokemon">
          Image:
          <input type="text" name="image" id="imgPokemon" onChange={handleInput}/>
        </label>
      </div>
      <div>
        <label htmlFor="pokeAttack">
          Attack:
          0<input type="range" name="attack" id="pokeAttack" min={0} max={100}onChange={handleInput}/>100
        </label>
        <label htmlFor="pokeDefense">
          Defense:
          0<input type="range" name="defense" id="pokeDefense" min={0} max={100} onChange={handleInput}/>100
        </label>
      </div>
      <button>Save</button>
      <button onClick={handleToggle}><span>x</span>Close</button>
    </form>
  )
}

export default CreatePokemon