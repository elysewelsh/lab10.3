
import './App.css'
import AppProviders from './contexts/AppProvider'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'
import FilterButtons from './components/FilterButtons'
import ThemeButton from './components/ThemeButton'

function App() {

  return (
    <AppProviders>
        <ThemeButton/>
        <ToDoInput/>
        <FilterButtons/>
        <ToDoList/>
    </AppProviders>
  )
}

export default App
