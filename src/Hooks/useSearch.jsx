import { useState } from "react"
import { HandleSearch } from "../func/handleSearch"

export const useSearch= (setPokemons) => {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault()
        fetch("https://bp-pokemons.herokuapp.com/?idAuthor=1")
      .then((res)=>res.json())
      .then((json)=> {
        HandleSearch(json, input,setPokemons)
        setInput("")
    })}

    const handleChange= (e)=>setInput(e.target.value)

    return {handleSubmit,handleChange,input}
}
