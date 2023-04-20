import React, { useState } from 'react'
import { Noevent, Title } from '../../style/mystyle';
import { Paper } from '@mui/material';
import './Editevent.scss'
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { setEditEvent } from '../../store/actions/eventAction';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export default function Editevent() {

    

    const style = {
        position: 'relative',
        minWidth: '100%',
        bgcolor: 'background.paper',
      };

      const [openWidnow, setOpenWindow] = useState(false)
      const [clickEvent, setClickEvent] = useState("")
      const [inputEventName, setInputEventName] = useState("")


      const handleOpen = (el) => {
        setClickEvent(el)
        setOpenWindow(true)
      }

      const handleClose = () => {
        setOpenWindow(false)
      }

      const event = useSelector(state => state.event_name)
      const dispatch = useDispatch()

      const handleAccept = () => {
        setOpenWindow(false)
        dispatch(setEditEvent(clickEvent, inputEventName))
      }

  return (
    <div className='editevent'>
        <div className="editevent__box">
            <Title>Edycja eventów</Title>
            <Paper elevation={3} style={{position: 'relative',width: '80%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {
              event === "" ? 
              (
                <Noevent>Brak wydarzenia</Noevent>
              )
              :
              (
                event.map((el, index) => {
                  return (
                      <div key={index}>
                 <List sx={style} component="nav" aria-label="mailbox folders">
                  <ListItem 
                  onClick={() => handleOpen(el.event_name)}
                  button style={{width: '100%'}}>
                                  <ListItemText primary={el.event_name} />
                  </ListItem>
                 </List>

                 <Dialog
                  open={openWidnow}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
              >
                  <DialogTitle>{`Edycja:  ${clickEvent}`}</DialogTitle>
                  <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                  <TextField 
                  value={inputEventName}
                  onChange={(e) => setInputEventName(e.target.value)}
                  style={{width: '80%', marginTop: '0.8em'}}
                  id="outlined-basic" label="Nowy event" variant="outlined" />
                  </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  <Button 
                  variant='outlined'
                  onClick={handleClose}>Anuluj</Button>
                  <Button 
                  variant='contained'
                  onClick={handleAccept}>Akcteptuję</Button>
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
