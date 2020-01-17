import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";

import {closeCategoryModal} from "../actions";
import CategoryForm from "./category_form";

const CategoryModal = () => {
    const show = useSelector(state => state.categoryModal.display);
    const title = useSelector(state => state.categoryModal.modalProps.title);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(closeCategoryModal());

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CategoryForm />
            </Modal.Body>
        </Modal>
    );
};

export default CategoryModal;
