import React from 'react'
import { Link } from "react-router-dom"

import styles from "./Error.module.css"

export default function ErrorPage() {
  return (
    <div className={styles.error}>
      <h1>Oops!</h1>
      <p>An Error Occurred</p>
      <Link to="/">GO TO HOME</Link>
    </div>
  )
}
