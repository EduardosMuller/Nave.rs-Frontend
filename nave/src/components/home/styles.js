import styled from "styled-components";

export const Section = styled.section`
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

export const Row = styled.div`
margin: 0 -5px; 
&after{
  content:"";
  display:table;
  clear:both;
}`

export const Column = styled.div`
float:left;
width: 25%
padding:0 10px;

@media (min-width:721px) and (max-width:980px){
  width:33%;
  margin-top:40px
}

@media (min-width:481px) and (max-width:720px){
  width:50%;
  margin-top:40px;
}

@media screen and (max-width: 480px){
  width:100vw;
  display:block;
  margin-top:40px
}
`

export const Card = styled.div`
margin:32px;
text-align:left;

img{
  width:281px;
  height:281px;
}

@media (min-width:721px) and (max-width:980px){
  width:33%;
  margin-top:40px

}

@media (min-width:481px) and (max-width:720px){
  width:50%;
  margin-top:40px;
}

@media screen and (max-width: 480px){
  width:100%
  display:block;
  margin-top:40px
}
`
