import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import { createTask } from '../actions/index';
import { positionToNum } from "./matrix";

const TaskForm = (props) => {
    const matrixId = useParams().matrix;
    const [nameInput, setNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [status, setStatus] = useState('Unassigned');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'taskNameInput':
                return setNameInput(e.target.value);
            case 'taskDescriptionInput':
                return setDescriptionInput(e.target.value);
            case 'taskStatusSelect':
                return setStatus(e.target.value);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const body = {
            name: nameInput,
            description: descriptionInput,
            status: status
        };

        dispatch(createTask(body, matrixId));
        setNameInput('');
        setDescriptionInput('');
        setStatus('Unassigned');
        props.dismissModal();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="task-name-field"
                    key="task-name-field"
                    name="taskNameInput"
                    placeholder="Task name"
                    onChange={handleChange}
                    value={nameInput}
                />
            </div>
            <div className="form-group">
                <textarea
                    type="text"
                    className="form-control"
                    id="task-description-field"
                    key="task-description-field"
                    name="taskDescriptionInput"
                    placeholder="Task description"
                    onChange={handleChange}
                    value={descriptionInput}
                />
            </div>
            <div className="form-group">
                <select
                    name="taskStatusSelect"
                    className="form-control"
                    id="task-status-field"
                    onChange={handleChange}
                    value={status}
                >
                    <option value={positionToNum.toBeAssigned}>Unassigned</option>
                    <option value={positionToNum.importantUrgent}>Important & Urgent</option>
                    <option value={positionToNum.importantNotUrgent}>Important & Not Urgent</option>
                    <option value={positionToNum.notImportantUrgent}>Not Important & Urgent</option>
                    <option value={positionToNum.notImportantNotUrgent}>Not Important & Not Urgent</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Create task</button>
        </form>
    );
};

export default TaskForm;
