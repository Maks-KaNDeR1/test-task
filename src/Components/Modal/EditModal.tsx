import { Input } from 'antd';
import React, { ChangeEvent, useState, KeyboardEvent } from 'react'
import styles from "./EditModal.module.scss"


type EditModalPropsType = {
    active: boolean,
    setActive: (status: boolean) => void,
    changeTitle: (newTitle: string) => void,
    setChecked: (value: boolean) => void,
    id: number,
    defaultName: string,
    checked: boolean
}


export const EditModal: React.FC<EditModalPropsType> = (
    {
        changeTitle, active, setActive, id, defaultName, checked, setChecked
    }) => {

    const [name, setName] = useState<string>(defaultName)

    const handleClick = () => {
        if (!checked) setChecked(true)
        else setChecked(false)
    }

    const closeModal = () => setActive(false)
    const myEditModalHandler = () => {
        changeTitle(name)
        closeModal()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value

        if (value.length > 80)  return alert('max width 80 simbols')
        setName(value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            changeTitle(name)
            closeModal()
        }
    }

    return (
        <div className={active ? `${styles.modal} ${styles.modalActive}` : `${styles.modal}`} onClick={closeModal}>
            <div className={active
                ? `${styles.modalContent} ${styles.modalContentActive}`
                : `${styles.modalContent}`}
                onClick={(e) => e.stopPropagation()}
            >
                <Input className={styles.input} placeholder="Basic usage"
                    autoFocus
                    defaultValue={name}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />

                <div>id - {id}</div>
                <div className={styles.checked} onClick={handleClick} > Сделано:  {checked ? 'yes' : 'no'} </div>

                <div className={styles.buttonGroup}>
                    <button  className={styles.saveButton} onClick={myEditModalHandler}>Сохранить</button>
                    <button className={styles.closeButton} onClick={closeModal}>Отмена</button>
                </div>

            </div>
        </div>
    )
}

