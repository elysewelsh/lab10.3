import {useState, useContext } from 'react';
import { ToDoContext } from '../contexts/AppProvider';
import { ThemeContext } from '../contexts/AppProvider';

export default function ToDoInput () {

    const [input, setInput] = useState('');
    const { addToDo  }= useContext(ToDoContext);

    const handleAdd = (e) => {
        e.preventDefault();
        addToDo(input);
        setInput('');
    }

const {theme} = useContext(ThemeContext);

        const style = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        border: theme === 'light' ? '1px solid black' : '1px solid white'
    }

    return (
        <>
            <form className="flex flex-col justify-start max-w-[30vw] m-4 p-4 gap-3 border-1 rounded-xl" style={style} onSubmit={handleAdd}>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
                />
                <button type="submit">Add ToDo</button>
            </form>
        </>
    )
};