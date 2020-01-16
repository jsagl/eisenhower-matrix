import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Task from './task'

const Card = styled.div`
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
  padding: 1px 0;
  margin: 15px 0;
  height: 25vh;
  border-radius: 3px;
  background-color: rgba(250, 250, 250, 1)
`;

const Quadrant = (props) => {
    const tasks = useSelector(state => state.tasks.filter(tasks => tasks.status === props.tasksFilter));

    return (
        <div className="col-6">
            <Card>
                {
                    tasks.map((task) => {
                       return  <Task task={task} key={task.id} />
                    })
                }
            </Card>
        </div>
    );
};

export default Quadrant;
