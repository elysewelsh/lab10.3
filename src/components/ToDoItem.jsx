export default function ToDoItem () {
    return(
        <>
        <div>
            <div>
                <h2>{toDo.text}</h2>
                <div>
                    <button className="rounded border-2 border-transparent px-8 py-4 text-lg font-semibold bg-gray-800 cursor-pointer transition-all duration-[250ms] ease-in-out hover:border-[#3182ce] focus:outline-none focus:ring-2 focus:ring-[#3182ce]" onClick={() => editToDo(toDo.id, newText)}>Edit</button>
                    <button className="rounded border-2 border-transparent px-8 py-4 text-lg font-semibold bg-gray-800 cursor-pointer transition-all duration-[250ms] ease-in-out hover:border-[#3182ce] focus:outline-none focus:ring-2 focus:ring-[#3182ce]" onClick={() => deleteToDo(toDo.id)}>Delete</button>
                </div>
            </div>
            <button onClick ={() => toggleToDo(toDo.completed)}>
                {isComplete ? 'In-Progress' : 'Complete'}
            </button>
        </div>
        </>
    )
}