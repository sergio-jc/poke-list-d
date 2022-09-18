export const HandleSearch = (pokemons, string, set) => {
    const findPokemons = pokemons.filter((pokemon)=>{
      return pokemon.name.toUpperCase().includes(string.toUpperCase())
    })
    if(!findPokemons.length) return alert("no pokemon found with that name")
    set(findPokemons)
  }