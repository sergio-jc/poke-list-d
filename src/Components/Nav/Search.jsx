import React, { useState } from 'react'
import "./Search.css"
import search_icon from '../../img/search_icon.svg'
import { HandleSearch } from '../../func/handleSearch'

const Search = ({setPokemons}) => {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault()
        fetch("https://bp-pokemons.herokuapp.com/?idAuthor=1")
      .then((res)=>res.json())
      .then((json)=> {
        HandleSearch(json, input,setPokemons)
        setInput("")
    })}

  return (
  <form onSubmit={handleSubmit} className="search-form">
    <label htmlFor="pokeInput" className="search-form__label">Pokemon List</label>
    <div className="search-form__input-container">
      <button className='search-form__btn'>
      <img style={{width: '20px', margin: "0 8px"}} src={search_icon} alt="search_icon" />
      </button>
      <input id="pokeInput" type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="search-form__input" placeholder="Search"/>
    </div>
  </form>
    )
}

export default Search