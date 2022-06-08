import React, { useState } from 'react'
import styles from "./DropDown.module.scss"


let items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]


export const DropDown = () => {

  let [drop, setDrop] = useState(false)

  let handleClick = () => {
    if (!drop) setDrop(true)
    else setDrop(false)
  }

  return (
    <div className={styles.container} >
      <div className={styles.select}>
        <div className={styles.selectBackdrop} ></div>
        <button type="button" className={styles.selectTrigger} onClick={handleClick} >
          DropDown
        </button>
        <div className={styles.selectDropdown}>
          {
            drop && items.map(i => <div key={i}>
              <div className={styles.selectItems}>
                <div onClick={handleClick} className={styles.selectItem}>{i}</div>
              </div>
            </div>)
          }
        </div>
        DropDown
      </div>
    </div>
  )
}

export default DropDown