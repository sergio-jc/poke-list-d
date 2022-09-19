import React from 'react'
import Cells from './Cells'
import "./Table.css"

const Table = ({pokemons, handle,set}) => {
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
            pokemons.map((pokemon,id)=>{
              return <Cells key={`${id}_cell`} pokemon={pokemon} handle={handle} set={set}/>})
          }
        </tbody>
      </table>
      )
  } else {
    return <h1>Loading...</h1>
  }
}

export default Table