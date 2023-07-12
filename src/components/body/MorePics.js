import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Picture5 from '../../images/IMG_5.jpg'
import Picture6 from '../../images/IMG_6.jpg'

const icon = (
  <Paper>
    <img className='more-pic' src={Picture5}></img>
    <img className='more-pic' src={Picture5}></img>
    <img style={{width: "14em"}} className='more-pic' src={Picture6}></img>
    <img style={{width: "14em"}} className='more-pic' src={Picture6}></img>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
        
    </Box>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="More Pictures"
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
      </Box>
    </Box>
  );
}