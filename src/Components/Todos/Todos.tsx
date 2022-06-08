
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodosType } from '../../api/api'
import { AppRootStateType } from '../../store/store'
import { changeTodosTitle, fetchTodos, removeTodos } from '../../store/todos-reducer'
import { Todolist } from './Todolist'
import styles from "./Todos.module.scss"


export const Todos: React.FC = () => {
    
    const todos = useSelector<AppRootStateType, Array<TodosType>>(state => state.todos)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])


    const removeTodolist = useCallback((id: number) => {
        dispatch(removeTodos(id))
    }, [dispatch])

    const changeTodolistTitle = useCallback((id: number, title: string) => {
        dispatch(changeTodosTitle(id, title))
    }, [dispatch])



    return <>
        <div className={styles.todos} >
            {
                todos.map(tl => {
                    return <div   key={tl.id}>
                            <Todolist
                                todos={tl}
                                removeTodos={removeTodolist}
                                changeTodosTitle={changeTodolistTitle}
                            />
                    </div>
                })
            }
        </div>
    </>
}