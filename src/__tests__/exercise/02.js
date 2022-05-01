import {render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)

  const [decrementBtn, incrementBtn] = container.querySelectorAll('button')

  const message = container.firstChild.querySelector('div')
  expect(message.textContent).toBe('Current count: 0')

  fireEvent.click(incrementBtn)
  expect(message.textContent).toBe('Current count: 1')

  fireEvent.click(decrementBtn)
  expect(message.textContent).toBe('Current count: 0')
})
