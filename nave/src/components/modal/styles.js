import styled from "styled-components"


export const ModalWrapper = styled.div`
  background: rgba(0,0,0,0.4);
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  z-index:1;
  justify-content:center;
  display:flex;
  align-item:center;
  
  `

export const ModalBody = styled.div`
  position:fixed;
  align-self:center;
  width:592px;
  height: 233px;
  background-color: white;
  transform: translate(-50%,-50%);
  left: 50%;
  top:50%;
  margin-left: -.5%;
  @media only screen and (max-width:650px){
    width:80vw;
  }
  
  `

export const ModalH3 = styled.h3`
margin:15px 0 0 32px;
font-size: 24px;
font-weight: 600;
line-height: 36px;
font-family: Montserrat;
  `
export const ModalH5 = styled.h5`
  font-size: 16px;
  font-weight: 400;
  font-family: Montserrat;
  margin: 24px 0px 32px 32px;
  `

export const ModalHeader = styled.div`
margin: 0 auto;
width: 100%;
display: flex;
justify-content: space-between;
align-items: end;

svg{
  margin:20px 32px 0 0
}
  `

export const BtnContainer = styled.div`
margin: 60px auto 0;
width: 100%;
display: flex;
align-items: end;;
justify-content: flex-end;
`

export const BtnCancel = styled.button`
width: 160px;
background-color: white;
color: #212121;
cursor: pointer;
font-weight: 600;
font-size: 14px;
line-height: 24px;
text-align: center;
font-family: Montserrat;
margin-right: 24px;
padding: 8px 16px 8px 16px;
transition: 0.2s;
&:hover {
  transition: 0.2s;
  background-color: #212121;
  color: white;
}
@media only screen and (max-width:650px){
  width:120px;
}
  `
export const BtnDelete = styled.button`

width: 160px;
cursor: pointer;
background-color: #212121;
color: white;
font-weight: 600;
font-size: 14px;
line-height: 24px;
text-align: center;
font-family: Montserrat;
padding: 8px 16px 8px 16px;
transition: 0.2s;
margin-right:32px;
&:hover {
  transition: 0.2s;
  background-color: white;
  color: #212121;
}
@media only screen and (max-width:650px){
  width:120px;
}

  `

