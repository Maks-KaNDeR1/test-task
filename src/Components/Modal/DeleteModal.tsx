
import React from 'react'
import styles from "./EditModal.module.scss"


type DeleteModalPropsType = {
    active: boolean,
    setActive: (status: boolean) => void,
    handleClick: () => void,
    defaultName?: string,
}


export const DeleteModal: React.FC<DeleteModalPropsType> = (
    { active, setActive, handleClick, defaultName }) => {


    const closeModal = () => setActive(false)
    const myDeleteModalHandler = () => {
        handleClick()
        closeModal()
    }

    return (
        <div className={active ? `${styles.modal} ${styles.modalActive}` : `${styles.modal}`} onClick={closeModal}>
            <div className={active
                ? `${styles.modalContent} ${styles.modalContentActive}`
                : `${styles.modalContent}`}
                onClick={(e) => e.stopPropagation()}
            >

                <h2> Точно удалить? </h2>

                <div className={styles.title}>{defaultName}</div>
                <div className={styles.buttonGroup}>
                    <button className={styles.saveButton} onClick={myDeleteModalHandler}>Да</button>
                    <button className={styles.closeButton} onClick={closeModal}>Отмена</button>
                </div>

            </div>
        </div>
    )
}

