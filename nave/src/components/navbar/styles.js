import styled from "styled-components";

export const Nav = styled.nav`
  width:100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  a{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
  margin-right: 35px;
  transition:0.4s
  }
  a:hover{
    transform: scale(1.3);
    transition: 0.4s;
  
  }

  `
export const Logo = styled.img`
    height: 37px;
    margin-left: 35px
  `