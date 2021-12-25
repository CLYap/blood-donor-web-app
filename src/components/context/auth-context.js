import React, { createContext, useState } from 'react';
import { authenticationService } from '../services/user-service';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );
  let [isLoggedIn, setLoggedIn] = useState(() =>
    localStorage.getItem('authTokens') ? true : false
  );

  let [role, setRole] = useState(() =>
    localStorage.getItem('authTokens')
      ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access_token)
          .roles
      : null
  );

  let loginUser = (values) => {
    authenticationService(values).then((data) => {
      const tokens = data.data;
      setAuthTokens(tokens);
      localStorage.setItem('authTokens', JSON.stringify(tokens));
      setLoggedIn(true);
      setRole(jwt_decode(tokens.access_token).roles);
    });
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setLoggedIn(false);
    localStorage.removeItem('authTokens');
    navigate('/login');
  };

  let contextData = {
    loginUser: loginUser,
    authTokens: authTokens,
    isLoggedIn: isLoggedIn,
    logoutUser: logoutUser,
    role: role,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
