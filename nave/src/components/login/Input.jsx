import React from "react"
import styled from "styled-components"

const Input = styled.input`
margin-left: 7%;
margin-right: auto;
width: 384px;
height: 40px;
background: #FFFFFF;
border: 1px solid #424242; 
box-sizing: border-box;

@media (min-width: 481px) and (max-width: 720px) {
  margin-left:16.5%;
  width: 300px;
  height: 40px;
};
@media screen and (max-width: 480px){
  margin-left: auto;
  width: 100%;
  height: 40px;  
};
`
export default (props) =>
  <Input
    type={props.type}
    placeholder={props.placeholder}
    required>
  </Input>