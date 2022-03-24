import React, { createContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocalStorage from '../Hooks/useLocalStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      location.pathname === '/' && navigate('/timeline');
    } else {
      navigate('/');
    }
  }, []); //eslint-disable-line

  function logOut() {
    setUser(null);
    navigate('/');
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;