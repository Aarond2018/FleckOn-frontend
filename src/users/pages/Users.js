import React from 'react'
import UsersList from '../components/UsersList'

import { useAxios } from "../../hooks/useAxios";
import Loader from '../../shared/components/loader/Loader';

export default function Users() {
  const { data, status, error } = useAxios()

  if(status === "loading") {
    return <Loader />
  }

  if(status === "error") {
    return <h2>{error.message}</h2>
  }

  return (
    <main>
      {data.data.length === 0 ? "no users yet" : <UsersList users={data.data}/>}
    </main>
  )
}
