// FilterButton.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, markAllCompletedTodo } from '../Redux/Action/actions';

const FilterButton = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    return (
        <div className='flex space-x-4 items-center'>
            <select 
                value={currentFilter}
                onChange={(e) => dispatch(filterTodo(e.target.value))}
                className='text-sm px-2 py-1 border-blue-300 focus:outline-none'
            >
                <option value='ALL'>Default</option>
                <option value='COMPLETED'>Completed</option>
                <option value='INCOMPLETE'>Incomplete</option>
            </select>
            <button 
                onClick={() => dispatch(markAllCompletedTodo())} 
                className='text-sm px-2 py-1 bg-blue-700 text-white ml-2 rounded'
            >
                Mark All Completed
            </button>
        </div>
    );
};

export default FilterButton;
