import { combineReducers } from 'redux'

const todoReducer = (state = {list : []}, action) => {
    switch(action.type){
        case 'ADD_TODO' : 
            console.log('ADD+TODO')
        default :
            return state
    }
    return state
}
export default todoReducer;