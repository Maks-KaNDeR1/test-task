import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useCallback, useState } from 'react'
import { TodosType } from '../../api/api';
import { ButtonComponent } from '../common/Button/Button'
import { EditModal } from '../Modal/EditModal'
import { DeleteModal } from '../Modal/DeleteModal'
import styles from "./Todos.module.scss"

type PropsType = {
    todos: TodosType
    removeTodos: (id: number) => void
    changeTodosTitle: (id: number, newTitle: string) => void
}

export const Todolist: React.FC<PropsType> = React.memo(({ todos, removeTodos, changeTodosTitle }) => {

    const [checked, setChecked] = useState(todos.completed)
    const [editModalActive, setEditModalActive] = useState(false)
    const [deleteModalActive, setDeleteModalActive] = useState(false)

    const handleClick = () => {
        removeTodos(todos.id)
    }

    const changeTitle = useCallback((title: string) => {
        changeTodosTitle(todos.id, title)
    }, [changeTodosTitle, todos.id])



    const onChange = (e: CheckboxChangeEvent) => {
        setChecked(e.target.checked);
    };

    return <div className={styles.todolistBlock} >
        <h3>Title </h3>

        <div className={styles.title} >
            <div >{todos.title}</div>
        </div>
        <div>
            <EditModal setChecked={setChecked} checked={checked}
                changeTitle={changeTitle} id={todos.id} active={editModalActive}
                setActive={setEditModalActive} defaultName={todos.title} />
            <DeleteModal defaultName={todos.title} handleClick={handleClick} active={deleteModalActive}
                setActive={setDeleteModalActive} />
        </div>
        <span className={styles.checkbox}  >
            <Checkbox checked={checked} onChange={onChange} />
        </span>
        <div className={styles.button} >
            <div>
                <ButtonComponent outlined  title='Изменить' handleClick={() => setEditModalActive(true)} min />
            </div>
            <div className={styles.delete}>
                <ButtonComponent type='danger' outlined title='Удалить' handleClick={() => setDeleteModalActive(true)} min />
            </div>
        </div>
    </div>
})



