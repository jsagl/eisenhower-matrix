import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import {closeCategoryModal, createCategory, domTaskColorsUpdate, updateCategory} from '../actions/index';

const CategoryForm = (props) => {
    const matrixId = useParams().matrix;
    const modalType = useSelector(state => state.categoryModal.modalType);
    const modalProps = useSelector(state => state.categoryModal.modalProps);
    const dispatch = useDispatch();

    const initialName = modalType === 'CATEGORY_UPDATE' ? modalProps.category.name : '';
    const initialColor = modalType === 'CATEGORY_UPDATE' ? modalProps.category.color : '#ffffff';

    const [nameInput, setNameInput] = useState(initialName);
    const [color, setColor] = useState(initialColor);


    const handleChange = (e) => {
        switch (e.target.name) {
            case 'categoryNameInput':
                return setNameInput(e.target.value);
            case 'categoryColorInput':
                return setColor(e.target.value);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const body = {
            name: nameInput,
            color: color,
        };

        if (modalType === 'CATEGORY_UPDATE') {
            dispatch(updateCategory(matrixId, modalProps.category.id, body));
            dispatch(domTaskColorsUpdate(modalProps.category.id, color));
        } else {
            dispatch(createCategory(body, matrixId));
        }

        setNameInput('');
        setColor('#ffffff');
        dispatch(closeCategoryModal());
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="category-name-field"
                    key="category-name-field"
                    name="categoryNameInput"
                    placeholder="Task name"
                    onChange={handleChange}
                    value={nameInput}
                />
            </div>
            <div className="form-group">
                <input
                    type="color"
                    className="form-control"
                    id="category-color-field"
                    key="category-color-field"
                    name="categoryColorInput"
                    placeholder="Category color #00000"
                    onChange={handleChange}
                    value={color}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default CategoryForm;
