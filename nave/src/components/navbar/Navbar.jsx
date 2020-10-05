import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { logout } from "../../api/Auth"
import styled from "styled-components"

const Nav = styled.nav`
height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px 5px;
  margin-right: 1%;

  img{
    height: 37px
  }
  
  a{
    text-decoration:none;
    color:white;
    font-size: 14px
    font-weight: 600
  }
`;

export default () =>
  <Nav>
    <a></a>
    <Link className="nav-link nav-text-color hover-button " to="/logout">
      Sair
         </Link>

  </Nav>