import React from "react"
import Navbar from "../../components/navbar/Navbar"
import { Section, H1, Button, Body } from "./styles"
import { Link } from "react-router-dom"
import NaverList from "./NaversList"


export default () =>
  <>
    <Navbar />
    <Section>
      <H1>Navers</H1>
      <Link to="/create"><Button type="submit">Adicionar Navers</Button></Link>
    </Section>

    <Body>
      <NaverList />
    </Body>
  </>