import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe("general App test", () => {
    test("Renders correctly.", () => {
        render(<App />)
    })
    test("Renders Hello.", () => {
        render(<App />)
        const el = screen.getByText("Hello")
        expect(el).toBeInTheDocument()
    })
})