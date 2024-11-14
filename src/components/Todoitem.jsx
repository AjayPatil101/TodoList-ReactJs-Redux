import React from 'react'
import { useDispatch } from 'react-redux'
import { markCompletedTodo, removeTodo, toggleTodo } from '../Redux/Action/actions';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Todoitem = ({ todo, index }) => {
    const dispatch = useDispatch();
    return (
        <li className='flex flex-col md:flex-row sm:items-center justify-between border-b-2  py-2 gap-4'>
            <div className='flex items-center flex-wrap'>
                <span className='mr-4 text-blue-500'>
                    {index + 1}
                </span>
                <span className={`mr-4 ${todo.completed ? "line-through text-blue-500" : ""
                    }`}>
                    {todo.text}
                </span>
            </div>
            <div className='flex space-x-3 ml-8'>
                <button 
                onClick={()=>dispatch(toggleTodo(index))}
                className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded'>
                    {
                        todo.completed?<BsToggle2Off />:<BsToggle2On />
                    }
                </button>
                <button 
                onClick={()=>dispatch(removeTodo(index))}
                className='mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded'>
                    <FaTrash />
                </button>
                {!todo.completed &&(
                    <button
                    onClick={()=>dispatch(markCompletedTodo(index))}
                    className='mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded'
                    >
                        <ImCross />
                    </button>
                )}
                {todo.completed &&(
                    <button
                    onClick={()=>dispatch(markCompletedTodo(index))}
                    className='mr-2 text-sm bg-green-500 text-white sm:px-2 py-1 px-1 rounded'
                    >
                       <FaCheck  />
                    </button>
                )}
            </div>
        </li>
    )
}

export default Todoitem
