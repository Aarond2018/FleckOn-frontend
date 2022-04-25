import React from 'react'
import Card from '../../shared/components/cards/Card'

import styles from "./UsersList.module.css"

export default function UsersItem( {user} ) {

  return (
    <Card>
      <div className={styles.user}>
        <div className={styles.user__image}><img src={user.image} alt={user.name} /></div>
        <div className={styles.user__info}>
          <h4>{user.name}</h4>
          <p>1 place</p>
        </div>
      </div>
    </Card>
  )
}
