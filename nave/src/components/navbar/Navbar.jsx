import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { logout } from "../../api/Auth"
import { Nav, Logo, Button } from "./styles"



export default () =>
  <Nav>
    <Link to="/home"><Logo src={logo} alt="Nave.rs Logo"></Logo></Link>
    <Link to="/"><Button type="submit" onClick={logout} >Sair</Button></Link>
  </Nav >