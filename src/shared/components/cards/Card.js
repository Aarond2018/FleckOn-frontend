import React from 'react'

import styles from "./Card.module.css"

export default function Card({ children }) {
  return (
    <div className={styles.user_card}>
      {children}
    </div>
  )
}
