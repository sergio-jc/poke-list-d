import "@testing-library/jest-dom/extend-expect"
import { fireEvent , render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import Table from './Table'

describe("<Table />" , ()=>{
    const pokemons =[{
        attack :50 ,
        defense : 50 ,
        hp : 0,
        id: 1,
        id_author : 1 ,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        name : "charmander",
        type: "fire"
    }]

    test("render loading",()=>{
        let component = render(<Table />)
        component.getByText("Loading...")
    })
    test("render table",()=>{
        let component = render(<Table pokemons={pokemons} />)
        component.getByRole("table")
        component.container.querySelector("thead")
        component.container.querySelector("tbody")
    })
    test("render table headers",()=>{
        let component = render(<Table pokemons={pokemons} />)
        component.getByText("Name")
        component.getByText("Image")
        component.getByText("Attack")
        component.getByText("Defense")
        component.getByText("Actions")
    })
})