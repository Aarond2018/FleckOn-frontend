import React from 'react'

import styles from "./Card.module.css"

export default function Card({ click, children }) {

  return (
    <div className={styles.user_card} onClick={click}>
      {children}
    </div>
  )
}
