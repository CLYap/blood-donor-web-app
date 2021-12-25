import React from 'react';
import SideBar from '../components/navigation/side-bar';
import { StyledButton, StyledText } from '../components/global-styles';
import { staffProfileService } from '../components/services/user-service';

const Home = (logout) => {
  return (
    <div>
      <SideBar />
      <h1>Home</h1>
      <StyledButton onClick={() => staffProfileService()}>
        <StyledText primaryText>getAllStaff</StyledText>
      </StyledButton>
    </div>
  );
};

export default Home;
