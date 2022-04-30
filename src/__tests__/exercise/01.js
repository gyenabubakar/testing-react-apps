// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<Counter />, div)

  const [decrementBtn, incrementBtn] = div.querySelectorAll('button')

  const msgDiv = div.firstChild.querySelector('div')

  expect(msgDiv.textContent).toBe('Current count: 0')

  incrementBtn.click()
  expect(msgDiv.textContent).toBe('Current count: 1')

  decrementBtn.click()
  expect(msgDiv.textContent).toBe('Current count: 0')

  div.remove()
})

/* eslint no-unused-vars:0 */
