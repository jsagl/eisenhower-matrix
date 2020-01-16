import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Task from './task'
import { updateTask } from "../actions";

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
    const matrixId = useParams().matrix;
    const dispatch = useDispatch();

    const [{ isOver }, drop] = useDrop({
        accept: 'TASK',
        drop: (draggedItem) => moveTask(draggedItem),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const moveTask = (item) => {
        if (item.task.status !== props.tasksFilter) {
            dispatch(updateTask(matrixId, item.task.id, {status: props.tasksFilter}));
        }
    };

    return (
        <div
            className="col-6"
            ref={drop}
        >
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
