import React from "react"
import styled from "styled-components"
import logo from "../../assets/logo.png"


const Logo = styled.img`
position: relative;
left: 22.5%;
right: 50%;
top: 5.22%;
margin-top:10%;
bottom: 64.44%;
margin-bottom:10%
font
`;

export default () =>
  <div>
    <Logo src={logo} alt="Logo Nave.rs"></Logo>

  </div>