import React from 'react'

import image from '../../../asset/loader.gif'
import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.loader}>
      <img src={image} alt="loader"></img>
    </div>
  )
}
