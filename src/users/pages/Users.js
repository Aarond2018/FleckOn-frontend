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
    return <h2>Err: {error.message}</h2>
  }

  return (
    <main>
      <UsersList users={data}/>
    </main>
  )
}
