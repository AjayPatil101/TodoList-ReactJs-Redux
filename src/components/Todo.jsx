// Todo.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { addTodo, UpdateSearchTodo } from '../Redux/Action/actions';
import FilterButton from './FilterButton';
import { BsSearch } from 'react-icons/bs';
import List from './List';

const Todo = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleAddTodo = () => {
        if (todoText.trim() !== "") {
            
            dispatch(addTodo(todoText.trim()));
            setTodoText("");
        }
    };

    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-200 rounded'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center text-blue-700 uppercase'>Todo List App</h2>
            <div className="flex items-center mb-4">
                <input
                    type='text'
                    placeholder='Enter Your Task'
                    className='flex-grow p-2 border-b-2 border-gray-300 rounded focus:outline-none focus:border-blue-500'
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <button
                    className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-800 focus:outline-none'
                    onClick={handleAddTodo}
                >
                    <FaArrowAltCircleRight />
                </button>
            </div>
            <div className='flex items-center justify-between flex-wrap mt-4'>
                <FilterButton />
                <div className='flex items-center justify-end mt-4 sm:mt-0'>
                    <input 
                        type="text"
                        placeholder='Search'
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            dispatch(UpdateSearchTodo(e.target.value));
                        }}
                        className='flex-grow rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mr-4'
                    />
                    <button className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'>
                        <BsSearch />
                    </button>
                </div>
            </div>
            <List />
        </div>
    );
};

export default Todo;
