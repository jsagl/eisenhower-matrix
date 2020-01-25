import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Modal} from "react-bootstrap";

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

const SharedModal = () => {
    const show = useSelector(state => state.modal.display);
    const modalType = useSelector(state => state.modal.modalType);
    const title = useSelector(state => state.modal.modalProps.title);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(closeModal());

    if (modalType === TASK_CREATION || modalType === TASK_UPDATE) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TaskForm/>
                </Modal.Body>
            </Modal>
        );
    } else if (modalType === CATEGORY_CREATION || modalType === CATEGORY_UPDATE) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CategoryForm/>
                </Modal.Body>
            </Modal>
        );
    } else if (modalType === MATRIX_CREATION || modalType === MATRIX_UPDATE) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MatrixForm/>
                </Modal.Body>
            </Modal>
        );
    }
};

export default SharedModal;
