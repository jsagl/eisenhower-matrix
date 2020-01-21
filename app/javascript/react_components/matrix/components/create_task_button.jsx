import React from 'react';
import { useDispatch } from "react-redux";

import { openTaskModal } from '../actions/index';

const CreateTaskButton = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openTaskModal('TASK_CREATION'));
    };

    return (
        <button type="button" className="btn btn-primary" onClick={handleClick}>
            New task
        </button>
    );
};

export default CreateTaskButton