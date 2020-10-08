import React from "react"
import Navbar from "../navbar/Navbar"
import { Section, H1, Button, Row } from "./styles"
import { Link } from "react-router-dom"
import NaverList from "./NaversList"
import { Container } from "../login/styles"

export default () =>
  <>
    <Navbar />
    <Section>
      <H1>Navers</H1>
      <Link to="/create"><Button type="submit">Adicionar Navers</Button></Link>
    </Section>

    <Row>
      <NaverList />
    </Row>

  </>