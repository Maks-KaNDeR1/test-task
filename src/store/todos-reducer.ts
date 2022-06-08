import { AppThunkType } from './store';
import { todosAPI, TodosType } from "../api/api";

const initialState: TodosType[] = []


export const todosReducer = (state: TodosType[] = initialState, action: TodosActionsType): TodosType[] => {
  switch (action.type) {
    case 'REMOVE-TODOS':
      return state.filter(tl => tl.id !== action.id)
    case 'CHANGE-TODOS-TITLE':
      return state.map(tl => tl.id === action.id ? { ...tl, title: action.title } : tl)
    case 'SET-TODOS':
      return action.todos
    default:
      return state;
  }
};


export const changeTodosTitle = (id: number, title: string) => ({
  type: 'CHANGE-TODOS-TITLE', id, title
} as const)

export const removeTodos = (id: number) => ({ type: 'REMOVE-TODOS', id } as const)

export const setTodos = (todos: TodosType[]) => ({ type: 'SET-TODOS', todos } as const)


export const fetchTodos = ():AppThunkType => (dispatch) => {
  todosAPI.getTodos()
    .then((res) => {
      dispatch(setTodos(res.data))
    })
}


type RemoveTodosActionType = ReturnType<typeof removeTodos>
type SetTodosActionType = ReturnType<typeof setTodos>

export type TodosActionsType =
  | SetTodosActionType
  | RemoveTodosActionType
  | ReturnType<typeof changeTodosTitle>