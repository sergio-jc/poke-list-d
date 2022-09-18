import React from 'react'

import Cells from './Cells'
import "./Table.css"

const Table = ({pokemons, handleToggle}) => {
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
              <Cells pokemon={pokemon} handleToggle={handleToggle}/>
            )})
          }
        </tbody>
      </table>
      )
  } else {
    return <h1>Loading...</h1>
  }
}

export default Table