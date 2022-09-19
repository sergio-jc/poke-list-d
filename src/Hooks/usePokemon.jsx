import { useEffect, useState } from "react"

export const usePokemon = (id) => {
    const [pokemon, setPokemon] = useState({})
      useEffect(()=>{
        if( typeof id !== "undefined") {
        fetch(`https://bp-pokemons.herokuapp.com/${id}`)
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json)
            setPokemon(json)
            })
    }
      },[])
      return pokemon
}