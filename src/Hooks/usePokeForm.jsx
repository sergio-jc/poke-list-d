import { useEffect, useState } from "react"
import { validate } from "../func/funcAux"
import { handleCreate } from "../func/handleCreate"
import { handleUpdate } from "../func/handleUpdate"

export const usePokeForm= (id) => {
    const [input, setInput] = useState({
        name: "",
        image: "",
        attack: "50" ,
        defense : "50" ,
        hp : "0",
        type: "pokemon",
        idAuthor: 1
      })
      
      const [errors, setErrors] = useState({
        name: "enter a name",
        image: "copy a URL",
      })
    
      const handleInput = (e) => {
        setInput({
          ...input,
          [e.target.name] : e.target.value
        })
        setErrors(validate({
          ...input,
          [e.target.name] : e.target.value
        }))
      }
      let disable ;
      if( !errors.name.length && !errors.image.length){
        disable = ""
      } else {
        disable = "create-form_disable-btn"
      }

      useEffect(()=>{
        if( typeof id !== "undefined") {
        fetch(`https://bp-pokemons.herokuapp.com/${id}`)
        .then((res)=>res.json())
        .then((json)=> console.log(json))
    }
      },[])

      return {
        input,
        errors,
        disable,
        handleInput,  
      }
}
