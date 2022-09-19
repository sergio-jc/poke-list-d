import { useEffect, useState } from "react"

export const parseInput = (pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      attack: pokemon.attack ,
      defense : pokemon.defense ,
      hp : pokemon.hp,
      type: pokemon.type,
      idAuthor: pokemon.id_author
    }
}


// import { useEffect, useState } from "react"

// export const usePokemon = (id) => {
//     const [pokemon, setPokemon] = useState({})
//       useEffect(()=>{
//         if( typeof id !== "undefined") {
//         fetch(`https://bp-pokemons.herokuapp.com/${id}`)
//         .then((res)=>res.json())
//         .then((json)=>{
//           console.log(json)
//             setPokemon({
//               id: json.id,
//               name: json.name,
//               image: json.image,
//               attack: json.attack ,
//               defense : json.defense ,
//               hp : json.hp,
//               type: json.type,
//               idAuthor: json.id_author
//             })
//             })
//     }
//       },[])
//       return pokemon
// }