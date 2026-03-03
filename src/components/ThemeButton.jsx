import { useContext } from "react"
import { ThemeContext } from '../contexts/AppProvider'

export default function ThemeButton() {

    // Step 3: Consume the context value (use the useContext hook)
    const { theme, toggleTheme } = useContext(ThemeContext)

    const style = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        border: theme === 'light' ? '1px solid black' : '1px solid white'
    }

    return (
        <div style={style}>
            <div>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    )
}