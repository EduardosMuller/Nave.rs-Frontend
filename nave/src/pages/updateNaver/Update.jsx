import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header, H1, Container, FormContainer, Input, Group, Button, Label, Form } from './styles';
import Navbar from "../../components/navbar/Navbar";
import api from "../../api/Api";
import Modal from "../../components/modal/Modal"


export default ({ match }) => {
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const [UrlTextErr, setUrlTextErr] = useState("");
  const [UrlErr, setUrlErr] = useState(false);
  const [name, setName] = useState("");
  const [job_role, setJob] = useState("");
  const [admission_date, setAdmission] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");

  const handleModalVisible = () => {
    setModalVisible(true);
  }
  // Tratamento de erro para controle da imagem
  const UrlChecked = (url) => {
    if (!(url === "")) {
      let string = url;
      let regex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
      if (regex.test(string)) {
        setUrl(string);
      } else {
        setUrlErr(true);
        setUrlTextErr("A URL não é uma imagem! Verifique o link colocado.");
        setUrl("");
      }
    }
  };
  const handleUrlErr = () => {
    if (url === "") {
      setUrlTextErr("");
    }
  };
  useEffect(() => {
    setErr(false);
  }, [name, job_role, admission_date, birthdate, project, url]);

  const reverseDate = (date) => {
    const reverse = date.split("-").reverse().join("/");
    return reverse;
  };
  useEffect(() => {
    async function requestApi() {
      const res = await api.get(`navers/${match.params.id}`);
      let admissionDate = res.data.admission_date.split("T");
      let birthdayDate = res.data.birthdate.split("T");
      setName(res.data.name);
      setJob(res.data.jobadmissionDate_role);
      setAdmission(admissionDate[0]);
      setBirthdate(birthdayDate[0]);
      setProject(res.data.project);
      setUrl(res.data.url);
    }
    requestApi();
  }, [match.params.id])
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoad(true);

    const naver = {
      job_role,
      admission_date: reverseDate(admission_date),
      birthdate: reverseDate(birthdate),
      project,
      name,
      url,
    };

    try {
      await api.post(`navers/${match.params.id}`, naver);
      handleModalVisible();
      setTimeout(() => history.push("/home"), 1500);
    } catch (e) {
      setLoad(false);
      setErr(true);
    }
  };
  ;

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <Link to='/home'>
            <FiChevronLeft size={32} />
          </Link>
          <H1> Editar Naver</H1>
        </Header>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Group>
              <Label htmlFor="Nome">Nome</Label>
              <Input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <Label htmlFor="Idade">Idade</Label>
              <Input
                type="date"
                placeholder="Idade"
                value={birthdate}
                onChange={(event) => setBirthdate(event.target.value)}
                required
              />
              <Label htmlFor="Projetos_que_participou">Projetos que participou</Label>
              <Input
                type="text"
                placeholder="Projetos que Participou"
                name="Projetos_que_participou"
                value={project}
                onChange={(event) => setProject(event.target.value)}
                required
              />
            </Group>

            <Group>
              <Label htmlFor="Cargo">Cargo</Label>
              <Input
                type="text"
                placeholder="Cargo"
                name="Cargo"
                value={job_role}
                onChange={(event) => setJob(event.target.value)}

              />

              <Label htmlFor="Tempo_de_empresa">Tempo de empresa</Label>
              <Input
                type="date"
                placeholder="Tempo de Empresa"
                name="Tempo_de_empresa"
                value={admission_date}
                onChange={(event) => setAdmission(event.target.value)}
                required
              />

              <Label htmlFor="Cargo">URL da foto do Naver </Label>
              <Input
                type="url"
                placeholder="Url da foto do Naver"
                name="URL_Foto"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                onFocus={() => handleUrlErr()}
                onBlur={() => UrlChecked(url)}
                required
              />
              <Button type="submit">{load ? "Atualizando" : "Salvar"}</Button>
            </Group>
          </Form>
          {err && (
            <p style={{ textAlign: "center", color: "#FF0000" }}>
              Ocorreu um erro, verifique se todos os dados estão corretos!
            </p>
          )}
          {UrlErr && (
            <p style={{ textAlign: "center", color: "#FF0000" }}>{UrlTextErr}</p>
          )}
        </FormContainer>

        <Modal visible={modalVisible} setVisible={setModalVisible} buttons={false}>
          Naver atualizado,Naver atualizado com sucesso!
      </Modal>


      </Container>
    </>
  )
}