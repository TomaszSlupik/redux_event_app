import React from 'react'
import { Title } from '../../style/mystyle'
import { Paper } from '@mui/material'
import './Deletevent.scss'


export default function Deletevent() {
  return (
    <div className='delete'>
        <div className="delete__box">
            <Title>
                Usuwanie eventów
            </Title>
            <Paper elevation={3} style={{position: 'relative',width: '80%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            </Paper>
        </div>
    </div>
  )
}
