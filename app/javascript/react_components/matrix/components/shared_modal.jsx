import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Modal} from "react-bootstrap";
import styled from "styled-components";

import {closeModal} from "../actions";
import TaskForm from "./forms/task_form";
import CategoryForm from "./forms/category_form";
import MatrixForm from "./forms/matrix_form";
import {
    CATEGORY_CREATION,
    CATEGORY_UPDATE,
    MATRIX_CREATION,
    MATRIX_UPDATE,
    TASK_CREATION,
    TASK_UPDATE
} from "../constants/constants";

const BackDrop = styled.div`
    display: ${props => props.display};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`;

const ModalContainer = styled.div`
    display: ${props => props.display};
    position: relative;
    width: auto;
    max-width: 500px;
    margin: 1.75rem auto;
    pointer-events: none;
`;

const ModalContent = styled.div`
  position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
`;

const ModalHeader = styled.div`
  display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
`;

const ModalBody = styled.div`
  position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`;

const SharedModal = () => {
    const display = useSelector(state => state.modal.display);
    const modalType = useSelector(state => state.modal.modalType);
    const title = useSelector(state => state.modal.modalProps.title);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(closeModal());

    let form;

    if (display === 'none') {
        form = 'empty'
    } else if (modalType === TASK_CREATION || modalType === TASK_UPDATE) {
        form = <TaskForm/>
    } else if (modalType === CATEGORY_CREATION || modalType === CATEGORY_UPDATE) {
        form = <CategoryForm/>
    } else if (modalType === MATRIX_CREATION || modalType === MATRIX_UPDATE) {
        form = <MatrixForm/>
    }

    return (
        <BackDrop display={display}>
            <ModalContainer display={display}>
                <ModalContent>
                    <ModalHeader>
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="close" onClick={handleClose}>
                                <span aria-hidden="true">×</span>
                            </button>
                    </ModalHeader>
                    <ModalBody>
                        {form}
                    </ModalBody>
                </ModalContent>
            </ModalContainer>
        </BackDrop>
    );
};

export default SharedModal;
