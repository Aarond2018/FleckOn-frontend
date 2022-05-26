import React from 'react'
import { useParams } from 'react-router'
import { useAxiosGetPlaces } from '../../hooks/useAxios'
import Card from '../../shared/components/cards/Card'
import Loader from '../../shared/components/loader/Loader'
import NoItem from '../../shared/components/NoItem/NoItem'
import ErrorPage from '../../shared/pages/ErrorPage'

import styles from './Places.module.css'

export default function Places() {
  const { id } = useParams()
  const { data, error, status } = useAxiosGetPlaces(id)
  if(status === "loading") <Loader />
  if(status === "error") <ErrorPage />
  if(data && data.data.places.length === 0) {
    return <NoItem context="Places" />
  }
 
  return (
    <main className={`${styles.main} row`}>
      {data && data.data.places.map(place => (
        <Card key={place._id}>
        <div className={styles.place}>
          <div className={styles.place__image}>
            <img src={place.image} alt="" />
          </div>
          <div className={styles.place__detail}>
            <h3>{place.title}</h3> 
            <h6>{place.address}</h6>
            <p>{place.description}</p>
          </div>
        </div>
      </Card>
      ))}
    </main>
  )
}
