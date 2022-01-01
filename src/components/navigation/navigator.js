import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../../pages/login';
import Home from '../../pages/home';
import Appointment from '../../pages/appointment';
import CreateDonor from '../../pages/create-donor';
import CreateStaff from '../../pages/create-staff';
import SearchDonor from '../../pages/search-donor';
import DonationHistory from '../../pages/donation-history';
import UpdateDonation from '../../pages/update-donation';
import DonorDetails from '../../pages/donor-details';
import LiveChat from '../../pages/live-chat';
import DonorLocation from '../../pages/donor-location';
import { useUserInfo } from '../../components/context/user-info-provider';

const Navigator = () => {
  let { isLoggedIn, role } = useUserInfo();
  return (
    <Routes>
      {!isLoggedIn ? (
        <Route path='/login' element={<Login />} />
      ) : (
        <>
          <Route path='/home' element={<Home />} />
          {role && role.includes('ROLE_ADMIN') && (
            <>
              <Route path='/create-account/donor' element={<CreateDonor />} />
              <Route path='/create-account/staff' element={<CreateStaff />} />
              <Route path='/donor-location' element={<DonorLocation />} />
              <Route path='/live-chat/:donorInfo' element={<LiveChat />} />
            </>
          )}
          <Route path='/donor' element={<SearchDonor />} />
          <Route path='/donor/:donorInfo' element={<DonorDetails />} />
          <Route
            path='/donor/:donorInfo/donation-history'
            element={<DonationHistory />}
          />
          {role && role.includes('ROLE_NURSE') && (
            <Route
              path='/donor/:donorInfo/donation-history/update'
              element={<UpdateDonation />}
            />
          )}
          <Route path='/appointment' element={<Appointment />} />
        </>
      )}
      <Route
        path='*'
        element={<Navigate to={isLoggedIn ? '/home' : '/login'} />}
      />
    </Routes>
  );
};

export default Navigator;
