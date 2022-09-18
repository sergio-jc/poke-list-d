export const handleDelete = (id) => {
    const options = {
      method: 'DELETE',
    }
    fetch(`https://bp-pokemons.herokuapp.com/${id}` , options)
      .then(res => res.json())
      .then(res => {
        window.location.reload()
        console.log(res)})
  }