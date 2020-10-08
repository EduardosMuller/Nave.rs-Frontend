import React, { useState } from 'react';
import { Container, Input, Button, ImgDiv, Logo, Label, Form } from './styles'
import logo from "../../assets/logo.png"
import { login } from "../../api/Auth"
import { useHistory } from "react-router-dom"
import api from "../../api/Api"

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    try {
      const response = await api.post("users/login", { email, password });
      login(response.data.token);
      console.log(response)
      history.push("/home")
    }
    catch (err) {
      console.error(err)
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImgDiv>
          <Logo src={logo} alt="Nave.rs Logo" />
        </ImgDiv>
        <Label htmlFor="email">E-mail</Label>
        <Input
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
          value={email} />
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password} />
        <Button type="submit">Entrar</Button>
      </Form>

    </Container>
  )
}
