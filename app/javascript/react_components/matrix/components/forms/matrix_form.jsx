import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {closeModal, createMatrix, updateMatrix} from '../../actions';
import {MATRIX_UPDATE} from "../../constants/constants";

const MatrixForm = (props) => {
    const modalType = useSelector(state => state.modal.modalType);
    const modalProps = useSelector(state => state.modal.modalProps);
    const dispatch = useDispatch();

    const initialName = modalType === MATRIX_UPDATE ? modalProps.matrix.name : '';

    const [nameInput, setNameInput] = useState(initialName);

    const handleChange = (e) => {
        if (e.target.name === 'matrixNameInput') {
            return setNameInput(e.target.value);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const body = {
            name: nameInput,
        };

        if (modalType === MATRIX_UPDATE) {
            dispatch(updateMatrix(modalProps.matrix.id, body));
        } else {
            dispatch(createMatrix(body));
        }

        setNameInput('');
        dispatch(closeModal());
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="matrix-name-field"
                    key="matrix-name-field"
                    name="matrixNameInput"
                    placeholder="Matrix name"
                    onChange={handleChange}
                    value={nameInput}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default MatrixForm;
