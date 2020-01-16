import React, {useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useDrag } from 'react-dnd'

import {openModal, updateTask, deleteTask} from "../actions";
import { positionToNum } from "./matrix";

const Container = styled.div`
  box-shadow: 0px 2px 7px 2px rgba(100, 100, 100, 0.1);
  padding: 0px 5px;
  margin: 5px;
  height: 30px;
  border-radius: 3px;
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
`;

const ColorMarker = styled.div`
  width: 8px;
  height: 20px;
  margin-right: 10px;
  background-color: ${props => props.color};
`;

const Task = (props) => {
    const matrixId = useParams().matrix;
    const dispatch = useDispatch();

    const [checkboxClass, setCheckboxClass] = useState(props.task.status === 5 ? 'fas fa-check' : 'far fa-square');

    const [{isDragging}, drag] = useDrag({
        item: {
            type: 'TASK',
            task: props.task
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const openTaskModal = (e) => {
        if (e.target.tagName !== 'I') {
            dispatch(openModal('TASK_UPDATE', {task: props.task, title: 'Update task'}));
        }
    };

    const setTaskAsDone = () => {
        if (props.task.status !== 5) {
            dispatch(updateTask(matrixId, props.task.id, {status: positionToNum.done}))
        }
    };

    const openDeleteConfirmation = () => {
        if (window.confirm("Are you sure you wish to delete this task?")){
            return dispatch(deleteTask(matrixId, props.task.id));
        }
    };

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}
            onClick={openTaskModal}
        >
            <Container>
                <ColorMarker color={props.task.category_color} />
                <div
                    onClick={setTaskAsDone}
                >
                    <i className={checkboxClass}/>
                </div>
                <span>{props.task.name}</span>
                <div
                    onClick={openDeleteConfirmation}
                >
                    <i className="fas fa-times"></i>
                </div>
            </Container>
        </div>
    );
};

export default Task;
