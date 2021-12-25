import React, { useContext } from 'react';
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
import AuthContext from '../../components/context/auth-context';

const Navigator = () => {
  let { isLoggedIn, role } = useContext(AuthContext);
  return (
    <Routes>
      {!isLoggedIn ? (
        <Route path='/login' element={<Login />} />
      ) : (
        <>
          <Route path='/home' element={<Home />} />
          {role === 'ROLE_ADMIN' ? (
            <>
              <Route path='/create-account/donor' element={<CreateDonor />} />
              <Route path='/create-account/staff' element={<CreateStaff />} />
            </>
          ) : null}
          <Route path='/donor' element={<SearchDonor />} />
          <Route path='/donor/donation' element={<DonationHistory />} />
          <Route path='/donor/donation/update' element={<UpdateDonation />} />
          <Route path='/donor/details' element={<DonorDetails />} />
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
