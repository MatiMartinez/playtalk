import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import modalStyles from "../../utils/modalStyles";
import Login from "../authentication/Login";

export default function BtnStart() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => openModal()}>Sign Up</Button>
      <Modal
        isOpen={modalIsOpen}
        style={modalStyles}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <Login />
      </Modal>
    </>
  );
}

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #9748db;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px;
  cursor: pointer;

  :hover {
    background: #ab6ce2;
  }
`;
