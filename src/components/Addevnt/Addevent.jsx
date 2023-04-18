import React, { useState } from 'react'
import './Addevent.scss'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import { setEvents } from '../../store/actions/eventAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Addevent() {

  const [fieldEvent, setFieldEvent] = useState("")

  const events = useSelector(state => state.event_name)
  const dispatch = useDispatch()

  const handlerAddEvent = () => {
    dispatch(setEvents([...events, fieldEvent]))
  }

  return (
    <div className='addevent'>
        <div className="addevent__box">
            <h1>Dodaj event</h1>
            <Paper elevation={3} style={{position: 'relative',width: '80%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField 
                style={{width: '80%', marginTop: '0.8em'}}
                value={fieldEvent}
                onChange={(e) => setFieldEvent(e.target.value)}
                id="outlined-basic" label="Outlined" variant="outlined" />
                <div className='addevent__box-calendar'>
                    <LocalizationProvider 
                    dateAdapter={AdapterDayjs}>
                      <Stack spacing={3}>
                    <DateTimePicker
                      label="Data utworzenia przepisu"
                    //   value={dateAdd}
                    //   onChange={handleChange}
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
        {events}
    </div>
  )
}
