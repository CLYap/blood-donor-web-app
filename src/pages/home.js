import React, { useState, useEffect } from 'react';
import SideBar from '../components/navigation/side-bar';
import {
  StyledContainer,
  InnerContainer,
  StyledTitle,
  Line,
  StyledText,
  FlexRowContainer,
  CardContainer,
  FlexColumnContainer,
  ListItem,
  ListItemBlock,
} from '../components/global-styles';
import { NavText } from '../components/navigation/side-bar.styles';
import { Link } from 'react-router-dom';
import { useUserInfo } from '../components/context/user-info-provider';
import { db } from '../components/services/firebase-config';
import { BarChart, DoughnutChart, TableChart } from '../components/charts';
import {
  getDonationsBloodUnitService,
  getDonationsBloodTypeService,
  getDonationsOfStaffService,
} from '../components/services/donation-service';
import moment from 'moment';

const Home = (logout) => {
  let { staffInfo, role } = useUserInfo();
  const [barChartData, setBarChartData] = useState([]);
  const [doughnutChartData, setDoughnutChartData] = useState([]);
  const [tableChartData, setTableChartData] = useState([]);
  const bloodCentreId = staffInfo && staffInfo.bloodCentre.bloodCentreId;
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const currentMonthName = moment().month(today.getMonth()).format('MMMM');

  const [chatrooms, setChatRooms] = useState([]);

  useEffect(() => {
    //bar chart
    getDonationsBloodUnitService(bloodCentreId, currentYear, currentMonth).then(
      (data) => {
        const bloodUnitData = data.data;
        setBarChartData(bloodUnitData);
      }
    );

    //donut chart
    getDonationsBloodTypeService(bloodCentreId, currentYear, currentMonth).then(
      (data) => {
        const bloodTypeData = data.data;
        setDoughnutChartData(bloodTypeData);
      }
    );

    //table chart
    getDonationsOfStaffService(bloodCentreId, currentYear, currentMonth).then(
      (data) => {
        const staffWorkingData = data.data;
        setTableChartData(staffWorkingData);
      }
    );

    //chat -- only display to admin
    if (role && role.includes('ROLE_ADMIN')) {
      db.collection('messages')
        .get()
        .then((querySnapshot) => {
          let users = [];
          querySnapshot.forEach((doc) => {
            if (doc.id.substring(0, 5) === staffInfo.staffId) {
              let info = { receiverId: '', receiverName: '' };
              info = {
                receiverId: doc.data().receiverId,
                receiverName: doc.data().receiverName,
              };
              users.push(info);
            }
          });
          setChatRooms(users);
        });
    }
  }, [role, staffInfo.staffId, bloodCentreId, currentYear, currentMonth]);

  return (
    <div>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <StyledTitle subtitle>
            Welcome {staffInfo && staffInfo.staffId},{' '}
            {staffInfo && staffInfo.fName} {staffInfo && staffInfo.lName}!
          </StyledTitle>
          <Line />
          <FlexRowContainer>
            <CardContainer homePage scroll>
              <StyledTitle paddingBottom15>
                Blood Type Chart in {currentMonthName} of {currentYear}
              </StyledTitle>
              <DoughnutChart info={doughnutChartData} />
              <Line marginTop100 />
              <StyledTitle paddingTop15 paddingBottom15>
                Blood Unit Collected in {currentMonthName} of {currentYear}
              </StyledTitle>
              <BarChart info={barChartData} />
              <Line marginTop100 />
              <StyledTitle paddingTop15 paddingBottom15>
                Employee Work Record in {currentMonthName} of {currentYear}
              </StyledTitle>
              <TableChart info={tableChartData} />
            </CardContainer>
            {role && role.includes('ROLE_ADMIN') && (
              <ChatRoom chatrooms={chatrooms}></ChatRoom>
            )}
          </FlexRowContainer>
        </InnerContainer>
      </StyledContainer>
    </div>
  );
};

const ChatRoom = ({ chatrooms }) => {
  return (
    <FlexColumnContainer paddingLeft70>
      <StyledText cardLabel>Recent Chats</StyledText>
      <CardContainer scroll chatsList>
        {chatrooms &&
          chatrooms.map((chat, index) => {
            return (
              <div key={index}>
                <NavText isList>
                  <ListItem>
                    <Link
                      to={`/live-chat/${chat.receiverId}_${chat.receiverName}`}
                    >
                      <ListItemBlock isChat>
                        <StyledText>{chat && chat.receiverId}</StyledText>
                      </ListItemBlock>
                      <ListItemBlock>
                        <StyledText>
                          {chat.receiverName &&
                            chat.receiverName.replace('-', ' ')}
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
    </FlexColumnContainer>
  );
};

export default Home;
