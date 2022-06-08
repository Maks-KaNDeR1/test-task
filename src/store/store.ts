import thunk, { ThunkAction } from 'redux-thunk';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { TodosActionsType, todosReducer } from './todos-reducer';
import appReducer, { AppActionsType } from './app-reducer';

export const rootReducer = combineReducers({
    todos: todosReducer,
    app: appReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AllActionsType = AppActionsType | TodosActionsType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>



// @ts-ignore
window.store = store
