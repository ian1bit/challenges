import React from "react"
import styles from "./Submenu.module.css"

const Submenu = ({ children }) => {
  return (
    <ul className={styles.submenu}>
      {children}
    </ul>
  )
};

export default Submenu
