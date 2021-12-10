import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './side-bar';
import Login from '../../pages/login';
import Home from '../../pages/home';
import CreateAccount from '../../pages/create-account';
import DonationUpdate from '../../pages/donation-update';
import FindDonor from '../../pages/find-donor';
import Appointment from '../../pages/appointment';
import { useLogin } from '../../components/context/login-provider';

const PageRoutes = () => {
  return (
    <div>
      <Router>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/donation' element={<DonationUpdate />} />
          <Route path='/search-donor' element={<FindDonor />} />
          <Route path='/appointment' element={<Appointment />} />
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
