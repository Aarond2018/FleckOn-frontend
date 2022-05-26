import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./NoItem.module.css"

export default function NoItem( {context} ) {
  return (
    <div className={styles.noItem}>
      <h1>No { context } yet!</h1>
      <Link to="/">GO TO HOME</Link>
    </div>
  )
}
