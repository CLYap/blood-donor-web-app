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
import { Colors } from '../global-styles';
import SideBarSubmenu from './side-bar-submenu';

const { tertiary } = Colors;

const SideBarData = [
  {
    title: 'Home',
    path: '/',
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

  return (
    <>
      <IconContext.Provider value={{ color: tertiary, size: 25 }}>
        <StyledNavBar>
          <MenuBar to='#'>
            <FaBars onClick={showSideBar} />
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
