import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker/es";

import {closeModal, createTask, updateTask} from '../../actions';
import { positionToNum } from "../matrix";
import TaskFormMatrix from "./task_form_matrix";
import TaskFormRadioButton from "./task_form_radio_btn_list";
import {TASK_CREATION, TASK_UPDATE} from "../../constants/constants";

const TaskForm = (props) => {
    const matrixId = useParams().matrix;
    const modalType = useSelector(state => state.modal.modalType);
    const modalProps = useSelector(state => state.modal.modalProps);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const initialName = modalType === TASK_UPDATE ? modalProps.task.name : '';
    const initialDescription = modalType === TASK_UPDATE ? modalProps.task.description : '';
    const initialCategory = modalType === TASK_UPDATE ? modalProps.task.category_id : categories[0].id;
    const initialStatus = modalType === TASK_UPDATE ? modalProps.task.status : positionToNum.toBeAssigned;
    const initialTimeToComplete = modalType === TASK_UPDATE ? modalProps.task.time_to_complete : 15;
    const initialDate = (modalType === TASK_UPDATE) && (modalProps.task.due_date != null) ? new Date(modalProps.task.due_date) : null;

    const [nameInput, setNameInput] = useState(initialName);
    const [descriptionInput, setDescriptionInput] = useState(initialDescription);
    const [category, setCategory] = useState(initialCategory);
    const [status, setStatus] = useState(initialStatus);
    const [timeToComplete, setTimeToComplete] = useState(initialTimeToComplete);
    const [dueDate, setDueDate] = useState(initialDate);

    const focusedInput = useRef(null);

    useEffect(() => {
        focusedInput.current.focus()
    }, []);

    let initialDefaultCategoryOption;
    if (modalType === TASK_CREATION) {
        initialDefaultCategoryOption = <option value={category} key={'default'} disabled>Category</option>
    }

    const [defaultCategoryOption, setDefaultCategoryOption] = useState(initialDefaultCategoryOption);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'taskNameInput':
                return setNameInput(e.target.value);
            case 'taskDescriptionInput':
                return setDescriptionInput(e.target.value);
            case 'taskCategorySelect':
                setDefaultCategoryOption(null);
                return setCategory(e.target.value);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const body = {
            name: nameInput,
            description: descriptionInput,
            status: status,
            due_date: dueDate == null ? null : new Date(dueDate.getTime() + 720*60000),
            time_to_complete: timeToComplete,
            category_id: category
        };

        if (modalType === TASK_UPDATE) {
            dispatch(updateTask(matrixId, modalProps.task.id, body))
        } else {
            dispatch(createTask(body, matrixId));
        }

        dispatch(closeModal());
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
                    ref={focusedInput}
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
                <TaskFormMatrix setStatus={setStatus} taskStatus={status}/>
            </div>

            <div className="form-group">
                <div className="form-check form-check-inline">
                    <label className="form-check-label">Duration:</label>
                </div>
                <TaskFormRadioButton value={15} timeToComplete={timeToComplete} setTimeToComplete={setTimeToComplete}/>
                <TaskFormRadioButton value={30} timeToComplete={timeToComplete} setTimeToComplete={setTimeToComplete}/>
                <TaskFormRadioButton value={60} timeToComplete={timeToComplete} setTimeToComplete={setTimeToComplete}/>
                <TaskFormRadioButton value={120} timeToComplete={timeToComplete} setTimeToComplete={setTimeToComplete}/>
                <TaskFormRadioButton value={180} timeToComplete={timeToComplete} setTimeToComplete={setTimeToComplete}/>
            </div>

            <div className="form-group">
                <div className="form-row">
                    <div className="col">
                        <select
                            name="taskCategorySelect"
                            className="form-control"
                            id="task-status-field"
                            onChange={handleChange}
                            value={category}
                        >
                            {defaultCategoryOption}
                            {
                                categories.map((category) => {
                                    return <option value={category.id} key={category.id}>{category.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='col'>
                        <DatePicker
                            id="date-picker"
                            className='form-control'
                            selected={dueDate}
                            onChange={date => {
                                setDueDate(date);
                            }}
                            dateFormat="MMMM d, yyyy"
                            minDate={new Date()}
                            placeholderText={dueDate == null ? 'Due date' : dueDate}
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default TaskForm;
