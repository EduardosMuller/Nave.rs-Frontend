import styled from "styled-components"


export const ModalWrapper = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  margin: 100px auto 0;
  transition: all .8s;
  width: 60%;
  `
export const ModalHeader = styled.div`
  background: #263238;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;
  `

export const H3 = styled.h3`
  color: white;
  float: left;
  margin: 0;
  padding: 0;
  `

export const ModalBody = styled.div`
  padding: 10px 15px;
  text-align: center;
  `

  .modal - footer {
    background: #263238;
height: 35px;
padding: 15px;
}

.close - modal - btn {
  color: white;
  cursor: pointer;
  float: right;
  font - size: 30px;
  margin: 0;
}

.close - modal - btn: hover {
  color: black;
}

.btn - cancel, .btn -continue {
  background: coral;
  border: none;
  color: white;
  cursor: pointer;
  font - weight: bold;
  outline: none;
  padding: 10px;
}

.btn - cancel {
  background - color: #b71c1c;
  float: left;
}

.btn -continue {
  background - color: #1b5e20;
  float: right;
}

.back - drop {
  background - color: rgba(48, 49, 48, 0.42);
  height: 100 %;
  position: fixed;
  transition: all 1.3s;
  width: 100 %;
}

.open - modal - btn {
  margin: 15px;
  padding: 10px;
  font - weight: bold;
}


