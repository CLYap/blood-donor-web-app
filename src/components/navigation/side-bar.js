import React, { useState } from 'react';
import {
  StyledNavBar,
  MenuBar,
  NavMenu,
  NavText,
  NavBarToggle,
  NavMenuItem,
} from './side-bar.styles';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill, BsCalendarDayFill } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { Colors } from '../global-styles';

const { primary, secondary, tertiary, darkLight, theme, lightTheme } = Colors;

const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
  },
  {
    title: 'Create Account',
    path: '/create-account',
    icon: <BsFillPersonFill />,
  },
  {
    title: 'Donation',
    path: '/donation',
    icon: <MdBloodtype />,
  },
  {
    title: 'Search Donor',
    path: '/search-donor',
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
                <NavText key={index}>
                  <Link to={item.path} onClick={showSideBar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </NavText>
              );
            })}
          </NavMenuItem>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
