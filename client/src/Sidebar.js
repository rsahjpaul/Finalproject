import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from 'react-icons/fa';
import { AiFillEdit } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";


const Sidebar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <StyledNav>
        <div>
        <StyledLink to="/"><StyledLogo></StyledLogo></StyledLink>

          <NavigationLink>
            <StyledLink to="/">Main Page</StyledLink>
          </NavigationLink>

          <NavigationLink>
            <StyledLink to="/FeaturedProject">Featured</StyledLink>
          </NavigationLink>

          <NavigationLink>
            <StyledLink to="/RecentlyAdded">In Review</StyledLink>
          </NavigationLink>

          <NavigationLinkProfile>
            <StyledLink to="profile"><FaUser></FaUser></StyledLink>
          </NavigationLinkProfile>

          {isAuthenticated && (
            <NavigationLinkOne onClick={handleLogout}>
              Log out
            </NavigationLinkOne>
          )}        
        </div>
      </StyledNav>
    </header>
  );
};

const StyledLogo = styled(AiFillEdit)`
  color: white;
  font-size: 2em;
  margin-left: 7vh;
  margin-top:2vh;
`;

export default Sidebar;
const NavigationLinkProfile = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  height: 45px;
  width: 45px;
  margin:10px 10px 10px 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: lavender;
    color: white;
  }

  &.active {
    color: white;
  }
`;

const NavigationLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  height: 45px;
  width: 125px;
  margin:10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: lavender;
    color: white;
  }

  &.active {
    color: white;
  }
`;

const NavigationLinkOne = styled(NavLink)`
  color: darkgrey;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  height: 45px;
  width: 125px;
  margin:10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: lavender;
    color: white;
  }

  &.active {
    color: white;
  }
`;

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;
  font-weight: bold;
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: sans-serif;
  font-weight: bolder;
  width: 20vh;
  height: 100vh;
  text-decoration: none;
  border-right: solid 1px lightgrey;
`;


const StyledIcon = styled(FaUser)`
  color: red;
  font-size: 2em;
`;