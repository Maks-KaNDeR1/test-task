import React from 'react'
import { ButtonComponent } from '../Button/Button'
import styles from "./Buttons.module.scss"

export const Buttons = () => {
  return (
    <div className={styles.buttonsBlock} >
        <div>
            <ButtonComponent title='button'  />
        </div>
        <div>
            <ButtonComponent title='button' type='success'/>
        </div>
        <div>
            <ButtonComponent title='button' type='warning' />
        </div>
        <div>
            <ButtonComponent title='button' type='danger' />
        </div>
        <div>
            <ButtonComponent title='button' outlined  type='primary' />
        </div>
        <div>
            <ButtonComponent title='button' outlined type='success' />
        </div>
        <div>
            <ButtonComponent title='button' outlined type='warning' />
        </div>
        <div>
            <ButtonComponent title='button' outlined type='danger' />
        </div>
        <div>
            <ButtonComponent title='button' text type='primary' />
        </div>
        <div>
            <ButtonComponent title='button' text type='success' />
        </div>
        <div>
            <ButtonComponent title='button' text type='warning' />
        </div>
        <div>
            <ButtonComponent title='button' text type='danger' />
        </div>
        <div>
            <ButtonComponent title='button' loading />
        </div>
        <div>
            <ButtonComponent title='button' large />
        </div>
        <div>
            <ButtonComponent title='button' min />
        </div>
        <div>
            <ButtonComponent title='button' disabled />
        </div>
        <div>
            <ButtonComponent title='button' block />
        </div>
    </div>
  )
}
