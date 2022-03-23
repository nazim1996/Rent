import react from 'react';
import Login from '../auth/login/Login';
import Signup from '../auth/signup/signup';
import {
    Routes,
    Route,
  } from 'react-router-dom';

const AuthRouter = () =>{
    return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default AuthRouter;