import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import axios from "axios";
import { Link } from "react-router-dom";
import { LoadingButton } from '@mui/lab';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import './login.css';
import Button from '@mui/material/Button';

const Login = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("auth");
        if (token) {
            navigate("/dashboard");
        } else {
            navigate("/");
        }
    }, []);


    const [authToken, setAuthToken] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false);
    const [loginCredential, setLoginCredential] = useState({
        email: {
            "value": '',
            "error": ''
        },
        password: {
            "value": "",
            "error": ""
        }
    });
    const [disabled, setDisabled] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setDisabled(true);
        setBtnLoading(true);
        let url = "http://localhost:3030";
        const sendLoginCredential = { ...loginCredential };
        const tempCredential = {
            email: sendLoginCredential.email.value,
            password: sendLoginCredential.password.value
        }
        axios.post(url, tempCredential).then(response => {
            if (response.status === 200) {
                setDisabled(false);
                setOpen(true);
                setBtnLoading(false);
                // console.log(response.data.token);
                setAuthToken(response.data.token);
                localStorage.setItem('auth', response.data.token);
                navigate('/dashboard');
            }
        }).catch(function (error) {
            const errorResponse: any = error.response.data.errors;
            let errorUserDetails: any = { ...loginCredential };
            errorUserDetails.email.error = "";
            errorUserDetails.password.error = "";
            if (Object.keys(errorResponse).length) {
                for (const key in errorResponse) {
                    for (const keyError in errorUserDetails) {
                        if (keyError === key) {
                            errorUserDetails[keyError].error = errorResponse[key].msg;
                            break;
                        }
                    }
                }
            }

            setDisabled(false);
            setOpen(true);
            setBtnLoading(false);
        });
    }

    const handleChangeLoginValue = (data: any, flag: string) => {
        const temploginCredential = { ...loginCredential };
        if (flag === "email") {
            temploginCredential.email.value = data;
        } else {
            temploginCredential.password.value = data;
        }
        setLoginCredential(temploginCredential);
    }

    const doSignup = () =>{
        navigate('/signup');
    }

    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
                alignItems: 'flex-end',
                padding: '0 100px',
                '& .MuiTextField-root': { width: '40ch' },
                background: '#f0f2f5',
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
            <Box sx={{
                width: '580px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection : 'column',
                paddingLeft: '20px'
            }}>
                <h1 className="__color_h1">Daily Notes</h1>
                <h3>Update daily notes from here and make your life up to date. </h3>
            </Box>

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
                    borderRadius: '10px',
                    boxShadow: 3,
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    margin="dense"
                    helperText={loginCredential.email.error}
                    error={loginCredential.email.error ? true : false}
                    onChange={(e) => handleChangeLoginValue(e.target.value, 'email')}
                />

                <TextField
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    variant="outlined"
                    margin="dense"
                    helperText={loginCredential.password.error}
                    error={loginCredential.password.error ? true : false}
                    onChange={(e) => handleChangeLoginValue(e.target.value, 'password')}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: "center",
                        width: "100%",
                        flexDirection : 'column',
                    }}>

                    <LoadingButton
                        onClick={handleClick}
                        loading={btnLoading}
                        loadingPosition="end"
                        variant="contained"
                        size="large"
                        sx={{
                            width: "100%",
                            marginTop: "7px",
                        }}
                    >
                        Login
                    </LoadingButton>

                    <Link to="/signup" className="__linkClass" >Forgotten password?</Link>

                </Box>
                <div className="divider"></div>
                <Divider className="__divider" />
                <Button 
                    variant="contained" 
                    size="large"
                    sx={{
                        width: "100%",
                        marginTop: "20px",
                        background: "#42B72A"
                    }}
                onClick={(e)=>doSignup()}
                >
                    Create New Account
                </Button>
            </Box>
            </Box>
        </Box>
    )
}

export default Login;