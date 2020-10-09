import React from "react";
import { ModalWrapper, ModalBody, ModalHeader, BtnContainer, ModalH3, ModalH5, BtnCancel, BtnDelete } from "./styles"
import { FiX } from 'react-icons/fi';
export default (props) => {
  let separator = props.children.split(`,`)
  const handleModalWrapper = () => {
    props.setVisible(false);
  };
  return (
    <>
      {props.visible && (
        <ModalWrapper>

          <ModalBody buttons={props.buttons}>
            <ModalHeader>
              <ModalH3>{separator[0]}</ModalH3>
              <FiX size={20} onClick={handleModalWrapper}></FiX>
            </ModalHeader>
            <ModalH5>{separator[1]}</ModalH5>
            {props.buttons && (
              <BtnContainer>
                <BtnCancel onClick={handleModalWrapper}>Cancelar</BtnCancel>
                <BtnDelete onClick={() => props.deleteNavers(props.id)}>Excluir</BtnDelete>
              </BtnContainer>
            )}
          </ModalBody>
        </ModalWrapper>
      )}
    </>
  );
};
