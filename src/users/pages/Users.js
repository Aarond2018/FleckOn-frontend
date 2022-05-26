import React from 'react'
import UsersList from '../components/UsersList'

import { useAxios } from "../../hooks/useAxios";
import Loader from '../../shared/components/loader/Loader';

export default function Users() {
  const { data, status, error } = useAxios()

  if(status === "loading") <Loader />

  if(status === "error") <h2>{error.message}</h2>

  if(data && data.data.length === 0) <h3>No users yet</h3>

  return (
    <main>
      {data && <UsersList users={data.data}/>}
    </main>
  )
}
