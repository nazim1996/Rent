import React,{useState} from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";


const Signup = () =>{
    const [loginCredential, setLoginCredential] = useState({
        'email':'',
        'password':''
    });
    const [disabled, setDisabled] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick =()=> {
        setDisabled(true);
        let url ="http://domcare.idiosys.co.uk/api/web/index.php/secure/login";
        axios.post(url,loginCredential).then(response=>{
            console.log(response);

        }).catch(function (error) {
            setDisabled(false);
            setOpen(true);
            
          });
    }

    const handleChangeLoginValue =(data:any, flag:string)=>{
        const temploginCredential = {...loginCredential};
        if(flag ==="email"){
            temploginCredential.email = data;
        }else{
            temploginCredential.password = data;
        }
        setLoginCredential(temploginCredential);
        
        
    }

    return(
        
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100vh',
                    alignItems: 'flex-end',
                    padding: '0 100px',
                '& .MuiTextField-root': { width: '40ch' },
                background: '#1976d2',
                }}
                >
                        

                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '400px',
                    alignItems: 'flex-end',
                    padding: '0 30px',
                    background: '#fcfdff',
                '& .MuiTextField-root': { width: '40ch' },
                    borderRadius: '5px',
                    boxShadow: 3
                }}
                >
                    <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined"
                    margin="normal"
                    onChange={(e)=>handleChangeLoginValue(e.target.value,'email')}
                 />

                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"
                    margin="normal"
                    onChange={(e)=>handleChangeLoginValue(e.target.value,'email')}
                 />

                <TextField 
                id="outlined-basic"
                    type="password" 
                    label="Password" 
                    variant="outlined" 
                    margin="normal"
                    onChange={(e)=>handleChangeLoginValue(e.target.value,'password')}
                />
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "center",
                    width: "100%"
                }}>
                <Link to="/" >Login</Link>

                <Button
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    variant="contained"
                    disabled={disabled}
                >
                Create
                </Button>
                </Box>
                
            </Box>
            <Snackbar open={open} autoHideDuration={300} >
                <Alert severity='error' sx={{ width: '100%' }}>
                Invalid credential
                </Alert>
            </Snackbar>
            </Box>
    )
}

export default Signup;