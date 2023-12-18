import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './components/TodoApp'
import TodoItem from './components/TodoItem'
import UseRef from './concepts/useRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseReducer /> */}
    <TodoApp />
    {/* <TodoItem /> */}
    </>
  )
}

export default App



