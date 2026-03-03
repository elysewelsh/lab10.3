import { createContext, useState, useEffect } from "react"

// Step 1: Create the context (optional: add an argument for the default value)
export const ThemeContext = createContext(null)
export const FilterContext = createContext('all')
export const ToDoContext = createContext([])

// OPTIONAL: Can create your own custom Provider component (removes a lot of logic from App)
function AppProviders({ children }) {

    const [filter, setFilter] = useState('all');

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {return JSON.parse(storedTheme)};
        return 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    },
        [theme]
    );

    const [toDos, setToDos] = useState(() => {
        const storedToDos = localStorage.getItem('todolist');
        if (storedToDos) {return JSON.parse(storedToDos)};
        return [];
    })

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(toDos));
    },
        [toDos]
    );

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')


    
    const toggleToDo = (id) => {
        setToDos(prevToDos => prevToDos.map(toDo => toDo.id === id ? {...toDo, completed: !toDo.completed } : toDo));
    }


    const addToDo = (text) => {
        const newToDo = {
            id: Date.now(),
            // id: ((Math.random()).toFixed(2)+(Math.random()).toFixed(3)+(Math.random()).toFixed(1)),
            text: text,
            completed: false
        }
        setToDos(prevToDos => [...prevToDos, newToDo])
    }

    const editToDo = (id, newText) => {
        setToDos((prevToDos) => prevToDos.map(toDo => toDo.id === id ? {...toDo, text: newText } : toDo))
    }

    const deleteToDo = (id) => {setToDos((prevToDos) => prevToDos.filter(todo => todo.id !== id)) }





    return (
        // Step 2: Provide the context (add a value prop)
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <FilterContext.Provider value={{ filter, setFilter }}>
                <ToDoContext.Provider value={{ toDos, toggleToDo, addToDo, editToDo, deleteToDo }}>

                {children}

                </ToDoContext.Provider>
            </FilterContext.Provider>
        </ThemeContext.Provider>

    )
}

export default AppProviders

//https://github.com/JadeTwo/2025-RTT-74/blob/main/mod-10/react-context/src/AppProviders.jsx