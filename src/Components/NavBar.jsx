import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;
const Pages = styled(Link)`
  font-size: 20px;
  margin-right: 20px;
  color : #ffffff;
  text-decoration : none;
`;

const NavBar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Pages to='/'>Code for Interview</Pages>
          <Pages to='addUser'>Add Users</Pages>
          <Pages to='allUsers'>All User</Pages>
        </Toolbar>
      </Header>
    </>
  );
};

export default NavBar;
