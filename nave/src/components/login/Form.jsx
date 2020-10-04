import React from "react"
import styled from "styled-components"
import Input from "./Input"
import Button from "./Button"
import Logo from "./Logo"
import Label from "./Label"


const Form = styled.form`
width: 448px;
height: 408px;
margin-left:auto;
margin-right:auto;
margin-top 156px;
border: 1px solid #212121;
box-sizing: border-box;
`;

export default () =>
  <div>
    <Form>
      <Logo></Logo>
      <Label for="email"></Label>
      <Input type="email" placeholder="Digite seu e-mail cadastrado..." name="email" />
      <Label for="password"></Label>
      <Input type="password" placeholder="Digite seu password..." name="password" />
      <Button></Button>
    </Form>

  </div>