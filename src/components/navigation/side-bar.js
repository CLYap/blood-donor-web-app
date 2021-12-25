import React, { useState, useContext } from 'react';
import {
  StyledNavBar,
  MenuBar,
  NavMenu,
  NavBarToggle,
  NavMenuItem,
} from './side-bar.styles';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill, BsCalendarDayFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { StyledButton, StyledText, Colors } from '../global-styles';
import SideBarSubmenu from './side-bar-submenu';
import AuthContext from '../context/auth-context';

const { tertiary } = Colors;

const SideBarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiFillHome />,
  },
  {
    title: 'Create Account',
    path: '',
    icon: <BsFillPersonFill />,
    subnav: [
      {
        title: 'Staff Account',
        path: '/create-account/staff',
      },
      {
        title: 'Donor Account',
        path: '/create-account/donor',
      },
    ],
  },
  {
    title: 'Search Donor',
    path: '/donor',
    icon: <IoLocationSharp />,
  },
  {
    title: 'Appointment',
    path: '/appointment',
    icon: <BsCalendarDayFill />,
  },
];

const SideBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sidebar);
  };
  let { logoutUser, role } = useContext(AuthContext);

  return (
    <>
      <IconContext.Provider value={{ color: tertiary, size: 25 }}>
        <StyledNavBar justifyBetween>
          <MenuBar to='#'>
            <FaBars onClick={showSideBar} />
          </MenuBar>
          <MenuBar to='#'>
            <StyledButton onClick={logoutUser}>
              <StyledText primaryText>Log out {role}</StyledText>
            </StyledButton>
          </MenuBar>
        </StyledNavBar>
        <NavMenu active={sidebar}>
          <NavMenuItem>
            <NavBarToggle>
              <MenuBar to='#'>
                <AiOutlineClose onClick={showSideBar} />
              </MenuBar>
            </NavBarToggle>
            {SideBarData.map((item, index) => {
              return (
                <SideBarSubmenu
                  showSideBar={showSideBar}
                  item={item}
                  key={index}
                />
              );
            })}
          </NavMenuItem>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
