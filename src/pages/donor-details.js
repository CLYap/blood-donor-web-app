import React from 'react';
import {
  StyledContainer,
  InnerContainer,
  StyledTitle,
  StyledText,
  CardContainer,
  Line,
  FlexRowContainer,
  FlexColumnContainer,
} from '../components/global-styles';

const profileData = {
  donorId: 'D0001',
  fName: 'Yap',
  lName: 'Chee',
  gender: 'F',
  dob: '12-03-1999',
  addressFLine: 'dkajsdljaslkdjas',
  addressSLine: 'ladjalksdjalkdj',
  city: 'Kuala Lumpur',
  state: 'WP Kuala Lumpur',
  zipCode: '56000',
  bloodType: 'O+',
  weight: '50',
  height: '160',
  medicalHistory: ['diabetes', 'asthma'],
  allergies: ['peanut', 'paraceytamo'],
  contactNo: '019122338383',
  email: 'cheeling1203@gmail.com',
};

const DonorDetails = () => {
  return (
    <StyledContainer secondaryBackground>
      <InnerContainer>
        <StyledTitle pageTitle>Donor Details</StyledTitle>
        <Line />
        <FlexRowContainer>
          <FlexColumnContainer>
            <CardContainer>
              <StyledTitle subtitle>Personal Information</StyledTitle>
              <Line />
              <FlexColumnContainer>
                <StyledText cardLabel>Donor ID</StyledText>
                <StyledText cardDetail>{profileData.donorId}</StyledText>
              </FlexColumnContainer>
              <FlexRowContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>Last Name</StyledText>
                  <StyledText cardDetail>{profileData.lName}</StyledText>
                </FlexColumnContainer>
                <FlexColumnContainer paddingLeft70>
                  <StyledText cardLabel>First Name</StyledText>
                  <StyledText cardDetail>{profileData.fName}</StyledText>
                </FlexColumnContainer>
              </FlexRowContainer>
              <FlexColumnContainer>
                <StyledText cardLabel>Gender</StyledText>
                <StyledText cardDetail>
                  {profileData.gender === 'F' ? 'Female' : 'Male'}
                </StyledText>
              </FlexColumnContainer>
              <FlexColumnContainer>
                <StyledText cardLabel>Date of Birth</StyledText>
                <StyledText cardDetail>{profileData.dob}</StyledText>
              </FlexColumnContainer>
              <FlexColumnContainer>
                <StyledText cardLabel>Address</StyledText>
                <StyledText cardDetail>{profileData.addressFLine}</StyledText>
                <StyledText cardDetail>{profileData.addressSLine}</StyledText>
              </FlexColumnContainer>
              <FlexRowContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>City</StyledText>
                  <StyledText cardDetail>{profileData.city}</StyledText>
                </FlexColumnContainer>
                <FlexColumnContainer paddingLeft70>
                  <StyledText cardLabel>State</StyledText>
                  <StyledText cardDetail>{profileData.state}</StyledText>
                </FlexColumnContainer>
              </FlexRowContainer>
              <FlexColumnContainer>
                <StyledText cardLabel>Poscode</StyledText>
                <StyledText cardDetail>{profileData.zipCode}</StyledText>
              </FlexColumnContainer>
            </CardContainer>
          </FlexColumnContainer>
          <FlexColumnContainer paddingLeft70>
            <CardContainer>
              <StyledTitle subtitle>Health Information</StyledTitle>
              <Line />
              <FlexColumnContainer>
                <StyledText cardLabel>Blood Type</StyledText>
                <StyledText cardDetail>{profileData.bloodType}</StyledText>
              </FlexColumnContainer>
              <FlexRowContainer>
                <FlexColumnContainer>
                  <StyledText cardLabel>Weight</StyledText>
                  <StyledText cardDetail>{profileData.weight}kg</StyledText>
                </FlexColumnContainer>
                <FlexColumnContainer paddingLeft70>
                  <StyledText cardLabel>Height</StyledText>
                  <StyledText cardDetail>{profileData.height}cm</StyledText>
                </FlexColumnContainer>
              </FlexRowContainer>
              <FlexColumnContainer>
                <StyledText cardLabel>Medical History</StyledText>
                {profileData.medicalHistory.length > 0 ? (
                  profileData.medicalHistory.map((history, index, arr) =>
                    arr.length === index + 1 ? (
                      <StyledText cardDetail key={index}>
                        - {history}
                      </StyledText>
                    ) : (
                      <StyledText cardDetail key={index}>
                        - {history}
                      </StyledText>
                    )
                  )
                ) : (
                  <StyledText cardDetail>No record!</StyledText>
                )}
              </FlexColumnContainer>
              <FlexColumnContainer>
                <StyledText cardLabel>Allergy History</StyledText>
                {profileData.allergies.length > 0 ? (
                  profileData.allergies.map((allergy, index, arr) =>
                    arr.length === index + 1 ? (
                      <StyledText cardDetail key={index}>
                        - {allergy}
                      </StyledText>
                    ) : (
                      <StyledText cardDetail key={index}>
                        - {allergy}
                      </StyledText>
                    )
                  )
                ) : (
                  <StyledText cardDetail>No record!</StyledText>
                )}
              </FlexColumnContainer>
            </CardContainer>
          </FlexColumnContainer>
        </FlexRowContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

export default DonorDetails;
