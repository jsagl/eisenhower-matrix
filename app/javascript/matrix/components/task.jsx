import React, {useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useDrag } from 'react-dnd'

import {openTaskModal, updateTask, deleteTask} from "../actions";
import { positionToNum } from "./matrix";

const Container = styled.div`
  box-shadow: 0px 2px 7px 2px rgba(100, 100, 100, 0.1);
  padding: 0px 5px;
  margin: 5px;
  height: 30px;
  border-radius: 3px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ColorMarker = styled.div`
  min-width: 8px;
  min-height: 20px;
  margin-right: 10px;
  background-color: ${props => props.color};
  border-radius: 10px;
`;

const Checkbox = styled.div`
  color: #dadada;
  margin-right: 10px;
`;

const DeleteCross = styled.div`
  color: #e3e3e3;
`;

const Content = styled.div`
  padding: 0;
  margin: 0 0 0 42px;
  line-height: 1;
  position: absolute;
  display: inline-block;
  max-width: calc(60% - 42px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LeftSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

    const openModal = (e) => {
        if (e.target.tagName !== 'I') {
            dispatch(openTaskModal('TASK_UPDATE', {task: props.task, title: 'Update task'}));
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
            onClick={openModal}
        >
            <Container>
                <LeftSubContainer>
                    <ColorMarker color={props.task.color} />
                    <Checkbox
                        onClick={setTaskAsDone}
                    >
                        <i className={checkboxClass}/>
                    </Checkbox>
                    <Content>{props.task.name}</Content>
                </LeftSubContainer>
                <DeleteCross
                    onClick={openDeleteConfirmation}
                >
                    <i className="fas fa-times"></i>
                </DeleteCross>
            </Container>
        </div>
    );
};

export default Task;
