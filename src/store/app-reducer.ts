import { AppThunkType } from './store';
import { fetchTodos } from "./todos-reducer";


const initialState = {
    initialized: false
};


type AppReducerType = typeof initialState

export const appReducer = (state: AppReducerType = initialState, action: AppActionsType): AppReducerType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};



export const initializedSuccess = () => ({ type: 'INITIALIZED_SUCCESS' } as const)

export const initializeApp = ():AppThunkType => async (dispatch) => {
    let promise = dispatch(fetchTodos())
    Promise.all([promise])
        dispatch(initializedSuccess())
}

type InitializedSuccessType = ReturnType<typeof initializedSuccess>

export type AppActionsType = InitializedSuccessType

export default appReducer
