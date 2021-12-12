import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../global-styles';

const { primary, secondary, tertiary, darkLight, theme, lightTheme } = Colors;

export const StyledNavBar = styled.div`
  background-color: ${theme};
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MenuBar = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

export const NavMenu = styled.nav`
  background-color: ${primary};
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  ${(props) =>
    props.active === true &&
    `
    left: 0;
    transition: 350ms;
    z-index: 99;
  `}
`;

export const NavText = styled.li`
  display: flex;
  justfy-content: flex-start;
  align-items: center;
  list-style: none;
  height: 60px;

  a {
    text-decoration: none;
    color: ${tertiary};
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 4px;
  }

  a:hover {
    background-color: ${lightTheme};
  }
`;

export const NavMenuItem = styled.ul`
  width: 100%;

  span {
    margin-left: 16px;
  }
`;

export const NavBarToggle = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
