import { createContext, useState } from "react"

// Step 1: Create the context (optional: add an argument for the default value)
export const ThemeContext = createContext(null)
export const UserContext = createContext(null)

// OPTIONAL: Can create your own custom Provider component (removes a lot of logic from App)
function AppProviders({ children }) {

    const [theme, setTheme] = useState('light')
    const [currentUser, setCurrentUser] = useState(null)

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    const login = (userName) => setCurrentUser({ name: userName })

    const logout = () => setCurrentUser(null)

    return (
        // Step 2: Provide the context (add a value prop)
        <UserContext.Provider value={{ currentUser, login, logout }}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>

                {children}

            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export default AppProviders