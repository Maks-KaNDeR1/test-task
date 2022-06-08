import React, { MouseEventHandler } from 'react'
import 'antd/dist/antd.css';
import styles from "./Button.module.scss"

type PropsType = {
  title?: string
  icon?: string 
  handleClick?: MouseEventHandler<HTMLButtonElement>
  loading?: boolean
  disabled?: boolean
  type?: 'danger' | 'success' | 'warning' | 'primary' 
  min?: boolean
  large?: boolean
  block?: boolean
  outlined?: boolean 
  text?: boolean  

}

export const ButtonComponent: React.FC<PropsType> = (
  {
    title, icon, handleClick ,loading, disabled,
    type = 'primary', outlined, min, large, block, text
  }
) => {

  let colorTypeButton = type === 'danger' ? 'rgb(255 82 82)'
    : type === 'success' ? 'rgb(76 175 80)'
      : type === 'warning' ? '#ffc300'
        : 'rgb(50 158 244)'

  let sizeButton = {
    width: block ? '100%' : '',
    fontSize: min  ? 'x-small' : large ? 'x-large' : ''
  }
  let backgrondButton = {
    background: outlined ? '#fff' : text ? '#fff'
      : colorTypeButton
  }
  let colorButton = {
    color: text ? colorTypeButton : outlined ? colorTypeButton : '#fff',
  }
  let borderButton = {
    border: outlined ? '2px solid ' + colorTypeButton : 'none'
  }


  return (
    <span>
      <button className={styles.button} onClick={handleClick}
        disabled={disabled}
        style={{
          fontSize: sizeButton.fontSize, width: sizeButton.width,
          color: colorButton.color,
          background: backgrondButton.background,
          border: borderButton.border
        }}
      > {loading && (
        <i
          className="fa fa-refresh fa-spin"
          style={{ marginRight: "5px" }}
        />
      )} {icon} {title}  </button>

    </span>
  )
}
