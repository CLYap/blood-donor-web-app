import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './side-bar';
import Login from '../../pages/login';
import Home from '../../pages/home';
import CreateDonor from '../../pages/create-donor';
import CreateStaff from '../../pages/create-staff';
import SearchDonor from '../../pages/search-donor';
import DonationHistory from '../../pages/donation-history';
import UpdateDonation from '../../pages/update-donation';
import Appointment from '../../pages/appointment';
import DonorDetails from '../../pages/donor-details';
import { useLogin } from '../../components/context/login-provider';

const PageRoutes = () => {
  return (
    <div>
      <Router>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-account/donor' element={<CreateDonor />} />
          <Route path='/create-account/staff' element={<CreateStaff />} />
          <Route path='/donor' element={<SearchDonor />} />
          <Route path='/donor/donation' element={<DonationHistory />} />
          <Route path='/donor/donation/update' element={<UpdateDonation />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/donor/details' element={<DonorDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return <div>{isLoggedIn ? <PageRoutes /> : <Login />}</div>;
};

export default MainNavigator;
