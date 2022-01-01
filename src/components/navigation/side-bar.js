import React, { useState } from 'react';
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
import { MdBloodtype } from 'react-icons/md';
import { StyledButton, StyledText, Colors } from '../global-styles';
import SideBarSubmenu from './side-bar-submenu';
import { useUserInfo } from '../context/user-info-provider';

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
    title: 'Donor Details',
    path: '/donor',
    icon: <MdBloodtype />,
  },
  {
    title: 'Locate Donor',
    path: '/donor-location',
    icon: <IoLocationSharp />,
  },
  {
    title: 'Appointment',
    path: '',
    icon: <BsCalendarDayFill />,
    subnav: [
      {
        title: 'Create Appointment Slot',
        path: '/create-appointment',
      },
      {
        title: 'View Appointment',
        path: '/appointment-schedule',
      },
    ],
  },
];

const SideBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sidebar);
  };
  let { logoutUser } = useUserInfo();

  return (
    <>
      <IconContext.Provider value={{ color: tertiary, size: 25 }}>
        <StyledNavBar justifyBetween>
          <MenuBar to='#'>
            <FaBars onClick={showSideBar} />
          </MenuBar>
          <MenuBar to='#'>
            <StyledButton onClick={logoutUser}>
              <StyledText primaryText>Log out</StyledText>
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
