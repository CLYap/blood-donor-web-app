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

  ${(props) =>
    props.paddingTop250 &&
    `
    padding-top: 250px;
  `}

  ${(props) =>
    props.textAlignEnd &&
    `
    text-align: end;
  `}

  ${(props) =>
    props.secondaryBackground &&
    `
    background-color: ${secondary};
  `}
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
  padding: 20px 60px;
  align-self: center;
  margin: auto;
`;

export const StyledTitle = styled.p`
  font-weight: bold;
  color: ${tertiary};
  margin: 16px 0px;

  ${(props) =>
    props.pageTitle &&
    `
    color: ${theme};
    font-size: 30px;
    text-align: start;
  `}

  ${(props) =>
    props.subtitle &&
    `
    font-size: 20px;
    text-align: start;
  `}

  ${(props) =>
    props.paddingTop25 &&
    `
    padding-top: 25px;
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
    font-size: 12px;
    color: ${theme};
    text-align: left;
    padding-top: 5px;
  `}

  ${(props) =>
    props.cardLabel &&
    `
    font-size: 27px;
    color: ${theme};
    padding-top: 25px;
  `}

  ${(props) =>
    props.cardDetail &&
    `
    font-size: 20px;
    color: ${tertiary};
  `}
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${theme};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-width: 0px;
  margin: 25px 0px;

  ${(props) =>
    props.marginRight30 &&
    `
    margin-right: 30px;
  `}
`;

export const SecondaryButton = styled(StyledButton)`
  background-color: ${secondary};
`;

export const CardContainer = styled.div`
  min-width: 35rem;
  min-height: 30rem;
  background-color: ${primary};
  padding: 30px;
  margin: 20px 0px;
  border-radius: 30px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.justifyContentSpaceBetween &&
    `
    justify-content: space-between;
  `}

  ${(props) =>
    props.justifyContentRight &&
    `
    justify-content: right;
  `}
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${(props) =>
    props.paddingLeft70 &&
    `
    padding-left: 70px;
  `}

  ${(props) =>
    props.paddingLeft35 &&
    `
    padding-left: 35px;
  `}
`;

export const ColumnThreeContainer = styled.div`
  column-count: 3;
`;
