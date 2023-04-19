import React from 'react'
import { useSelector } from 'react-redux'
import './Events.scss'
import { Title } from '../../style/mystyle'
import { Paper } from '@mui/material'

export default function Events() {

    const event = useSelector(state => state.event_name)
    const calendar = useSelector(state => state.event_calendar)

  return (
    <div className='events'>
      <div className="events__box">
      <Title>Twoje Eventy</Title>
      
      <Paper elevation={3} style={{position: 'relative',width: '80%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            Event:
            {event === ""
            ?
            <div>Brak wydarzenia</div>
            :
            (
              <div>{event}</div>
            )
            } 
            
            data: 
            {calendar === ""
            ? 
            <div>Brak wydarzenia</div>
            :
            (
              <div>{calendar}</div>
            )  
          }
      </Paper>
      </div>
    </div>
  )
}
