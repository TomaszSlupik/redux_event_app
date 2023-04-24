import React, { useState } from 'react'
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Addevent() {

  const [fieldEvent, setFieldEvent] = useState("")
  const [fieldCalendar, setFieldCalendar] = useState("")


  const events = useSelector(state => state.event_name)
  const calendar = useSelector(state => state.event_calendar)
  const dispatch = useDispatch()

  const handlerAddEvent = () => {
    setOpenSnackbar(true)
    console.log(fieldCalendar)

    if (fieldEvent !== "" || fieldCalendar !== "") {
      const newEvent = {
        event_name: fieldEvent
      }
      dispatch(setEvents([...events, newEvent]))
      dispatch(setCalendar([...calendar, fieldCalendar.toString()]))
    }
  }

  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handlerClose = () => {
    setOpenSnackbar(false)
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

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handlerClose}>
              {
                fieldEvent === "" || fieldCalendar === "" ?
                (
                  <Alert onClose={handlerClose} 
                  severity="error" 
                  sx={{ width: '100%' }}>
                    Wypełnij poprawnie formularz
                  </Alert>
                )
                :
                (
                  <Alert onClose={handlerClose} 
                  severity="success" 
                  sx={{ width: '100%' }}>
                    Twój event został dodany.
                  </Alert>
                )
              }

            
            </Snackbar>
        </div>
    </div>
  )
}
