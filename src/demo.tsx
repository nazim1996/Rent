import React from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import './index.css'


const Demo = () =>{
    return(
        
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '30ch' },
          width: 300,
        height: 300,
        }}
      >
         
            <TextField id="outlined-basic" label="Email" variant="outlined" margin="normal" />
            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" margin="normal" />
            <Button variant="contained" size="large" endIcon={<SendIcon/>} className="__cm_button_class" >Login</Button>
           
            </Box>
    )
}

export default Demo;