import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const App=()=>{

    const [p, setP]=useState(0);
    const [t, setT]=useState(0);
    const [r, setR]=useState (0);
    const [SI, setSI]=useState(0);
    const calculateInterest=()=>{
      setSI((p*t*r)/100);
    }
    return(
        <div className='App'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Simple Interest Calculaor
          </Typography>
        </Toolbar>
      </AppBar><br></br>
      <center>
        <TextField onChange={(event)=>setP(event.target.value)} id="principal" label="Enter Principal" variant="standard" /> <br></br>
        <TextField onChange={(event)=>setT(event.target.value)} id="time" label="Enter Time" variant="standard" /><br></br>
        <TextField onChange={(event)=>setR(event.target.value)} id="rate" label="Enter Rate" variant="standard" /><br></br><br></br>
        <Button onClick={()=>calculateInterest()} variant="contained">Calculate</Button><br></br>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Simple Interest is: {SI}
        </Typography>
        </center>

       
      
      </div>
    );
}
export default App;