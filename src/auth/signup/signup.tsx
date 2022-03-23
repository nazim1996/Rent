import React,{useState} from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from "react-router-dom";

const Signup = () =>{
    const navigate = useNavigate();
    const userDetails: any = {
        name:{
            "value": '',
            "error" : ''

        },
        email: {
            "value" : '',
            "error" : ""
        },
        password: {
            "value" : "",
            "error" : ""
        }
    };
    const [createCredential, setCreateCredential] = useState(userDetails);
    const [disabled, setDisabled] = useState(false);
    const [open, setOpen] = useState(false);
    const [successLogin, setSuccessLogin] = useState(false);

    const handleClick =()=> {
        setDisabled(true);
        let url ="http://localhost:5050/users";
        const sendCredential = {...createCredential};
        const tempCredential = {
            name: sendCredential.name.value,
            email: sendCredential.email.value,
            password: sendCredential.password.value
        };
        axios.post(url,tempCredential).then(response=>{
            if(response.status === 200){
                setSuccessLogin(true);
                setOpen(true);
                setTimeout(function(){
                    navigate('/');
                },3000);
            }else{
                console.log('hiiii');
            }

        }).catch(function (error) {
            const errorResponse: any = error.response.data.errors;
            let errorUserDetails: any = {...createCredential};
            errorUserDetails.name.error ="";
            errorUserDetails.email.error ="";
            errorUserDetails.password.error ="";
            if(Object.keys(errorResponse).length){
                for(const key in errorResponse){
                    for(const keyError in errorUserDetails){
                        if(keyError === key){
                            errorUserDetails[keyError].error = errorResponse[key].msg;
                            break;
                        }
                    }
                }
            }
            setCreateCredential(errorUserDetails);
            setDisabled(false);
            setOpen(true);
            
        });
    }

    const handleChangeCreateValue =(data:any, flag:string)=>{
        const temploginCredential = {...createCredential};
        if(flag ==="name"){
            temploginCredential.name.value = data;
        }else if(flag ==="email"){
            temploginCredential.email.value = data;
        }else{
            temploginCredential.password.value = data;
        }
        setCreateCredential(temploginCredential);
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
                    id="component-error"
                    error={createCredential.name.error ? true : false}
                    label="Name" 
                    variant="outlined"
                    margin="normal"
                    helperText={createCredential.name.error}
                    onChange={(e)=>handleChangeCreateValue(e.target.value,'name')}
                 />

                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"
                    margin="normal"
                    error={createCredential.email.error ? true : false}
                    helperText={createCredential.email.error}
                    onChange={(e)=>handleChangeCreateValue(e.target.value,'email')}
                 />

                <TextField 
                id="outlined-basic"
                    type="password" 
                    label="Password" 
                    variant="outlined" 
                    margin="normal"
                    error={createCredential.password.error ? true : false}
                    helperText={createCredential.password.error}
                    onChange={(e)=>handleChangeCreateValue(e.target.value,'password')}
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
                        <Alert severity={successLogin ? 'success' : 'error'} sx={{ width: '100%' }}>
                       {successLogin ? "User was created successfully!" : "Error user creation"}
                        </Alert>
                    </Snackbar>
            </Box>
    )
}

export default Signup;