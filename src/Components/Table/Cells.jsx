import React from 'react'
import edit_icon from '../../img/edit_icon.svg'
import garbage_icon from '../../img/garbage_icon.svg'
import { handleDelete } from '../../func/handleDelete'
import { handlePut } from '../../func/handlePut'
import { parseInput } from '../../func/parseInput'

const Cells = ({pokemon,handle,set}) => {
  console.log(parseInput(pokemon))
  return (
    <tr key={pokemon.id}>
        <td>{pokemon.name}</td> 
        <td > <div className='table__td'><img style={{width:"25px"}} src={pokemon.image} alt={pokemon.name} /></div> </td>
        <td>{pokemon.attack}</td>
        <td>{pokemon.defense}</td>
        <td>
        <div className='table__td'>
            <img style={{width:"17px",cursor:"pointer"}} src={edit_icon} alt="edit_icon" onClick={()=>{
                handle()
                set({
                  title : "Update Pokemon",
                  method : handlePut,
                  input : parseInput(pokemon)
                })
            }}/>
            <img onClick={()=>handleDelete(pokemon.id)} style={{width:"17px",cursor:"pointer"}} src={garbage_icon} alt="garbage_icon" />
        </div>
        </td>
    </tr>
      
  )
}

export default Cells