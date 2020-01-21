import React from 'react';
import { useDispatch } from "react-redux";

import { openCategoryModal } from '../actions/index';

const CreateCategoryButton = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openCategoryModal('CATEGORY_CREATION'));
    };

    return (
        <button type="button" className="btn btn-primary" onClick={handleClick}>
            New category
        </button>
    );
};

export default CreateCategoryButton