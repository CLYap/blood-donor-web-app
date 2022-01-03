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
    font-size: 20px;
    color: ${theme};
    padding-top: 25px;
  `}

  ${(props) =>
    props.cardDetail &&
    `
    font-size: 18px;
    color: ${tertiary};
  `}

  ${(props) =>
    props.buttonText &&
    `
    padding-left: 10px;
    align-self: center;
  `}

  ${(props) =>
    props.fontSize15 &&
    `
    font-size: 15px;
  `}

  ${(props) =>
    props.breakWord &&
    `
    word-break: break-word;
  `}

  ${(props) =>
    props.paddingTop15 &&
    `
    padding-top: 15px;
  `}

  ${(props) =>
    props.paddingBottom15 &&
    `
    padding-bottom: 15px;
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

  ${(props) =>
    props.scroll &&
    `
    overflow-y: scroll;
    height: 500px;
  `}

  ${(props) =>
    props.chatContainer &&
    `
    min-width: 8rem;
  `}

  ${(props) =>
    props.chatsList &&
    `
    min-width: 0rem;
    width: 20rem;
    height: 200px;
    overflow-x: hidden;
  `}
  
  ${(props) =>
    props.homePage &&
    `
    width: 70rem;
    overflow-x: hidden;
    height: 750px;
  `}
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;

  ${(props) =>
    props.marginTop100 &&
    `
    margin-top: 100px;
  `}
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

export const ReadOnlyField = styled.div`
  background-color: ${secondary};
  padding: 25px 10px 5px 10px;
  border-radius: 10px;
  color: ${tertiary};
  border-width: 3px;
  border-style: solid;
  border-color: ${secondary};
  min-width: 250px;
  opacity: 0.9;
`;

export const SearchBar = styled.input`
  background-color: ${primary};
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  color: ${tertiary};
  border-width: 3px;
  border-style: solid;
  border-color: ${secondary};
`;

export const ListItem = styled.div`
  min-width: 1000px;
  display: flex;

  ${(props) =>
    props.header &&
    `
    background-color: ${theme};
  `}
`;

export const ListItemBlock = styled.div`
  min-width: 200px;
  padding: 20px;
  flex-direction: column;

  ${(props) =>
    props.isChat &&
    `
    min-width: 0px;
  `}
`;

export const Messages = styled.div`
  height: 650px;
  overflow-y: auto;
  background-color: ${primary};
  padding: 20px;
  width: 800px;
  margin: 30px 0px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const MessageBlock = styled.div`
  background-color: ${lightTheme};
  border-radius: 15px;
  width: 30%;
  margin: 15px;
  padding: 12px;

  ${(props) =>
    props.ownBlock === true &&
    `
    background-color: ${secondary};
    display: flex;
    align-self: flex-end;
  `}
`;

export const TextBar = styled.input`
  background-color: ${primary};
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  color: ${tertiary};
  border-width: 3px;
  border-style: solid;
  border-color: ${secondary};
  width: 700px;
  margin: 25px 0px;
  margin-right: 30px;
`;

export const TextLink = styled.p`
  padding: 5px;
  text-align: left;
  color: ${theme};
  text-decoration-line: underline;
`;
