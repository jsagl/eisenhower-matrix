import React, { useState } from 'react';
import NewTaskForm from "./new_task_form";
// import styled from 'styled-components';

const CreateTaskButton = (props) => {
    const [modalDisplay, setModalDisplay] = useState('none');

    const handleClick = () => {
        const modal = document.getElementById('new-task-modal');

        if (modal && (modal.style.display === 'none' || modal.style.display === '')) {
            setModalDisplay('block');
        }
    };

    return (
        <div >
            <button className="btn btn-primary" onClick={()=>{handleClick()}}>Create Task</button>
            <NewTaskForm display={modalDisplay} setDisplay={setModalDisplay}/>
        </div>
    );
};

export default CreateTaskButton;
