// reducer.js

import { 
    ADD_TODO, TOGGLE_TODO, MARK_COMPLETED_TODO, 
    REMOVE_TODO, MARK_ALL_COMPLETED_TODO, MARK_INCOMPLETE_TODO, 
    FILTER_TODO, SEARCH_TODO 
} from "../Action/actionType";

const initialState = {
    todos: [],
    filter: 'ALL',
    search: ''
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log("action : ",action);
            
            return {
                ...state,
                todos: [...state.todos, { text: action.payload.text, completed: false }]
            };
        
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                )
            };
        
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload.id)
            };
        
        case MARK_COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                    index === action.payload.id ? { ...todo, completed: true } : todo
                )
            };
        
        case MARK_INCOMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                    index === action.payload.id ? { ...todo, completed: false } : todo
                )
            };
        
        case FILTER_TODO:
            return {
                ...state,
                filter: action.payload.filter
            };
        
        case SEARCH_TODO:
            return {
                ...state,
                search: action.payload.search
            };
        
        default:
            return state;
    }
};

export default todoReducer;