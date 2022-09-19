import "@testing-library/jest-dom/extend-expect"
import { fireEvent , render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import Form from './Form'

describe("<Form />", ()=>{
    test("render component",()=>{
        const mockHandler = jest.fn()
        const mockFunc = jest.fn()

        const options = {
            title: "Test",
            method : mockFunc
        }
        const component = render(<Form handle={mockHandler} purpose={options}/>)

        component.container.querySelector("form")
      console.log(component.container.querySelector("input"))  
        component.container.querySelector("button")
    })
})