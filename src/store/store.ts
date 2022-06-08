import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import { todosReducer } from './todos-reducer';

export const rootReducer = combineReducers({
    todos: todosReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))
// @ts-ignore
window.store = store
