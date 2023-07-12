import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Button } from '@mui/material';
import Pic1 from '../../images/IMG_1.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 55 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <Item><img src={Pic1}></img>
            <Typography variant='h5'>What is Wood Work?</Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper. Id aliquet lectus proin nibh. Dignissim diam quis enim lobortis scelerisque. Adipiscing commodo elit at imperdiet dui. Nunc sed augue lacus viverra vitae congue eu consequat. Magna eget est lorem ipsum dolor sit. Facilisis volutpat est velit egestas. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Convallis aenean et tortor at risus viverra adipiscing at. Eros in cursus turpis massa tincidunt dui ut. Odio facilisis mauris sit amet.

                Pellentesque massa placerat duis ultricies lacus sed turpis. Fames ac turpis egestas sed tempus urna. Viverra justo nec ultrices dui sapien. Morbi tristique senectus et netus et malesuada fames. Aliquet nec ullamcorper sit amet. Commodo nulla facilisi nullam vehicula ipsum a arcu. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. At tempor commodo ullamcorper a lacus vestibulum sed. Interdum varius sit amet mattis. Magnis dis parturient montes nascetur. Aliquam eleifend mi in nulla.

                Auctor eu augue ut lectus. Cum sociis natoque penatibus et magnis dis parturient montes. Malesuada bibendum arcu vitae elementum. Id eu nisl nunc mi ipsum. Turpis nunc eget lorem dolor. Rhoncus mattis rhoncus urna neque viverra justo. Euismod nisi porta lorem mollis aliquam ut. Non arcu risus quis varius quam quisque. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Habitant morbi tristique senectus et netus. Maecenas pharetra convallis posuere morbi leo urna molestie at.

                Quam quisque id diam vel. Egestas dui id ornare arcu odio ut sem. Morbi tincidunt augue interdum velit euismod in. Consectetur adipiscing elit pellentesque habitant morbi. Dui accumsan sit amet nulla facilisi morbi tempus. Volutpat lacus laoreet non curabitur gravida. Lectus magna fringilla urna porttitor. Quisque egestas diam in arcu cursus euismod quis. Augue lacus viverra vitae congue eu. Non quam lacus suspendisse faucibus interdum posuere lorem. Non blandit massa enim nec dui nunc mattis. Purus viverra accumsan in nisl nisi scelerisque eu ultrices.

                Euismod nisi porta lorem mollis. Consectetur purus ut faucibus pulvinar elementum integer. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Proin nibh nisl condimentum id venenatis a. Bibendum est ultricies integer quis auctor. Euismod lacinia at quis risus sed vulputate odio. Non odio euismod lacinia at quis risus sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Pharetra diam sit amet nisl. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Vestibulum sed arcu non odio euismod. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Id aliquet lectus proin nibh nisl. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Cursus turpis massa tincidunt dui. Et tortor consequat id porta.

                In massa tempor nec feugiat nisl. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Pretium nibh ipsum consequat nisl. Feugiat in ante metus dictum at. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Adipiscing elit ut aliquam purus sit. Id eu nisl nunc mi ipsum faucibus vitae. Vestibulum lectus mauris ultrices eros in cursus turpis massa. A diam maecenas sed enim ut sem viverra aliquet eget. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.

                Arcu non odio euismod lacinia at quis risus sed vulputate. Augue neque gravida in fermentum et sollicitudin ac orci. Viverra tellus in hac habitasse platea dictumst vestibulum. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Sit amet consectetur adipiscing elit pellentesque. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Consequat semper viverra nam libero justo laoreet. Vulputate sapien nec sagittis aliquam malesuada bibendum. Malesuada pellentesque elit eget gravida. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Consectetur purus ut faucibus pulvinar. Convallis a cras semper auctor neque vitae. Faucibus ornare suspendisse sed nisi lacus sed. Cursus eget nunc scelerisque viverra mauris. Urna molestie at elementum eu facilisis sed odio. Cursus in hac habitasse platea. Ornare quam viverra orci sagittis eu volutpat. Tristique senectus et netus et malesuada fames. Lacus sed turpis tincidunt id aliquet.

                Risus ultricies tristique nulla aliquet enim tortor. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Consectetur adipiscing elit pellentesque habitant morbi. Arcu risus quis varius quam quisque id. Diam sollicitudin tempor id eu. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Diam quis enim lobortis scelerisque. Enim neque volutpat ac tincidunt vitae semper. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. A lacus vestibulum sed arcu non odio euismod lacinia at. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Neque viverra justo nec ultrices dui sapien. Sapien eget mi proin sed libero enim. Interdum posuere lorem ipsum dolor sit. Egestas purus viverra accumsan in nisl nisi scelerisque. Vitae congue eu consequat ac felis donec et. Tellus molestie nunc non blandit. Morbi tristique senectus et netus et malesuada fames ac turpis. Vitae tempus quam pellentesque nec nam.

                Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Urna condimentum mattis pellentesque id nibh tortor id. Sollicitudin nibh sit amet commodo nulla facilisi. Ac turpis egestas integer eget aliquet nibh praesent tristique. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. In eu mi bibendum neque egestas congue quisque egestas diam. Viverra suspendisse potenti nullam ac tortor vitae purus. Risus at ultrices mi tempus imperdiet nulla. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Urna et pharetra pharetra massa massa ultricies mi. Tristique senectus et netus et malesuada.

                Nibh ipsum consequat nisl vel. Mauris augue neque gravida in fermentum et. Sapien pellentesque habitant morbi tristique senectus. Cras sed felis eget velit aliquet. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Sit amet justo donec enim diam. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ut enim blandit volutpat maecenas volutpat.</p>
                <Button sx={{borderRadius: 50, backgroundColor:'orange'}} variant='contained'>Read More</Button>
          </Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item sx={{backgroundColor: "orange"}}>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
            <div style={{border: "1px solid black"}} className='sidebar'><h3>Lorem ipsum dolor sit</h3></div>
          </Item>
        </Grid>
        {/* <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}