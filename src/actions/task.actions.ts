import {actionsTypes} from '../../src/constants/task';

const actions = {
    adicionar: (task: any) => ({
        type: actionsTypes.ADD_TASK,
        payload: task
    }),
    remover: (task: any) => ({
        type: actionsTypes.REMOVE_TASK,
        payload: task
    }),
    next: (task: any) => ({
        type: actionsTypes.NEXT_TASK,
        payload: task
    }),
    prev: (task: any) => ({
        type: actionsTypes.PREV_TASK,
        payload: task
    }),
    replay: (task: any) => ({
        type: actionsTypes.REPLAY_TASK,
        payload: task
    }),
}

export { actions }