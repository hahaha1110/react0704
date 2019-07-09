import {combineReducers} from 'redux'
import todoReducer from './todoReducer.js'

const shopApp = combineReducers(
    {
        todoReducer
    }
)
export default shopApp