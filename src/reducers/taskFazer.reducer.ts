import {actionsTypes} from '../constants/task';

const INITIAL_STATE = {
    tasks: [{
        id: 1,
        title: 'Task 2',
        description: 'Task 1 description',
        raia: 0
    },
    {
        id: 2,
        title: 'Task 1',
        description: 'Task 1 description',
        raia: 1
    }],
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
            return {tasks: state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {...task, raia: task.raia + 1}
                }
                return task
            }
            )}
        case actionsTypes.PREV_TASK:
            return {tasks: state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {...task, raia: task.raia - 1}
                }
                return task
            }
            )}
        case actionsTypes.REPLAY_TASK:
            return {tasks: state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {...task, raia: 0}
                }
                return task
            }
            )}
            
        default:
        return state;
    }
}

export {reducers}