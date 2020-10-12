import React, { useState, useEffect } from "react";
import api from "../../../api/Api";
import { Link } from "react-router-dom";
import { CardWrapper, CardBody, CardImage, Pic, CardContainer, CardH1, CardH2, CardH3, CardH5 } from "./styles"
import { FaPen, FaTrash, FaTimes } from "react-icons/fa";

export default ({ id, ...props }) => {

  const [name, setName] = useState("");
  const [job_role, setJob] = useState("");
  const [admission_date, setAdmission] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function requestApi() {
      const resp = await api.get(`navers/${id}`);
      setLoad(true);
      let naverAge = resp.data.birthdate.split("T");
      let naverAgeYear = naverAge[0].split("-");
      let dayToday = new Date().toISOString().slice(0, 10).split("-");
      let naverResultAge = dayToday[0] - naverAgeYear[0] + ` anos`;

      let naverAdmission = resp.data.admission_date.split("T");
      let naverAdmissionYear = naverAdmission[0].split("-");
      let naverToday = new Date().toISOString().slice(0, 10).split("-");
      let naverResultYear = 0;

      if (naverToday[0] === naverAdmissionYear[0] && naverToday[1] === naverAdmissionYear[1]) {
        naverResultYear = naverToday[2] - naverAdmissionYear[2] + ` dias`;
      } else if (naverToday[0] === naverAdmissionYear[0]) {
        naverResultYear = naverToday[1] - naverAdmissionYear[1] + ` meses`;
      } else {
        naverResultYear = naverToday[0] - naverAdmissionYear[0] + ` anos`;
      }

      setName(resp.data.name);
      setJob(resp.data.job_role);
      setAdmission(naverResultYear);
      setBirthdate(naverResultAge);
      setProject(resp.data.project);
      setUrl(resp.data.url);
    }
    requestApi();
  }, [id]);

  const handleCardWrapper = () => {
    props.setVisible(false);
  };

  return (
    <>
      {props.visible && load && (
        <CardWrapper>
          <CardBody>
            <CardImage>
              <Pic src={url} alt={`${name} picture`} />
            </CardImage>
            <CardContainer>
              <FaTimes onClick={handleCardWrapper} />
              <CardH1>{name}</CardH1>
              <CardH2>{job_role}</CardH2>
              <CardH3>Idade</CardH3>
              <CardH5>{birthdate}</CardH5>
              <CardH3>Tempo de empresa</CardH3>
              <CardH5>{admission_date}</CardH5>
              <CardH3>Projetos que participou</CardH3>
              <CardH5>{project}</CardH5>
              <FaTrash className="trash" onClick={() => props.handleModalVisible(id)} />
              <Link to={`/update/${id}`}>
                <FaPen className="pen" />
              </Link>
            </CardContainer>
          </CardBody>
        </CardWrapper>
      )}
    </>
  );
};