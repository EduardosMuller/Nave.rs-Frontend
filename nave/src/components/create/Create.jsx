import React from "react";
import { Container, Input, Group, Button, Label, Form } from './styles'
import Navbar from "../navbar/Navbar"
export default () =>
  <>
    <Navbar />
    <Container>
      <Form>
        <Group>
          <Label htmlFor="Nome">Nome</Label>
          <Input
            type="text"
            placeholder="Nome"
            name="Nome"
          />
          <Label htmlFor="Idade">Idade</Label>
          <Input
            type="date"
            placeholder="Idade"
            name="Idade"
          />
          <Label htmlFor="Projetos_que_participou">Projetos que participou</Label>
          <Input
            type="text"
            placeholder="Projetos que Participou"
            name="Projetos_que_participou"
          />
        </Group>

        <Group>
          <Label htmlFor="Cargo">Cargo</Label>
          <Input
            type="text"
            placeholder="Cargo"
            name="Cargo"
          />

          <Label htmlFor="Tempo_de_empresa">Tempo de empresa</Label>
          <Input
            type="date"
            placeholder="Tempo de Empresa"
            name="Tempo_de_empresa"
          />
          <Label htmlFor="Cargo">URL da foto do Naver </Label>
          <Input
            type="url"
            placeholder="Url da foto do Naver"
            name="URL_Foto"
          />
        </Group>
        <Button>Salvar</Button>
      </Form>

    </Container>
  </>