import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { openModal } from '../actions/index';

const CreateTaskButton = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openModal('TASK_CREATION'));
    };

    return (
        <button type="button" className="btn btn-primary" onClick={handleClick}>
            New modal
        </button>
    );
};

export default CreateTaskButton