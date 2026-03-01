import ToDoItem from './ToDoItem'

export default function ToDoList () {
    const list = toDos.map((toDo) => {
        return (
            <div key={toDo.id}>
                <ToDoItem toDo={toDo}/>
            </div>
        )
    })
    return (
        <>
        {list}
        </>
    )
}