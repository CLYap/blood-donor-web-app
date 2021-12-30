import React, { createContext, useState, useContext } from 'react';
import {
  authenticationService,
  staffProfileService,
} from '../services/user-service';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
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

  let [staffInfo, setStaffInfo] = useState(() =>
    localStorage.getItem('userProfile')
      ? JSON.parse(localStorage.getItem('userProfile'))
      : null
  );

  let loginUser = (values) => {
    authenticationService(values).then((data) => {
      const tokens = data.data;
      setAuthTokens(tokens);
      localStorage.setItem('authTokens', JSON.stringify(tokens));

      //once login get profile
      getStaffProfile(values.email);

      setLoggedIn(true);
      setRole(jwt_decode(tokens.access_token).roles);
    });
  };

  const getStaffProfile = (email) => {
    staffProfileService(email).then((data) => {
      const profile = data.data;
      setStaffInfo(profile);
      localStorage.setItem('userProfile', JSON.stringify(profile));
    });
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setLoggedIn(false);
    localStorage.removeItem('authTokens');
    localStorage.removeItem('userProfile');
    navigate('/login');
  };

  let contextData = {
    loginUser: loginUser,
    authTokens: authTokens,
    isLoggedIn: isLoggedIn,
    logoutUser: logoutUser,
    role: role,
    staffInfo: staffInfo,
  };

  return (
    <UserInfoContext.Provider value={contextData}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);

export default UserInfoContext;
