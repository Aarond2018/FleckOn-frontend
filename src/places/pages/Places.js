import React from 'react'
import { useParams } from 'react-router'

export default function Places() {
  const { id } = useParams()

  return (
    <div>
      <p>All places for {id}</p>
    </div>
  )
}
