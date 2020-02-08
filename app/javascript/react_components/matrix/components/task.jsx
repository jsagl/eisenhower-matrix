import React, {useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useDrag } from 'react-dnd'

import {openModal, deleteTask, updateTask} from "../actions";
import { positionToNum } from "./matrix";
import {TASK_UPDATE} from "../constants/constants";

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
  transition: all 0.1s linear;
  &:hover{
    background-color: rgba(252, 252, 252, 1)
  } 
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
  transition: all .1s linear;
  &:hover {
    color: #b4b4b4;
  }
`;

const DeleteCross = styled.div`
  color: #e3e3e3;
  transition: all .1s linear;
  &:hover {
    color: #b4b4b4;
  }
`;

const Content = styled.div`
  padding: 0;
  margin: 0 0 0 0;
  line-height: 1;
  position: relative;
  display: inline-block;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${props => props.strikethrough};
  
  @media (max-width: 1300px) {
    max-width: 150px;
  }
  
  @media (max-width: 1000px) {
    max-width: 100px;
  }
`;

const LeftSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const DueDate = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  min-width: 62px;
  text-align: center;
  font-size: 13px;
  border-radius: 3px;
  padding: 1px 7px;
  margin-right: 10px;
  visibility: ${props => props.visibility};
`;

const Duration = styled.div`
  color: #b7b7b7 ;
  font-size: 13px;
  border-radius: 3px;
  padding: 1px 7px;
  margin-right: 12px;
  min-width: 72.5px;
  text-align: right;
  visibility: ${props => props.visibility};
`;

const months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.'
];

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

    const openSharedModal = (e) => {
        if (e.target.tagName !== 'I') {
            dispatch(openModal(TASK_UPDATE, {task: props.task, title: 'Update task'}));
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

    const formatTimeToComplete = (min) => {
        switch (min) {
            case 30:
                return '<30min';
            case 60:
                return '<1h';
            case 120:
                return '<2h';
            case 180:
                return '2h+';
            default:
                return '<15min';
        }
    };

    const formatDate = (dateString) => {

        const date = new Date(dateString);
        const month = months[date.getMonth()];
        const day = date.getDate();

        const formattedDate = `${month} ${day}`;
        const numOfDaysBeforeDueDate = (date - new Date()) / (1000 * 60 * 60 * 24)

        if (numOfDaysBeforeDueDate < -1) {
            return 'Overdue'
        } else if (numOfDaysBeforeDueDate >= -1 && numOfDaysBeforeDueDate < 0) {
            return 'Today'
        } else if (numOfDaysBeforeDueDate >= 0 && numOfDaysBeforeDueDate < 1) {
            return 'Tomorr.';
        } else {
            return formattedDate
        }
    };

    const getColors = (dateString) => {
        if (dateString == null || dateString === '') { return ['white', 'white'] }

        const date = new Date(dateString);
        const remainingDays = Math.floor((date - new Date()) / 1000 / 60 / 60 / 24);
        let backgroundColor;
        let fontColor;

        if (remainingDays < -1) {
            backgroundColor = '#FFD6D4';
            fontColor = '#FF6961';
        } else if (remainingDays >= -1 && remainingDays < 1) {
            backgroundColor = '#FFE5B4';
            fontColor = '#FF7F00';
        }
        else if (remainingDays >= 1 && remainingDays <= 6) {
            backgroundColor = '#FDFD96';
            fontColor = '#FF8F00';
        } else {
            backgroundColor = '#D6FFD6';
            fontColor = '#47B747';
        }
        return [backgroundColor, fontColor]
    };


    const extraInfoVisibility = props.task.status === 5 ? 'hidden' : 'visible'

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}
            onClick={openSharedModal}
        >
            <Container>
                <LeftSubContainer>
                    <ColorMarker color={props.task.color} />
                    <Checkbox
                        onClick={setTaskAsDone}
                    >
                        <i className={checkboxClass}/>
                    </Checkbox>
                    <Content strikethrough={props.task.status === 5 ? 'line-through' : 'none'}>
                        {props.task.name}
                    </Content>
                </LeftSubContainer>

                <RightSubContainer>
                    <Duration
                        visibility={extraInfoVisibility}
                    >
                        {formatTimeToComplete(props.task.time_to_complete)}
                        <i className="fas fa-stopwatch ml-1"></i>
                    </Duration>
                    <DueDate
                        visibility={extraInfoVisibility}
                        backgroundColor={getColors(props.task.due_date)[0]}
                        fontColor={getColors(props.task.due_date)[1]}
                    >
                        {formatDate(props.task.due_date)}
                    </DueDate>
                    <DeleteCross
                        onClick={openDeleteConfirmation}
                    >
                        <i className="fas fa-times"></i>
                    </DeleteCross>

                </RightSubContainer>
            </Container>
        </div>
    );
};

export default Task;
