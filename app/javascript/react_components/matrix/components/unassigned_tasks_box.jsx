import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import {useDrop} from "react-dnd";
import styled from 'styled-components';
import SimpleBar from "simplebar-react";

import Task from './task'
import {updateTask} from "../actions";

const Container = styled.div`
  .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    background-color: #cacaca; 
  }
`;

const Card = styled.div`
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
  padding: 1px 0;
  margin: 15px 0;
  border-radius: 3px;
  background-color: rgba(250, 250, 250, 1);
  display: ${props => props.display}
`;

const TasksContainer = styled(SimpleBar)`
  max-height: 10vh;
  margin: 5px 0;
`;

const Title = styled.div`
  font-weight: bold;
  margin-left: 5px;
  margin-top: 5px;
  line-height: 1;
`;

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
        <Container
            ref={drop}
            className="col-6"
        >
            <Card display={tasks.length > 0 ? 'block' : 'none'}>
                <Title>TO ASSIGN</Title>
                <TasksContainer>
                    {
                        tasks.map((task) => {
                            return  <Task task={task} key={task.id} />
                        })
                    }
                </TasksContainer>
            </Card>
        </Container>
    );
};

export default UnassignedTasksBox;
