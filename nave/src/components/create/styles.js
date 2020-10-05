import styled from "styled-components";


export const Container = styled.div`
padding: 0;
margin: 0;
width: 1280px;
height: 720px;
background: #FFFFFF;
`;

export const Form = styled.form`
width: 700px;
height: 350px;
margin-left:auto;
margin-right:auto;
margin-top 156px;
border: 1px solid #212121;
box-sizing: border-box;
box-shadow: 2px 2px 5px gray
justify-content: center;
  align-items: center;
  flex-direction: column
  display: flex;
  &:after {
  content: "";
  display: table;
  clear: both;
  }
`
export const Group = styled.div`
float: left;
width:  280px;
margin:20px 20px; 
`


export const Input = styled.input`
width: 280px;
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
  margin-left:16.5%;
  width: 300px;
  height: 40px;
};

@media screen and (max-width: 480px){
  margin-left: 10%;
  width: 80%;
  height: 40px;  
};
`
export const Label = styled.label`
float: left;

width: 280px;
display: flex;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
color:#212121;
@media (min-width: 481px) and (max-width: 720px) {
    margin-left:16.5%;
  };
  @media screen and (max-width: 480px){
    margin-left: 10%;
  }; 
`

export const Button = styled.button`
  float:right;
  cursor: pointer;
  bottom:0;
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
    margin-left:16.5%;

  };
  @media screen and (max-width: 480px){
    right:0;
    bottom:0;  
  };
`;

export const Logo = styled.img`
margin: 10% 22% 0;
height: 60px
`;
