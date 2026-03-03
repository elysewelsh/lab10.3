import { useContext } from 'react';
import { FilterContext } from '../contexts/AppProvider';

export default function FilterButtons () {

    const { setFilter } = useContext(FilterContext);

    return (
        <div className="font-bold my-5"> Filter ToDos by status:
            <div className="flex flex-row gap-3">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('active')}>Active</button>
        </div>
        </div>
    )
}