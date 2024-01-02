import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>learn about resux toolkit</h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
