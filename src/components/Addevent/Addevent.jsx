import React, { useEffect, useState } from 'react'
import './Addevent.scss'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import { setEvents, setCalendar } from '../../store/actions/eventAction';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../style/mystyle';



export default function Addevent() {

  const moment = require('moment');
  const today = moment();
  

  const [fieldEvent, setFieldEvent] = useState("")
  const [fieldCalendar, setFieldCalendar] = useState()


  const events = useSelector(state => state.event_name)
  const calendar = useSelector(state => state.event_calendar)
  const dispatch = useDispatch()

  const handlerAddEvent = () => {
    const newEvent = {
      event_name: fieldEvent
    }
    dispatch(setEvents([...events, newEvent]))
    dispatch(setCalendar([...calendar, fieldCalendar.toString()]))
    console.log(`${fieldCalendar}`)
  }


  return (
    <div className='addevent'>
        <div className="addevent__box">
            <Title>
              Dodaj event
            </Title>
            <Paper elevation={3} style={{position: 'relative',width: '80%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField 
                style={{width: '80%', marginTop: '0.8em'}}
                value={fieldEvent}
                onChange={(e) => setFieldEvent(e.target.value)}
                id="outlined-basic" label="Wpisz event" variant="outlined" />
                <div className='addevent__box-calendar'>
                    <LocalizationProvider 
                    dateAdapter={AdapterDayjs}>
                      <Stack spacing={3}>
                    <DateTimePicker
                      label="Data utworzenia przepisu"
                      value={fieldCalendar}
                      onChange={(value) => setFieldCalendar(value)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    </Stack>
                    </LocalizationProvider>
                </div>
                   

                <Button
                onClick={handlerAddEvent}
                style={{position: 'absolute', bottom: '4%', right: '4%'}}
                variant='contained'
                >Dodaj</Button>
            </Paper>
        </div>
    </div>
  )
}
