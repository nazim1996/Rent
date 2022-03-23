import React, { useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import UserRouter from './router/UserRouter';
import AuthRouter from './router/AuthRouter';

const App =()=> {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("auth");
    if(token){
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  },[]);
  
  return (
        <>
          <UserRouter></UserRouter>
          <AuthRouter></AuthRouter>
        </>
    );
}

export default App;
