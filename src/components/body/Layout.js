import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Picture1 from '../../images/IMG_1.jpg'
import Picture2 from '../../images/IMG_2.jpg'
import Picture3 from '../../images/IMG_3.jpg'
import Picture4 from '../../images/IMG_4.jpg'
import './Layoyt.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <Item><img className='big-pic' src={Picture1}></img></Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item><img className='small-pic' src={Picture2}></img></Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item><img className='small-pic' src={Picture3}></img></Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item><img className='big-pic' src={Picture4}></img></Item>
        </Grid>
      </Grid>
    </Box>
  );
}