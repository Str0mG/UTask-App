import { combineReducers } from 'redux'

import {reducers as taskReducers} from './taskFazer.reducer'


const reducer = combineReducers({
    taskReducers
})

export { reducer }

