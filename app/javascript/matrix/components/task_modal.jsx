import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import {closeModal} from "../actions";
import TaskForm from "./task_form";

const TaskModal = () => {
    const show = useSelector(state => state.taskModal.display);
    const title = useSelector(state => state.taskModal.modalProps.title);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(closeModal());

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TaskForm />
            </Modal.Body>
        </Modal>
    );
};

export default TaskModal;
