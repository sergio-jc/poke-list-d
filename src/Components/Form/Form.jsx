import React, { useState } from 'react'
import "./Form.css"
import close_icon from '../../img/close_icon.svg'
import save_icon from '../../img/save_icon.svg'
import { validate } from '../../func/funcAux'
import { handleCreate } from '../../func/handleCreate.js'

const Form = ({handleToggle}) => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    attack: "50" ,
    defense : "50" ,
    hp : "0",
    type: "pokemon",
    idAuthor: 1
  })
  const [errors, setErrors] = useState({
    name: "enter a name",
    image: "copy a URL",
  })

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
  }
  let disable ;
  if( !errors.name.length && !errors.image.length){
    disable = ""
  } else {
    disable = "create-form_disable-btn"
  }

  return (
    <form onSubmit={(e)=>handleCreate(e,input)} className="create-form">
      <h2>New Pokemon</h2>
      <div className='create-form__inputs'>
        <div>
          <label htmlFor="pokeName" className="create-form__input">
            <span className="create-form__input_span">Name:</span> 
            <input className={errors.name.length? "error": ""} type="text" name="name" id="pokeName" onChange={handleInput}/>
          </label>
          <label htmlFor="imgPokemon" className="create-form__input">
            Image:
            <input className={errors.image.length? "error": ""} type="text" name="image" id="imgPokemon" onChange={handleInput} placeholder="  url"/>
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
        <button className={disable}><img style={{width: '18px'}} src={save_icon} alt="search_icon" />Save</button>
        <button onClick={handleToggle}><img style={{width: '13px'}} src={close_icon} alt="search_icon" />Close</button>
      </div>
    </form>
  )
}

export default Form