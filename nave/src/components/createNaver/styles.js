import styled from "styled-components";


export const Container = styled.div`
padding: 0;
margin: 0;
background: #FFFFFF;
align-items: center;
justify-content:center;
width:100vw;
`;
export const FormContainer = styled.div`
padding: 0;
margin: 0;
background: #FFFFFF;
display:flex;
align-items: center;
justify-content:center;
width:100vw;
`;

export const Form = styled.form`
width: 632px;
height: 322px;
display: flex;
justify-content:space-between;
@media only screen  and (max-width:680px){
  flex-direction:column;
  width:500px;
  
}
`
export const Group = styled.div`

width: 280px;
padding: 10px 20px;
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
margin-bottom:28px;
@media only screen and (min-width:480px) and (max-width:680px){
  margin:0 10px 14px 70px;
  width:350px;
}
@media only screen and (min-width:300px) and (max-width:479px){
margin:0 10px 14px 25px;

}
};
`
export const Label = styled.label`
float: left;
display: flex;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
color:#212121;

@media only screen and (min-width:480px) and (max-width:680px){
  margin:10px 10px 0 70px;
  width:350px;
}
@media only screen and (min-width:300px) and (max-width:479px){
margin:10px 0 0 25px;

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

  @media (min-width: 481px) and (max-width: 680px) {
    margin-left:150px;
    float:left
  };
  @media screen and (max-width: 480px){
    margin-right: 30px
  };
`;


export const H1 = styled.h2`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
`;

export const Header = styled.div`
display: flex;
justify-content:center;
margin-left:-200px;
width:100%;
height:50px;
align-items: center;
@media only screen and (max-width:680px){
  margin-left: 0;
}
`;