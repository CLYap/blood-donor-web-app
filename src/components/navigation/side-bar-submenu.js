import React, { useState } from 'react';
import { NavText } from './side-bar.styles';
import { Link } from 'react-router-dom';

const SideBarSubmenu = ({ showSideBar, item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavText>
        <Link
          to={item.path}
          onClick={(item.subnav && showSubnav) || showSideBar}
        >
          <div>
            {item.icon}
            <span>{item.title}</span>
          </div>
        </Link>
      </NavText>
      {subnav &&
        item.subnav.map((item, index) => {
          return (
            <NavText submenu key={index}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </NavText>
          );
        })}
    </>
  );
};

export default SideBarSubmenu;
