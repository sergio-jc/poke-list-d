import React from 'react'
import "./Search.css"
import search_icon from '../../img/search_icon.svg'
import { useSearch } from '../../Hooks/useSearch'
import plus_icon from '../../img/plus_icon.svg'

const Search = ({setPokemons,handle}) => {
    const {handleSubmit,handleChange,input} = useSearch(setPokemons)

  return (
    <nav className="nav-container">
      <form onSubmit={handleSubmit} className="search-form">
        <label htmlFor="pokeInput" className="search-form__label">Pokemon List</label>
        <div className="search-form__input-container">
          <button className='search-form__btn'>
          <img style={{width: '20px'}} src={search_icon} alt="search_icon" />
          </button>
          <input id="pokeInput" type="text" value={input} onChange={handleChange} className="search-form__input" placeholder="Search"/>
        </div>
      </form>
      <button onClick={handle} className="btn__new-pokemon"><img src={plus_icon} alt="plus_icon"  style={{width:"30px", }} className="btn__new-pokemon_icon"/>New</button>
    </nav>
    )
}

export default Search