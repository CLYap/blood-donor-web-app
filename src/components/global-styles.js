import styled, { createGlobalStyle } from 'styled-components';
import logo from '../assets/icons/logo.png';

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7E8',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  theme: '#cd0000',
  lightTheme: '#ffe1e1',
};

const { primary, secondary, tertiary, darkLight, theme, lightTheme } = Colors;

export const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;    
    font-family: 'Lato', sans-serif;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: end;
`;

export const LeftContainer = styled.div`
  flex: 1;

  ${(props) =>
    props.img &&
    `
    background-image: url(${logo});
    height: 90vh;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
  `}
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
`;

export const InnerContainer = styled.div`
  padding-left: 70px;
`;

export const StyledTitle = styled.p`
  font-weight: bold;
  color: ${tertiary};
  margin: 16px 0px;

  ${(props) =>
    props.pageTitle &&
    `
    color: ${theme};
    font-size: 40px;
  `}

  ${(props) =>
    props.subtitle &&
    `
    font-size: 30px;
    text-align: start;
  `}
`;

export const StyledText = styled.p`
  margin: 0;
  font-size: 20px;

  ${(props) =>
    props.primaryText &&
    `
    color: ${primary};
  `}

  ${(props) =>
    props.errorText &&
    `
    font-size: 15px;
    color: ${theme};
    text-align: left;
    padding-top: 5px;
  `}
`;

export const StyledButton = styled.button`
  padding: 15px 30px;
  background-color: ${theme};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-width: 0px;
  margin: 50px 0px;
`;
