import React from 'react'
import UsersItem from './UsersItem'

import styles from "./UsersList.module.css"

export default function UsersList({ users }) {

  return (
    <div className={`row ${styles.users}`}>
      {users.data.users.map(user => <UsersItem user={user} key={user._id}/>)}
    </div>
  )
}
