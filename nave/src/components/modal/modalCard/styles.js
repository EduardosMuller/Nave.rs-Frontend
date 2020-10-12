import styled from "styled-components"

export const CardWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const CardBody = styled.div`
  position: fixed;
  background: white;
  width: 50vw;
  height: 503px;
  min-width: 300px;
  top: 50%;
  left: 50%;
  display:flex;
  transform: translate(-50%, -50%);
 
`;

export const CardImage = styled.div`
  width: 25vw;
  height: 503px;
  float: left;
  min-width: 150px;
  box-sizing: border-box;
  margin-right: 5px
  
`;
export const PenIcon = styled.svg`
  position: relative;
  left: 0;
  margin-top: 76px;
  margin-right: 16px;
`;
export const CardContainer = styled.div`
  width: 50%;
  height: 503px;
  float: right;
  padding: 32px 21px 27px 30px;
  div:after {
    content: "";
    display: table;
    clear: both;
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 16px;
    transition:0.4s
  }
  svg:hover{
    transform: scale(1.5);
    transition: 0.4s;
  }

  svg.trash,
  .pen {
    position: relative;
    left: 0;
    margin-top: 76px;
    margin-right: 16px;
  }

  a {
    color: #212121;
  }

  @media only screen and (max-width: 760px) {
    {
      padding-top: 10px
    }
    svg.trash,
    .pen {
      margin-top: 20px;
    }
    @media only screen and (max-width: 760px) {
    
      svg.trash,
      .pen {
        margin-top: 0px;
      }
  }
`;

export const Pic = styled.img`
  width: 25vw;
  min-width: 150px;
  height: 503px;
  object-fit: cover;
  @screen only screen and (max-width:480px)

`
;

export const CardH1 = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 10px;
`;

export const CardH2= styled.h2`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 0px;
`;

export const CardH3 = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const CardH5 = styled.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
  margin-top: 0px;
`;