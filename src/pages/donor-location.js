import React, { useState, useEffect } from 'react';
import { db } from '../components/services/firebase-config';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { useUserInfo } from '../components/context/user-info-provider';
import {
  StyledContainer,
  InnerContainer,
  CardContainer,
  StyledTitle,
  Line,
  SearchBar,
  ListItem,
  ListItemBlock,
  StyledText,
} from '../components/global-styles';
import { Link } from 'react-router-dom';
import { NavText } from '../components/navigation/side-bar.styles';
import { getDistance } from 'geolib';
import Moment from 'react-moment';

const DonorLocation = () => {
  const { staffInfo } = useUserInfo();
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'donor'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        let details = { donorId: '', donorData: '' };
        details = { donorId: doc.id, donorData: doc.data() };
        users.push(details);
      });
      setDonors(users);
    });
    return () => unsub();
  }, []);

  const filterByBloodType = (val) => {
    if (searchTerm === '') {
      return val;
    } else if (
      val.donorData.bloodType.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    } else {
      return null;
    }
  };

  const subtractDistance = (donorLatitude, donorLongitude) => {
    const bloodCentreCoords = {};
    bloodCentreCoords.latitude = parseFloat(staffInfo.bloodCentre.latitude);
    bloodCentreCoords.longitude = parseFloat(staffInfo.bloodCentre.longitude);

    const donorCoords = {};
    donorCoords.latitude = parseFloat(donorLatitude);
    donorCoords.longitude = parseFloat(donorLongitude);

    return getDistance(bloodCentreCoords, donorCoords) / 1000; //get km
  };

  return (
    <StyledContainer secondaryBackground>
      <InnerContainer>
        <StyledTitle pageTitle>Donor Location Live Update</StyledTitle>
        <SearchBar
          type='text'
          placeholder='Search Blood Type'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <CardContainer scroll>
          <ListItem header>
            <ListItemBlock>
              <StyledText primaryText>Donor ID</StyledText>
            </ListItemBlock>
            <ListItemBlock>
              <StyledText primaryText>Donor First Name</StyledText>
            </ListItemBlock>
            <ListItemBlock>
              <StyledText primaryText>Donor Last Name</StyledText>
            </ListItemBlock>
            <ListItemBlock>
              <StyledText primaryText>Blood Type</StyledText>
            </ListItemBlock>
            <ListItemBlock>
              <StyledText primaryText>Contact No</StyledText>
            </ListItemBlock>
            <ListItemBlock>
              <StyledText primaryText>Distance</StyledText>
            </ListItemBlock>
            <ListItemBlock>
              <StyledText primaryText>Last Update</StyledText>
            </ListItemBlock>
          </ListItem>
          {donors &&
            donors
              .filter((val) => {
                return filterByBloodType(val);
              })
              .map((donor) => {
                return (
                  <div key={donor.donorId}>
                    <NavText table>
                      <ListItem>
                        <Link to={`/donor/${donor.donorId}`}>
                          <ListItemBlock>
                            <StyledText>{donor.donorId}</StyledText>
                          </ListItemBlock>
                          <ListItemBlock>
                            <StyledText>
                              {donor.donorData && donor.donorData.fName}
                            </StyledText>
                          </ListItemBlock>
                          <ListItemBlock>
                            <StyledText>
                              {donor.donorData && donor.donorData.lName}
                            </StyledText>
                          </ListItemBlock>
                          <ListItemBlock>
                            <StyledText>
                              {donor.donorData && donor.donorData.bloodType}
                            </StyledText>
                          </ListItemBlock>
                          <ListItemBlock>
                            <StyledText>
                              {donor.donorData && donor.donorData.contactNo}
                            </StyledText>
                          </ListItemBlock>
                          <ListItemBlock>
                            <StyledText>
                              {donor.donorData &&
                                subtractDistance(
                                  donor.donorData.latitude,
                                  donor.donorData.longitude
                                )}{' '}
                              km
                            </StyledText>
                          </ListItemBlock>
                          <ListItemBlock>
                            <StyledText>
                              {donor.donorData && (
                                <Moment fromNow>
                                  {donor.donorData &&
                                    donor.donorData.timestamp.toDate()}
                                </Moment>
                              )}
                            </StyledText>
                          </ListItemBlock>
                        </Link>
                      </ListItem>
                    </NavText>
                    <Line />
                  </div>
                );
              })}
        </CardContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

export default DonorLocation;
