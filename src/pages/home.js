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

const Home = (logout) => {
  let { staffInfo } = useUserInfo();
  const [chatrooms, setChatRooms] = useState([]);

  useEffect(() => {
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
  }, [staffInfo.staffId]);

  console.log(chatrooms);

  return (
    <div>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <StyledTitle pageTitle>
            Welcome {staffInfo && staffInfo.staffId},{' '}
            {staffInfo && staffInfo.fName} {staffInfo && staffInfo.lName}!
          </StyledTitle>
          <Line />
          <FlexRowContainer>
            <CardContainer></CardContainer>
            <ChatRoom chatrooms={chatrooms}></ChatRoom>
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
