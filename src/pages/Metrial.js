
import React, { Fragment } from 'react'
import Button  from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FcAlarmClock,FcOnlineSupport } from "react-icons/fc";
import { BsFillBox2HeartFill } from "react-icons/bs";

function Metrial() {

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Fragment>
    <div>Metrial</div>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>


    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>


    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <ul>
        <li className='abcd'> <FcAlarmClock/>List</li>
        <li> <FcAlarmClock/>List</li>
        <li> <FcAlarmClock/>List</li>
        <li> <FcAlarmClock/>List</li>
        <li> <FcAlarmClock/>List</li>
    </ul>
   <h1>skldfjksdh fjsd <FcAlarmClock/> <FcOnlineSupport/> <BsFillBox2HeartFill/></h1>

    </Fragment>
  )
}

export default Metrial