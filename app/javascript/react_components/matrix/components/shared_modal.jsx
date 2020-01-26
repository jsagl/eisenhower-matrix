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

    let form;

    if (show === false) {
        form = 'empty'
    } else if (modalType === TASK_CREATION || modalType === TASK_UPDATE) {
        form = <TaskForm/>
    } else if (modalType === CATEGORY_CREATION || modalType === CATEGORY_UPDATE) {
        form = <CategoryForm/>
    } else if (modalType === MATRIX_CREATION || modalType === MATRIX_UPDATE) {
        form = <MatrixForm/>
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {form}
            </Modal.Body>
        </Modal>
    );
};

export default SharedModal;
