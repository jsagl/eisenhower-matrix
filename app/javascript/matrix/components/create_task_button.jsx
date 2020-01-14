import React, { useState } from 'react';
import NewTaskForm from "./new_task_form";
// import styled from 'styled-components';

const CreateTaskButton = (props) => {
    const [modalVisibility, setModalVisibility] = useState('hidden');

    const handleClick = () => {
        const modal = document.getElementById('new-task-modal');

        console.log(modal);
        console.log(modal.style);

        if (modal && (modal.style.visibility === 'hidden' || modal.style.visibility === '')) {
            setModalVisibility('visible');
        }
    };

    return (
        <div >
            <button className="btn btn-primary" onClick={()=>{handleClick()}}>Create Task</button>
            <NewTaskForm visibility={modalVisibility}/>
        </div>
    );
};

export default CreateTaskButton;
