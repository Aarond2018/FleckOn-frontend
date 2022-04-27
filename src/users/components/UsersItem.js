import React from 'react'
import { useNavigate } from 'react-router'
import Card from '../../shared/components/cards/Card'

import styles from "./UsersList.module.css"

export default function UsersItem( {user} ) {
  const navigate = useNavigate()

  const handleUserClick = () => {
    console.log(user._id)
    navigate(`/places/${user._id}`);
  }

  return (
    <Card click={handleUserClick}>
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
