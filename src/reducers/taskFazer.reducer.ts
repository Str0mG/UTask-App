import {actionsTypes} from '../constants/task';

const INITIAL_STATE = {
    tasks: [{
        id: 1,
        title: 'Welcome to UTask 3.0',
        description: 'Espero que goste :)',
        raia: 0
    },
    ],
}

const reducers = (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        case actionsTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        case actionsTypes.REMOVE_TASK:
            return {tasks: state.tasks.filter(task => task.id !== action.payload.id)}
        case actionsTypes.NEXT_TASK:
            action.payload.raia = action.payload.raia + 1 
            const teste = {tasks: state.tasks.filter(task => task.id !== action.payload.id)}
            return {tasks:[...teste['tasks'], action.payload]}

        case actionsTypes.PREV_TASK:
            action.payload.raia = action.payload.raia - 1 
            const teste2 = {tasks: state.tasks.filter(task => task.id !== action.payload.id)}
            return {tasks:[...teste2['tasks'], action.payload]}
        case actionsTypes.REPLAY_TASK:
            action.payload.raia = 0
            const teste3 = {tasks: state.tasks.filter(task => task.id !== action.payload.id)}
            return {tasks:[...teste3['tasks'], action.payload]}
        case actionsTypes.EDIT_TASK:
            const teste4 = {tasks: state.tasks.filter(task => task.id !== action.payload.id)}
            return {tasks:[...teste4['tasks'], action.payload]}
            
        default:
        return state;
    }
}

export {reducers}