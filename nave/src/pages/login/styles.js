import styled from "styled-components";


export const Container = styled.div`
padding: 0;
margin: 0;
background: #FFFFFF;
box-sizing:border-box;
display:flex;
justify-content:center;
@media (min-width: 481px) and (max-width: 720px) {
  width: 720px;
};
@media screen and (max-width: 480px){
  width: 480px;
  
};
`;
export const Form = styled.form`
width: 448px;
height: 408px;
margin-left:auto;
margin-right:auto;
margin-top 156px;
border: 1px solid #212121;
box-sizing: border-box;
box-shadow: 2px 2px 5px gray;
@media (min-width: 481px) and (max-width: 720px) {
  width: 380px;
};
@media screen and (max-width: 480px){
  width: 300px;
`
export const Input = styled.input`
margin-left: 7%;
margin-right: auto;
width: 384px;
height: 40px;
background: #FFFFFF;
border: 1px solid #424242; 
box-sizing: border-box;
color:9E9E9E;
font-size:16px;
font-weight: 400;
line-height: 24px;
font-family: Montserrat;

@media (min-width: 481px) and (max-width: 720px) {
  
  width: 86%;
  height: 40px;
};
@media screen and (max-width: 480px){
  margin-left: 10%;
  width: 80%;
  height: 40px;  
};
`
export const Label = styled.label`
margin-left: 7%;
margin-top: 7%;
width: 384px;
display: flex;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
color:#212121;
@media (min-width: 481px) and (max-width: 720px) {
 
  };
  @media screen and (max-width: 480px){
    margin-left: 10%;
  }; 
`

export const Button = styled.button`
  cursor: pointer;
  margin-left: 7%;
  margin-right: auto;
  margin-top: 40px;
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
   
    width: 86%;
    height: 40px;
  };
  @media screen and (max-width: 480px){
    margin-left: 10%;
    width: 80%;
    height: 40px;  
  };
`;
export const ImgDiv = styled.div`
display:flex;
justify-content:center;`
  ;
export const Logo = styled.img`
margin: 10% 0 0;
height: 60px;
`;

