import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {Email} from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


import Header from './common/Header'



const ProfileScreen =()=> {
    return(
        <>
        <Header></Header>
        

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                padding: '0 100px',
            '& .MuiTextField-root': { width: '40ch' },
            background: '#fff',
            }}
            >

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '400px',
                    alignItems: 'left',
                    padding: '30px',
                    background: '#fcfdff',
                '& .MuiTextField-root': { width: '40ch' },
                    borderRadius: '5px',
                    boxShadow: 3
                }}               
                >
                    <Stack direction="row" spacing={2}>
                    <Avatar
                        alt="Profile Image"
                        src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
                        sx={{ width: 90, height: 90 }}
                    />
                    </Stack>
                    <Typography variant="h4" component="div" gutterBottom><PermIdentityIcon></PermIdentityIcon> MD. Nazim</Typography>
                    <Typography variant="h5" component="div" gutterBottom><Email></Email> nazimmd1996@gmail.com</Typography>
                </Box>
            </Box>
        </>
    );
}

export default ProfileScreen;