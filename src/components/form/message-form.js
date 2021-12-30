import React, { useEffect } from 'react';
import { StyledChatForm } from './form.styles';
import { useUserInfo } from '../context/user-info-provider';
import {
  TextBar,
  StyledButton,
  StyledText,
  FlexRowContainer,
} from '../global-styles';

const MessageForm = ({ handleSubmit, text, setText }) => {
  return (
    <StyledChatForm onSubmit={handleSubmit}>
      <div>
        <FlexRowContainer>
          <TextBar
            type='text'
            placeholder='Enter Message'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <StyledButton>
            <StyledText primaryText>Send</StyledText>
          </StyledButton>
        </FlexRowContainer>
      </div>
    </StyledChatForm>
  );
};

export default MessageForm;
