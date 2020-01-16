import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import {closeModal} from "../actions";
import TaskForm from "./task_form";

const UpdatedTaskModal = () => {
    const show = useSelector(state => state.taskModal.display);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(closeModal());

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TaskForm />
            </Modal.Body>
        </Modal>
    );
};

export default UpdatedTaskModal;
