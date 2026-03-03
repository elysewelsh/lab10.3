import { useContext} from 'react'
import { ToDoContext, FilterContext } from '../contexts/AppProvider'
import ToDoItem from './ToDoItem'

export default function ToDoList () {
    const {toDos} = useContext(ToDoContext)
    const {filter} = useContext(FilterContext)

    let filteredToDos = toDos;

    if (filter === 'active') {
        filteredToDos = toDos.filter(toDo => toDo.completed === false);
    } else if (filter === 'completed') {
        filteredToDos = toDos.filter(toDo => toDo.completed === true);
    };

    const list = filteredToDos.map(toDo => (
            <div key={toDo.id}>
                <ToDoItem toDo={toDo}/>
            </div>
    ));

    return (
        <div>
        {list}
        </div>
    )
}