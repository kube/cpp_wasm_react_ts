import React, { FunctionComponent, useState } from 'react'
import { render } from 'react-dom'

const App: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  return <div>
    <h1>Hello</h1>
    <p>{counter}</p>

    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
}

render(<App />, document.getElementById('root'))
