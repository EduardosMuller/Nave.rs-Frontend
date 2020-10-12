import React, { useState, useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import api from "../../api/Api";
import { Link } from "react-router-dom";
import { BtnDelete, CardImg, CardH3, CardH5, List, CardBody } from "./styles";
import Modal from "../../components/modal/Modal"
import ModalCard from "../../components/modal/modalCard/ModalCard"

export default () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [idModal, setIdModal] = useState("");
  const [cardVisible, setCardVisible] = useState(false);
  const [idCard, setIdCard] = useState("");
  const [modalVisibleDelete, SetModalDelete] = useState(false);
  const [navers, setNavers] = useState([]);
  const [id, setID] = useState("");
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState("");

  const handleCardVisible = (id) => {
    setIdCard(id);
    setCardVisible(true);
  };

  const handleModalVisible = (id) => {
    setIdModal(id);
    setModalVisible(true);
  };

  const handleModalDelete = () => {
    SetModalDelete(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    let mounted = true;
    api.get("navers")
      .then((res) => {
        if (mounted) {
          setNavers(res.data);
          setID([...id, ...res.data]);
          setLoad(true);
        }
      })
      .catch((err) => {
        setErr(err.message);
        setLoad(true);
      });

    return () => {
      mounted = false;
    };
  }, [navers]);

  async function deleteNavers(id) {
    try {
      await api.delete(`navers/${id}`);
      setNavers(navers.filter((navers) => navers.id !== id));
      closeModal();
      handleModalDelete();
      setTimeout(() => window.location.reload(), 1500);
    } catch {
      alert("Falha ao deletar Naver!");
    }
  }
  return (
    <>
      {load ? (
        <List className="list">
          {err ? (
            <li>{err.message}</li>
          ) : (
              navers.map((navers) => {
                return (
                  <CardBody key={navers.id}>
                    <CardImg
                      onClick={() => handleCardVisible(navers.id)}
                      width="281"
                      height="281"
                      src={navers.url}
                      alt={`${navers.name} Image`}
                    />
                    <CardH3>{navers.name}</CardH3>
                    <CardH5>{navers.job_role}</CardH5>
                    <BtnDelete onClick={() => handleModalVisible(navers.id)}>
                      <FaTrash size={18}></FaTrash>
                    </BtnDelete>
                    <Link to={`/update/${navers.id}`}>
                      <FaPen size={18}></FaPen>
                    </Link>
                  </CardBody>

                );
              })
            )}
        </List>
      ) : (
          <div>
            <FiX
              style={{ position: "absolute", top: "50%", left: "50%", fontSize: "80px" }}

            ></FiX>
          </div>
        )}

      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
        buttons={true}
        deleteNavers={deleteNavers}
        id={idModal}
      >
        Excluir Naver , Tem certeza que deseja excluir este Naver?
    </Modal>

      <Modal visible={modalVisibleDelete} setVisible={SetModalDelete} buttons={false}>
        Naver excluído , Naver excluído com sucesso!
    </Modal>

      {cardVisible && (
        <ModalCard
          visible={cardVisible}
          setVisible={setCardVisible}
          id={idCard}
          handleModalVisible={handleModalVisible}
        />
      )}
    </>
  )
}


