import styled from "styled-components";

export const Section = styled.section`
justify-content: space-between;
display: flex;
padding: 0 3%;
align-itens:center;
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
  align-self:center
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
  @media only screen and (max-width:650px){
    width:130px;
    font-size: 12px;
  }

`
// NaverList Styles

export const Body = styled.div`
  max-width: 1600px;
  border: 1px solid #ccc;
  display: flex;
  
  flex-wrap: wrap;
`
export const List = styled.ul`
ul.list{
textAlign: center;
paddingInlineStart: 0px; 
display: content
}
`;
export const Card = styled.div`
  margin:32px;
  text-align:left;


@media (min-width:721px) and (max-width:980px){
  width:30vw;
  margin-top:40px

}

@media (min-width:481px) and (max-width:720px){
  width:50vw;
  margin-top:40px;
}

@media screen and (max-width: 480px){
  width:100%
  display:block;
  margin-top:40px
}

a, a:visited, a:hover, a:active {
  color: inherit
}
svg{
  transition:0.4s
}
svg:hover{
  transform: scale(1.5);
  transition: 0.4s;
}
`

export const BtnDelete = styled.button`
background-color: white;
margin-top:20px;
margin-right:10px;
border: none;
cursor: pointer;
&focus{
  border:none;
  outline:none;
}
svg{
  transition:0.4s
}
svg:hover{
  transform: scale(1.5);
  transition: 0.4s;
}
`;

export const CardH5 = styled.div`

font-family: Montserrat;
font-size: 16px;
line-height: 24px;
margin-top: 0;
font-weight:400`;

export const CardH3 = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 18px;
color: #212121;
font-family: Montserrat;
margin-bottom: 5px;
`;

export const CardBody = styled.div`
margin: 32px 32px 0;
margin-bottom: 48px;
width: 281px;
height: 376px;
text-align: left;
`

export const CardImg = styled.img`
  width:281px;
  height:281px;
  object-fit:cover;
  -webkit-filter: grayscale(100%); 
  filter: grayscale(100%)
`;

