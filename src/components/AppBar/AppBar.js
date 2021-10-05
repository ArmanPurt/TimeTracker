import React, { memo } from 'react';
import { Navbar } from '../styledComponents/Navbar/Navbar';
import { AppBarItem } from '../styledComponents/Navbar/AppBarItem';
import { NavBarItems } from '../../mockData/NavBarItems';
import { NavBarLink } from '../styledComponents/Navbar/NavBarLink';

export const AppBar = memo(() => {
  return (
    <Navbar>
      {NavBarItems.map((item, index) => {
        return (
          <AppBarItem key={index}>
            <NavBarLink to={item.path}>{item.name}</NavBarLink>
          </AppBarItem>
        );
      })}
    </Navbar>
  );
});
