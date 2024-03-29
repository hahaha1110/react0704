
import {createStore as reduxCreateStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
    
import logger from 'redux-logger'
// import {routerReducer, routerMiddleware} from 'react-router-redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'

import * as reducers from './reducers'

export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            ...reducers,
            router :  connectRouter(history)
        }),
        applyMiddleware(
            logger,
            thunk,
            routerMiddleware(history)
        )
    )

}