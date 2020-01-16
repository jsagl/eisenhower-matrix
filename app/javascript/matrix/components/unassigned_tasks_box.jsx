import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import {useDrop} from "react-dnd";
import styled from 'styled-components';

import Task from './task'
import {updateTask} from "../actions";

const UnassignedTasksBox = (props) => {
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
            ref={drop}
            className="col-6 card"
        >
            {
                tasks.map((task) => {
                    return  <Task task={task} key={task.id} />
                })
            }
        </div>
    );
};

export default UnassignedTasksBox;
