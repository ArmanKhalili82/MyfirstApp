import React, {useState} from 'react'
import { AppBar, Toolbar, Button, Typography, Tabs, Tab, Menu } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material';
import createTheme from '@mui/material';
import './Header.css'
import useTheme from '@mui/material';
import P1 from '../../images/IMG_1.jpg'
import DropDownMenu from './DropDownMenu'
import Drawer from './Drawer'
import SearchButton from './SearchButton'



const useStyles = makeStyles(theme =>({
  Toolbar: {
    backgroundColor:'white',
  },
  Account: {
    backgroundColor:'black',
  },
  tabContainer: {
    marginLeft:'auto',
    justifyContent:'space-around',
    // "&:hover": {
    //   backgroundColor: "red"
    // }
  },
  
  
  
}))

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value)
  }
  return (
    <div>
        <AppBar>
            <Toolbar className={classes.Toolbar}>
              <Drawer />
                <AccountCircleIcon className={classes.Account} />
                <img className='logo' src={P1} />
                <SearchButton />
                <Tabs value={value} onChange={handleChange} className={classes.tabContainer} sx={{display:{ xs:"none", sm:"none", md:"block"}}}>
                  <Tab className={classes.tab} label="Home" />
                  <Tab className={classes.tab} label="Blog" />
                  <Tab className={classes.tab} label="Services" />
                  <Tab className={classes.tab} label="About Us" />
                  <Tab className={classes.tab} label="Contact Us" />
                  <DropDownMenu className="Drop" />
                </Tabs>
                <Button className={classes.Button} variant='contained' sx={{backgroundColor:'orange',borderRadius:'59px', display:{ xs:"none", sm:"none", md:"block"}}}>Login</Button>
                {/* <Button variant='contained' sx={{backgroundColor:'orange'}}>Register</Button> */}
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header