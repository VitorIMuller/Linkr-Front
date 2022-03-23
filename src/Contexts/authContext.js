/* 
  Creating this new Context to hold authentication related data
*/

import React, { createContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export default function AuthProvider( {children} ) {
  const [ user, setUser ] = useLocalStorage('user', null);
  /* const [ token, setToken ] = useLocalStorage('token', null);  */
  // left this preset line to be used when signIn and signUp features will be available
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=> {
    if ( user ) {
      location.pathname === '/' && navigate('/home'); // /home is set here as a placeholder, change it to main page if necessary
    } else {
      navigate('/'); // this navigate is not required as loginPage is currently set as '/', but it may change in the future
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        /* token, setToken */ //props for line 13 states;  
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}