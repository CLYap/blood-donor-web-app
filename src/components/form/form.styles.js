import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { Colors } from '../global-styles';

const { primary, secondary, tertiary, darkLight, theme, lightTheme } = Colors;

export const InputFieldContainer = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const StyledTextInput = styled(Field)`
  background-color: ${primary};
  padding: 25px 10px 5px 10px;
  border-radius: 10px;
  font-size: 20px;
  color: ${tertiary};
  border-width: 3px;
  border-style: solid;
  border-color: ${secondary};

  ${(props) =>
    props.errors === 1 &&
    `
    border-color: ${theme};
    border-width: 1px;
  `}

  ${(props) =>
    props.select === 1 &&
    `
    padding: 26px 10px 5px 10px;
  `}
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: ${darkLight};
  padding: 8px 12px;
  font-size: 13px;
`;

export const CheckboxLabel = styled.label`
  padding-bottom: 10px;
  postive: relative;
  color: ${darkLight};
  font-size: 13px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${theme};
  padding: 0px 10px;
`;

export const StyledChatForm = styled.form`
  width: 80%;
  height: 30px;
  display: flex;
  align-items: centre;
`;
