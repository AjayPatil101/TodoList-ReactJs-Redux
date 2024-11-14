// actions.js

import { 
    ADD_TODO, TOGGLE_TODO, MARK_COMPLETED_TODO, 
    REMOVE_TODO, MARK_ALL_COMPLETED_TODO, 
    MARK_INCOMPLETE_TODO, FILTER_TODO, SEARCH_TODO 
} from "./actionType";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id }
});

export const markCompletedTodo = (id) => ({
    type: MARK_COMPLETED_TODO,
    payload: { id }
});

export const markInCompletedTodo = (id) => ({
    type: MARK_INCOMPLETE_TODO,
    payload: { id }
});

export const markAllCompletedTodo = () => ({
    type: MARK_ALL_COMPLETED_TODO
});

export const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payload: { filter }
});

export const UpdateSearchTodo = (search) => ({
    type: SEARCH_TODO,
    payload: { search }
});
