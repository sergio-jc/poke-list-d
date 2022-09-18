import { useEffect, useState } from "react"

export const usePokemons= () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(()=>{
        fetch("https://bp-pokemons.herokuapp.com/?idAuthor=1")
          .then((res)=>res.json())
          .then((json)=> setPokemons(json))
      },[])

    return [pokemons, setPokemons]
}
