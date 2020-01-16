import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Task from './task'

const UnassignedTasksBox = (props) => {
    const tasks = useSelector(state => state.tasks.filter(tasks => tasks.status === props.tasksFilter));

    return (
        <div className="col-6 card">
            {
                tasks.map((task) => {
                    return  <Task task={task} key={task.id} />
                })
            }
        </div>
    );
};

export default UnassignedTasksBox;
