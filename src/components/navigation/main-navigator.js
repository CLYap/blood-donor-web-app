import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './side-bar';
import Login from '../../pages/login';
import Home from '../../pages/home';
import CreateAccount from '../../pages/create-account';
import CreateDonor from '../../pages/create-donor';
import CreateStaff from '../../pages/create-staff';
import UpdateDonation from '../../pages/update-donation';
import FindDonor from '../../pages/find-donor';
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
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/create-donor' element={<CreateDonor />} />
          <Route path='/create-staff' element={<CreateStaff />} />
          <Route path='/donation' element={<UpdateDonation />} />
          <Route path='/search-donor' element={<FindDonor />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/donor-details' element={<DonorDetails />} />
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
