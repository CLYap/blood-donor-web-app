import React, { useState, useEffect } from 'react';
import MessageForm from '../components/form/message-form';
import { useUserInfo } from '../components/context/user-info-provider';
import { useParams } from 'react-router-dom';
import { db } from '../components/services/firebase-config';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledContainer,
  InnerContainer,
  StyledText,
  Messages,
  MessageBlock,
  StyledTitle,
  Line,
} from '../components/global-styles';
import SideBar from '../components/navigation/side-bar';
import Moment from 'react-moment';

const LiveChat = () => {
  const { donorInfo } = useParams();
  const donorId = String(donorInfo).split('_')[0];
  const donorName = String(donorInfo).split('_')[1];

  const { staffInfo } = useUserInfo();
  const staffId = staffInfo.staffId;
  const staffName = staffInfo.fName + ' ' + staffInfo.lName;

  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const docId = staffId + donorId;
    const msgRef = collection(db, 'messages', docId, 'chat');
    const q = query(msgRef, orderBy('createdAt', 'asc'));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
    });
    return () => unsub();
  }, [staffId, donorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docId = staffId + donorId;
    //create chat document reference with staff & donor information

    db.collection('messages')
      .doc(docId + '_users')
      .set({
        creatorId: staffId,
        creatorName: staffName,
        receiverId: donorId,
        receiverName: donorName,
        lastUpdate: Timestamp.fromDate(new Date()),
      });

    //create chat collection and store message
    await addDoc(collection(db, 'messages', docId, 'chat'), {
      _id: uuidv4(),
      createdAt: Timestamp.fromDate(new Date()),
      text,
      user: {
        _id: staffId,
        name: staffName,
      },
    });
  };

  return (
    <>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <StyledTitle pageTitle>Live Chat</StyledTitle>
          <Line />
          <StyledText paddingTop15>
            {donorId} {donorName.replace('-', ' ')}
          </StyledText>
          <Messages>
            {messages.length
              ? messages.map((msg, i) => (
                  <Message key={i} msg={msg} user1={staffId} />
                ))
              : null}
          </Messages>
          <MessageForm
            handleSubmit={handleSubmit}
            text={text}
            setText={setText}
          />
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

const Message = ({ msg, user1 }) => {
  return (
    <MessageBlock ownBlock={msg.user._id === user1 ? true : false}>
      <StyledText breakWord>
        {msg.text}
        <br />
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </StyledText>
    </MessageBlock>
  );
};

export default LiveChat;
