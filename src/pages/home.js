import React from 'react';
import SideBar from '../components/navigation/side-bar';
import { StyledButton, StyledText } from '../components/global-styles';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '../components/context/user-info-provider';

const Home = (logout) => {
  const navigate = useNavigate();
  let { staffInfo } = useUserInfo();
  return (
    <div>
      <SideBar />
      <h1>
        Welcome {staffInfo.staffId}, {staffInfo.fName} {staffInfo.lName}!
      </h1>
      <StyledButton onClick={() => navigate('/donor-location')}>
        <StyledText primaryText>Go to Donor Location</StyledText>
      </StyledButton>
    </div>
  );
};

export default Home;
