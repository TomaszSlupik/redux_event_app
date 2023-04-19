import React, { useState } from 'react'
import { Title } from '../../style/mystyle';
import { Paper } from '@mui/material';
import './Editevent.scss'
import { useSelector } from 'react-redux';
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export default function Editevent() {

    const event = useSelector(state => state.event_name)

    const style = {
        position: 'relative',
        minWidth: '100%',
        bgcolor: 'background.paper',
      };

      const [openWidnow, setOpenWindow] = useState(false)


      const handleOpen = (el) => {
        console.log(el)
        setOpenWindow(true)
      }

      const handleClose = () => {
        setOpenWindow(false)
      }

  return (
    <div className='editevent'>
        <div className="editevent__box">
            <Title>Edycja eventów</Title>
            <Paper elevation={3} style={{position: 'relative',width: '80%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
            {
                event.map((el, index) => {
                    return (
                        <div key={index}>
                   <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem 
                    onClick={() => handleOpen(el)}
                    button style={{width: '100%'}}>
                                    <ListItemText primary={el} />
                    </ListItem>
                   </List>

                   <Dialog
                    open={openWidnow}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{`Edycja:  ${el}`}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Anuluj</Button>
                    <Button onClick={handleClose}>Akcteptuję</Button>
                    </DialogActions>
                </Dialog>

                        </div>
                    )
                })
            }
           
            </Paper>
        </div>
    </div>
  )
}
