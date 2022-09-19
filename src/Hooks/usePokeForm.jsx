import { useState } from "react"
import { validate } from "../func/validateForm"

const pokeSchema = {
  name: "",
  image: "",
  attack: "50" ,
  defense : "50" ,
  hp : "0",
  type: "pokemon",
  idAuthor: 1
}

export const usePokeForm= (pokemon = pokeSchema) => {
      const [input, setInput] = useState(pokemon)
      
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

      return {
        input,
        errors,
        disable,
        handleInput,  
      }
}
