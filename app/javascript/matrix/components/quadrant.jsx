import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';

import Task from './task'

const Quadrant = () => {
    const tasks = useSelector(state => state.tasks);

    return (
        <div className="col-6 card">
            {
                tasks.map((task) => {
                   return  <Task name={task.name} key={task.id} />
                })
            }
        </div>
    );
};

export default Quadrant;