import React from 'react'
import { useSelector } from 'react-redux'

export default function Events() {

    const event = useSelector(state => state.event_name)

  return (
    <div>
        Twoje Eventy:
        {event}
    </div>
  )
}
