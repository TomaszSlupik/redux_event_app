import React, { useState } from 'react'
import { Noevent, Title } from '../../style/mystyle'
import { Paper } from '@mui/material'
import './Deletevent.scss'
import { useSelector } from 'react-redux'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Deletevent() {

  const style = {
    position: 'relative',
    minWidth: '100%',
    bgcolor: 'background.paper',
  };

  const [deleteEvent, setDeleteEvent] = useState()
  const [openWindow, setOpenWindow] = useState(false)

  const event = useSelector(state => state.event_name)

  const handleOpenEvent = (el) => {
      setDeleteEvent(el)
      setOpenWindow(true)
  }

  const handlerClose = () => {
    setOpenWindow(false)
  }

  const handlerAcceptDelete = () => {
    setOpenWindow(false)
  }

  return (
    <div className='delete'>
        <div className="delete__box">
            <Title>
                Usuwanie eventów
            </Title>
            <Paper elevation={3} style={{position: 'relative',width: '80%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {
              event === "" ?
              (
                <Noevent>Brak wydarzenia</Noevent>
              )
              :
              (
                event.map ((el, index) => {
                  return (
                    <div key={index}>
                          <List sx={style} component="nav" aria-label="mailbox folders">
                          <ListItem 
                          onClick={() => handleOpenEvent(el.event_name)}
                          button style={{width: '100%'}}>
                              <ListItemText primary={el.event_name} />
                          </ListItem>
                        </List>

                        <Dialog
                        open={openWindow}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handlerClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{`Czy chcesz usunąć wydarzenie?`}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                          <div>{deleteEvent}</div>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button 
                        variant='outlined'
                        onClick={handlerClose}>Anuluj</Button>
                        <Button 
                        variant='contained'
                        onClick={handlerAcceptDelete}>Akcteptuję</Button>
                        </DialogActions>
                    </Dialog>
                    </div>
                  )
                })
              )
            }
            </Paper>
        </div>
    </div>
  )
}
