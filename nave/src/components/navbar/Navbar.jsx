import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { logout } from "../../api/Auth"
import { Nav, Logo } from "./styles"



export default () =>
  <Nav>
    <Link to="/home"><Logo src={logo} alt="Nave.rs Logo"></Logo></Link>
    <Link to="/" onClick={logout} >Sair</Link>
  </Nav >