import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const {id} = useParams()
  const params = useParams()
  return (
    <div>Details {id} - {params.id}</div>
  )
}

export default Details