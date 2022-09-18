import "./Form.css"
import close_icon from '../../img/close_icon.svg'
import save_icon from '../../img/save_icon.svg'
import { usePokeForm } from '../../Hooks/usePokeForm'

const Form = ({handleToggle,id}) => {
  const {
    input,
    errors,
    disable,
    handleInput,
    handleSave

  } = usePokeForm(id)

  return (
    <form onSubmit={(e)=>handleSave(e,input)} className="create-form">
      <h2>New Pokemon</h2>
      <div className='create-form__inputs'>
        <div>
          <label htmlFor="pokeName" className="create-form__input">
            <span className="create-form__input_span">Name:</span> 
            <input className={errors.name.length? "error": ""} type="text" name="name" id="pokeName" onChange={handleInput} value={input.name}/>
          </label>
          <label htmlFor="imgPokemon" className="create-form__input">
            Image:
            <input className={errors.image.length? "error": ""} type="text" name="image" id="imgPokemon" onChange={handleInput} placeholder="  url" value={input.image}/>
          </label>
        </div>
        <div>
          <label htmlFor="pokeAttack" className="create-form__input">
            <span className="create-form__input-range_span">Attack:</span> 
             0 <input type="range" name="attack" id="pokeAttack" min={0} max={100}onChange={handleInput}value={input.attack}/>100
          </label>
          <label htmlFor="pokeDefense" className="create-form__input">
            Defense:
            0<input type="range" name="defense" id="pokeDefense" min={0} max={100} onChange={handleInput}value={input.defense}/>100
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