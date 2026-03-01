import { useState } from 'react'
import './App.css'
import AppProviders from './contexts/AppProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppProviders>
    <ToDoInput onChange={handleChange}/>
    <ToDoList/>
    </AppProviders>
  )
}

export default App
