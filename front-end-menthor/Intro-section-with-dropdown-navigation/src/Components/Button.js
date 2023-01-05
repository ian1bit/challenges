import React from 'react'
import styles from './Button.module.css'

const Button = ({ text, href, border, submenu, backgroudBlack }) => {
  return (
    <button
      className={`
        ${styles.btn} 
        ${submenu && 'submenu'} 
        ${border && styles.border}
        ${backgroudBlack && styles.backgroudBlack}
      `}
      href={href}
    >
      {text}
    </button>
  )
}

export default Button