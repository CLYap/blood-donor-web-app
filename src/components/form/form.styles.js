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
  min-width: 580px;
  min-height: 50px;
  background-color: ${primary};
  padding: 15px 10px 0px 10px;
  border-radius: 10px;
  font-size: 25px;
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
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: ${darkLight};
  padding: 8px 14px;
  font-size: 15px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${theme};
  padding: 0px 10px;
`;
