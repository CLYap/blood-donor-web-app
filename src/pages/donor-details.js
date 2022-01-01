import React from 'react';
import SideBar from '../components/navigation/side-bar';
import {
  StyledContainer,
  InnerContainer,
  StyledTitle,
  StyledText,
  CardContainer,
  Line,
  FlexRowContainer,
  FlexColumnContainer,
  StyledButton,
  Colors,
} from '../components/global-styles';
import { FiExternalLink } from 'react-icons/fi';
import { useNavigate, useParams, useLocation } from 'react-router';

const { primary } = Colors;

const DonorDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { donorInfo } = useParams();
  const goToDonationHistory = () => {
    navigate('/donor/' + donorInfo + '/donation-history');
  };
  const goToLiveChat = () => {
    navigate('/live-chat/' + donorInfo);
  };

  return (
    <>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <FlexRowContainer justifyContentSpaceBetween>
            <StyledTitle pageTitle>Donor Details</StyledTitle>
            <div>
              <StyledButton marginRight30 onClick={goToDonationHistory}>
                <FlexRowContainer>
                  <FiExternalLink color={primary} size={25} />
                  <StyledText primaryText buttonText>
                    View Donation History
                  </StyledText>
                </FlexRowContainer>
              </StyledButton>
              <StyledButton onClick={goToLiveChat}>
                <FlexRowContainer>
                  <FiExternalLink color={primary} size={25} />
                  <StyledText primaryText buttonText>
                    Send Blood Request
                  </StyledText>
                </FlexRowContainer>
              </StyledButton>
            </div>
          </FlexRowContainer>
          <Line />
          <FlexRowContainer>
            <FlexColumnContainer>
              <CardContainer>
                <StyledTitle subtitle>Personal Information</StyledTitle>
                <Line />
                <FlexColumnContainer>
                  <StyledText cardLabel>Donor ID</StyledText>
                  <StyledText cardDetail>
                    {state ? state.donorId : '-'}
                  </StyledText>
                </FlexColumnContainer>
                <FlexRowContainer>
                  <FlexColumnContainer>
                    <StyledText cardLabel>Last Name</StyledText>
                    <StyledText cardDetail>
                      {state ? state.lName : '-'}
                    </StyledText>
                  </FlexColumnContainer>
                  <FlexColumnContainer paddingLeft70>
                    <StyledText cardLabel>First Name</StyledText>
                    <StyledText cardDetail>
                      {state ? state.fName : '-'}
                    </StyledText>
                  </FlexColumnContainer>
                </FlexRowContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>Gender</StyledText>
                  <StyledText cardDetail>
                    {state ? (state.gender === 'F' ? 'Female' : 'Male') : '-'}
                  </StyledText>
                </FlexColumnContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>Date of Birth</StyledText>
                  <StyledText cardDetail>{state ? state.dob : '-'}</StyledText>
                </FlexColumnContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>Address</StyledText>
                  <StyledText cardDetail>
                    {state ? state.addressFLine : '-'}
                  </StyledText>
                  <StyledText cardDetail>
                    {state ? state.addressSLine : '-'}
                  </StyledText>
                </FlexColumnContainer>
                <FlexRowContainer>
                  <FlexColumnContainer>
                    <StyledText cardLabel>City</StyledText>
                    <StyledText cardDetail>
                      {state ? state.city : '-'}
                    </StyledText>
                  </FlexColumnContainer>
                  <FlexColumnContainer paddingLeft70>
                    <StyledText cardLabel>State</StyledText>
                    <StyledText cardDetail>
                      {state ? state.state : '-'}
                    </StyledText>
                  </FlexColumnContainer>
                </FlexRowContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>Poscode</StyledText>
                  <StyledText cardDetail>
                    {state ? state.postcode : '-'}
                  </StyledText>
                </FlexColumnContainer>
              </CardContainer>
            </FlexColumnContainer>
            <FlexColumnContainer paddingLeft70>
              <CardContainer>
                <StyledTitle subtitle>Health Information</StyledTitle>
                <Line />
                <FlexColumnContainer>
                  <StyledText cardLabel>Blood Type</StyledText>
                  <StyledText cardDetail>
                    {state ? state.bloodType : '-'}
                  </StyledText>
                </FlexColumnContainer>
                <FlexRowContainer>
                  <FlexColumnContainer>
                    <StyledText cardLabel>Weight</StyledText>
                    <StyledText cardDetail>
                      {state ? state.weight + ' kg' : '-'}
                    </StyledText>
                  </FlexColumnContainer>
                  <FlexColumnContainer paddingLeft70>
                    <StyledText cardLabel>Height</StyledText>
                    <StyledText cardDetail>
                      {state ? state.height + ' cm' : '-'}
                    </StyledText>
                  </FlexColumnContainer>
                </FlexRowContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>Medical History</StyledText>
                  <StyledText cardDetail>
                    {state.medicalHistory ? state.medicalHistory : '-'}
                  </StyledText>
                </FlexColumnContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>Allergy History</StyledText>
                  <StyledText cardDetail>
                    {state.allergy ? state.allergy : '-'}
                  </StyledText>
                </FlexColumnContainer>
              </CardContainer>
            </FlexColumnContainer>
          </FlexRowContainer>
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

export default DonorDetails;
