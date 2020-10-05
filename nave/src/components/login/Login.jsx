import React, { useState } from 'react';
import { Container, Input, Button, Logo, Label, Form } from './styles'
import logo from "../../assets/logo.png"
import { login } from "../../api/Auth"
import { useHistory } from "react-router-dom"
import api from "../../api/Api"

export default () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("users/login", { email, pass });
      login(response.data.token);
      history.pushState("/home")
    }
    catch (err) {
      console.error("Erro ao tentar realizar o login, tente novamente!")
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Logo src={logo} alt="Nave.rs Logo" />
        <Label htmlFor="email">E-mail</Label>
        <Input
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
          name="email"
          value={email} />
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={e => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          name="password"
          value={pass} />
        <Button>Entrar</Button>
      </Form>

    </Container>
  )
}
