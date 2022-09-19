import "@testing-library/jest-dom/extend-expect"
import { fireEvent , render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import NavBar from './NavBar'

describe("<NavBar />" , ()=>{

    test("render component",()=>{
        let component = render(<NavBar />)

        component.container.querySelector("nav")
        component.container.querySelector("form")
        component.container.querySelector("button")
    })
    
    test("clicking the button new",()=>{
        const mockHandler = jest.fn()
        const component = render(<NavBar handle={mockHandler}/>)
        const buttonhandle = component.getByText("New")

        fireEvent.click(buttonhandle)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })

    test("should renders the form elements",()=>{
        const mockHandler = jest.fn()
        const mockSet = jest.fn()

        const component = render(<NavBar setPokemons={mockSet} handle={mockHandler}/>)

        component.getByLabelText("Pokemon List")
        component.getByAltText("search_icon")
    })
})