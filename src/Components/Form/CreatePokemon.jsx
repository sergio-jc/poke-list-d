import React, { useState } from 'react'
import "./CreatePokemon.css"
import close_icon from '../../img/close_icon.svg'
import save_icon from '../../img/save_icon.svg'

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
    <form onSubmit={handleSubmit} className="create-form">
      <h2>New Pokemon</h2>
      <div className='create-form__inputs'>
        <div>
          <label htmlFor="pokeName" className="create-form__input">
            <span className="create-form__input_span">Name:</span> 
            <input type="text" name="name" id="pokeName" onChange={handleInput}/>
          </label>
          <label htmlFor="imgPokemon" className="create-form__input">
            Image:
            <input type="text" name="image" id="imgPokemon" onChange={handleInput}/>
          </label>
        </div>
        <div>
          <label htmlFor="pokeAttack" className="create-form__input">
            <span className="create-form__input-range_span">Attack:</span> 
             0 <input type="range" name="attack" id="pokeAttack" min={0} max={100}onChange={handleInput}/>100
          </label>
          <label htmlFor="pokeDefense" className="create-form__input">
            Defense:
            0<input type="range" name="defense" id="pokeDefense" min={0} max={100} onChange={handleInput}/>100
          </label>
        </div>
      </div>
      <div className='create-form__btn-container'>
        <button className='create-form_disable-btn'><img style={{width: '18px'}} src={save_icon} alt="search_icon" />Save</button>
        <button onClick={handleToggle}><img style={{width: '13px'}} src={close_icon} alt="search_icon" />Close</button>
      </div>
    </form>
  )
}

export default CreatePokemon