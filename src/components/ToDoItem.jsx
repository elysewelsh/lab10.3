import { useContext } from "react"
import { ToDoContext } from "../contexts/AppProvider"

export default function ToDoItem ({toDo}) {

    
    
    const {toggleToDo, deleteToDo, editToDo } = useContext(ToDoContext)

    const handleEdit = () => {
        const newText = prompt("New ToDo Title: ", toDo.text);
        if (newText) {
            editToDo(toDo.id, newText)
        }
    }

    return(
        <>
        <div className="flex flex-row justify-evenly border-1">
            <div className="flex flex-col justify-center">
                <h2 className="font-bold text-lg">{toDo.text}</h2>
                <p className="text-md">{toDo.completed === true ? "Completed" : "Active" }</p>
            </div>
            <div className="flex flex-col">
                <div className="flex my-5 gap-2">
                    <button className="rounded border-2 border-transparent px-8 py-4 text-lg font-semibold bg-gray-800 cursor-pointer transition-all duration-[250ms] ease-in-out hover:border-[#3182ce] focus:outline-none focus:ring-2 focus:ring-[#3182ce]" onClick={handleEdit}>Edit</button>
                    <button className="rounded border-2 border-transparent px-8 py-4 text-lg font-semibold bg-gray-800 cursor-pointer transition-all duration-[250ms] ease-in-out hover:border-[#3182ce] focus:outline-none focus:ring-2 focus:ring-[#3182ce]" onClick={() => deleteToDo(toDo.id)}>Delete</button>
                </div>
                <button className="mb-5" onClick ={() => toggleToDo(toDo.id)}>
                    {toDo.completed ? 'Mark Active' : 'Mark Completed'}
                </button>
            </div>
        </div>
        </>
    )
}