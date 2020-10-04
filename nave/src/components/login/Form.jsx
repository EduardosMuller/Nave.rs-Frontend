import React, { useState } from "react"
import styled from "styled-components"
import Input from "./Input"
import Button from "./Button"
import Logo from "./Logo"
import Label from "./Label"
import { login } from "../../api/Auth"
import { useHistory } from "react-router-dom"
import api from "../../api/Api"

const Form = styled.form`
width: 448px;
height: 408px;
margin-left:auto;
margin-right:auto;
margin-top 156px;
border: 1px solid #212121;
box-sizing: border-box;
border-shadow: 2px 2px black

`;

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("users/login", { email, password });
      login(response.data.token);
      history.pushState("/home")
    }
    catch (err) {
      console.error("Erro ao tentar realizar o login, tente novamente!")
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Logo></Logo>
        <Label for="email"></Label>
        <Input
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Digite seu e-mail cadastrado..."
          name="email"
          value={email} />
        <Label for="password"></Label>
        <Input
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Digite seu password..."
          name="password"
          value={password} />
        <Button></Button>
      </Form>

    </div>
  )
}