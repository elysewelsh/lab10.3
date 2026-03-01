export default function ToDoInput () {
    return (
        <>
            <form className="flex flex-col justify-start max-w-[30vw] m-4 p-4 gap-3 border-1 rounded-xl" addToDo={() => editToDo(input)}></form>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
                />
            <button type="submit">Add ToDo</button>
        </>
    )
};