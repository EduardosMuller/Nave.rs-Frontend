import styled from "styled-components";

export const Container = styled.section`
justify-content: space-between;
display: flex;
padding: 0 3%

`

export const H1 = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 48px;
width:141px;
text-align: center;
`

export const Button = styled.button`
  text-align: center;
  cursor: pointer;
  margin-top: 40px;
  background-color: #212121;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  border: 1px solid black;
  transition: 0.2s;
  width: 176px;
  height: 40px;
  &:hover{
    background-color:white;
    transition: 0.2s; 
    color:#212121
  };

  @media (min-width: 481px) and (max-width: 720px) {
    ;
  };
  @media screen and (max-width: 480px){
    
  };
`