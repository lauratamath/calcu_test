/* Ejemplo hecho en clase
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
// import userEvent from '@testing-library/user-event'

describe('general App test', () => {
  test('Renders correctly.', () => {
    render(<App />)
  })
  test('Renders Hello.', () => {
    render(<App />)
    const el = screen.getByText('Hello')
    expect(el).toBeInTheDocument()
  })
}) */

import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import App from './App'

describe('general App test', () => {
  test('Renders correctly.', () => {
    render(<App />)
  })
})

describe('Check if a number is display when press', () => {
  const wrapper = mount(<App />)
  const btn = wrapper.find('#b1')
  btn.simulate('click')
  const pantalla = wrapper.find('#Display')
  expect(pantalla.text()).toEqual('1')
})

describe('Verify that the * procedure is as expected', () => {
  const wrapper = mount(<App />)
  const btn = wrapper.find('#button3')
  btn.simulate('click')
  const btn2 = wrapper.find('#buttonx')
  btn2.simulate('click')
  const btn3 = wrapper.find('#button5')
  btn3.simulate('click')
  const btn4 = wrapper.find('#buttone')
  btn4.simulate('click')
  const pantalla = wrapper.find('#Display')
  expect(pantalla.text()).toEqual('15')
})

describe('Verify that the / procedure is as expected', () => {
  const wrapper = mount(<App />)
  const btn = wrapper.find('#button9')
  btn.simulate('click')
  const btn2 = wrapper.find('#buttond')
  btn2.simulate('click')
  const btn3 = wrapper.find('#button3')
  btn3.simulate('click')
  btn2.simulate('click')
  const btn4 = wrapper.find('#button3')
  btn4.simulate('click')
  const btn5 = wrapper.find('#buttone')
  btn5.simulate('click')
  const pantalla = wrapper.find('#Display')
  expect(pantalla.text()).toEqual('1')
})

describe('Check if the calculator returns an error to negative results', () => {
  const wrapper = mount(<App />)
  const btn = wrapper.find('#button2')
  btn.simulate('click')
  const btn2 = wrapper.find('#buttonr')
  btn2.simulate('click')
  const btn3 = wrapper.find('#button6')
  btn3.simulate('click')
  const btn5 = wrapper.find('#buttone')
  btn5.simulate('click')
  const pantalla = wrapper.find('#Display')
  expect(pantalla.text()).toEqual('Error')
})

describe('Check if the calculator gives an error when having more than 9 digits', () => {
  const wrapper = mount(<App />)
  const btn = wrapper.find('#button9')
  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')
  const btn2 = wrapper.find('#buttonx')
  btn2.simulate('click')
  const btn3 = wrapper.find('#button8')
  btn3.simulate('click')
  const btn5 = wrapper.find('#buttone')
  btn5.simulate('click')
  const pantalla = wrapper.find('#Display')
  expect(pantalla.text()).toEqual('Error')
})

describe('Check handles number bigger than 9 digits', () => {
  const wrapper = mount(<App />)
  const btn = wrapper.find('#button9')
  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')

  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')

  btn.simulate('click')
  btn.simulate('click')
  btn.simulate('click')

  btn.simulate('click')
  const pantalla = wrapper.find('#Display')
  expect(pantalla.text()).toEqual('999999999')
})
