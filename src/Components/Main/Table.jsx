import React from 'react'
import edit_icon from '../../img/edit_icon.svg'
import garbage_icon from '../../img/garbage_icon.svg'
import "./Table.css"

const Table = ({pokemons}) => {

  const handleDelete = (id) => {
    const options = {
      method: 'DELETE',
    }
    fetch(`https://bp-pokemons.herokuapp.com/${id}` , options)
      .then(res => res.json())
      .then(res => {
        window.location.reload()
        console.log(res)})
  }

  if (pokemons && pokemons.length > 0 ){
    return (
      <table>
        <thead>
          <tr>
            <th><strong>Name</strong></th>
            <th><strong>Image</strong></th>
            <th><strong>Attack</strong></th>
            <th><strong>Defense</strong></th>
            <th><strong>Actions</strong></th>
          </tr>
        </thead>
        <tbody>
          {
            pokemons.map((pokemon)=>{
              return (
              <tr key={pokemon.id}>
                <td>{pokemon.name}</td> 
                <td><img style={{width:"25px"}} src={pokemon.image} alt={pokemon.name} /> </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td >
                  <div className='table__td-actions'>
                    <img style={{width:"20px"}} src={edit_icon} alt="edit_icon" />
                    <img onClick={()=>handleDelete(pokemon.id)} style={{width:"20px"}} src={garbage_icon} alt="garbage_icon" />
                  </div>
                </td>
              </tr>
            )})
          }
        </tbody>
      </table>
      )
  } else {
    return <h1>Cargando...</h1>
  }
}

export default Table