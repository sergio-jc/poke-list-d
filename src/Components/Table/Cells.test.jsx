import "@testing-library/jest-dom/extend-expect"
import { fireEvent , render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import Cells from './Cells'


describe("<Cells />",()=>{
    const pokemon = {
        attack :50 ,
        defense : 50 ,
        hp : 0,
        id: 1,
        id_author : 1 ,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        name : "charmander",
        type: "fire"
    }

    test("renders content",()=>{
        const component = render(<table><tbody><Cells pokemon={pokemon}/></tbody></table>)
    
        component.container.querySelector("tr")
        component.getByText(pokemon.name)
    })
    
    test("clicking the button calls event handler and set once",()=>{
    
        const mockHandler = jest.fn()
        const mockset = jest.fn()
    
        const component = render(<table>
            <tbody>
                <Cells pokemon={pokemon} handle={mockHandler} set={mockset}/>
            </tbody>
            </table>)
    
        const buttonhandle = component.getByAltText("edit_icon")
        const buttonset = component.getByAltText("garbage_icon")
        fireEvent.click(buttonhandle)
        fireEvent.click(buttonset)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
        expect(mockset).toHaveBeenCalledTimes(1)
    })
})
