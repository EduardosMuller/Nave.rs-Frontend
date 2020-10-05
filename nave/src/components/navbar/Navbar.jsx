import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { logout } from "../../api/Auth"
import { Nav, Logo, Button } from "./styles"



export default () =>
  <Nav>
    <a href="https://nave.rs/" rel="noopener noreferrer" target="_blank"><Logo src={logo} alt="Nave.rs Logo"></Logo></a>
    <Link to="/"><Button type="submit" to="/">Sair</Button></Link>
  </Nav>