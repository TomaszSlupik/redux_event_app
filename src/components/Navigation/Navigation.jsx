import React, { useState } from 'react'
import './Navigation.scss'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';

export default function Navigation() {

    const [value, setValue] = useState(0)

    const style = {
        link: {textDecoration: 'none'}
    }

  return (
    <div className='navigation'>
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <div className="navigation__box">
        <Link to="/"
        style={style.link}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <div className='navigation__box-text'>Home</div>
        </Link>
        </div>

        <div className="navigation__box second">
        <Link to="/events"
        style={style.link}
        >
            <BottomNavigationAction label="Home" icon={<EventIcon />} />
            <div className='navigation__box-text'>Events</div>
        </Link>
        </div>
      </BottomNavigation>
    </Box>
    </div>
  )
}
