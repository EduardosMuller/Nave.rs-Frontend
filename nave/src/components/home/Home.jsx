import React from "react"
import Navbar from "../navbar/Navbar"
import { Container, H1, Button } from "./styles"
import { Link } from "react-router-dom"

export default () =>
  <>
    <Navbar />
    <Container>
      <H1>Navers</H1>
      <Link to="/home/create"><Button type="submit">Adicionar Navers</Button></Link>
    </Container>

  </>