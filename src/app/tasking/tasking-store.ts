import { tassign } from "tassign";
import { Reducer } from 'redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS } from "./tasking-actions";

export interface ITaskingState {
    todos: {id: number, task: string, isCompleted: boolean}[];
    lastUpdate: Date;
    counter: number;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
    todos: [],
    lastUpdate: new Date(),
    counter: 0
}

function addTodo(state: any, action: any) {
    return tassign(state, {
        todos: state.todos.concat({
            id: state.counter + 1, 
            task: action.value, 
            isCompleted: false
        }),
        lastUpdate: new Date(),
        counter: state.counter + 1
    });
}

function toggleTodo(state: any, action: any) {
    let item = state.todos.find((i: {id: number, task: string, isCompleted: boolean}) => i.id === action.todo.id);
    let index = state.todos.indexOf(item);

    let beforeItems = state.todos.slice(0, index);
    let afterItems = state.todos.slice(index + 1);

    let updatedItem = tassign(item, { isCompleted: !item.isCompleted });

    let newArray = [...beforeItems, updatedItem, ...afterItems];

    return tassign(state, { 
        todos: newArray,
        lastUpdate: new Date()
    });
}

function removeTodo(state: any, action: any) {
    let todos = state.todos.filter((i: {id: number, task: string, isCompleted: boolean}) => i.id !== action.todo.id);
    return tassign(state, { 
        todos: todos,
        lastUpdate: new Date()
    });
}

function clearTodos(state: any, action: any ) {
    return tassign(state, { 
        todos: [],
        lastUpdate: new Date()
     });
}
  
export const taskingReducer: Reducer<ITaskingState> = (state: any = TASKING_INITIAL_STATE, action: any): ITaskingState => {
    switch(action.type) {
        case ADD_TODO: return addTodo(state, action);
        case TOGGLE_TODO: return toggleTodo(state, action);
        case REMOVE_TODO: return removeTodo(state, action);
        case CLEAR_TODOS: return clearTodos(state, action);    
    }
    
    return state;
}