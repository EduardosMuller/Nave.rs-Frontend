import styled from "styled-components";


export const Container = styled.div`
position: relative;
width: 1280px;
height: 720px;
background: #FFFFFF;
`;

export const Input = styled.input`
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
export const Label = styled.label`

margin-left: 7%;
margin-right: auto;
margin-top: 40px;
margin-bottom: 10px;
background: #FFFFFF;
width 384px;
height 40px;
`


export const Button = styled.button`
margin-left: 7%;
  margin-right: auto;
  margin-top: 40px;
  z-index:1;
  Background-color: #212121;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  border: 1px solid black;
  transition: 0.2s;
  width: 384px;
  height: 40px;
  &:hover{
    background-color:white;
    transition: 0.2s; 
    color:#212121
  };

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
`;

export const Logo = styled.img`
position: relative;
left: 22.5%;
right: 50%;
top: 5.22%;
margin-top:10%;
bottom: 64.44%;
margin-bottom:10%
`;
