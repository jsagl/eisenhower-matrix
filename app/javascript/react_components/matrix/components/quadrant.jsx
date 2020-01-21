import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

import Task from './task'
import { updateTask } from "../actions";

const TopQuadrantLegend = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  color: #d1d1d1;
  font-weight: bold;
`;

const LeftQuadrantLegend = styled.div`
  position: absolute;
  left: ${props => props.translateValue};
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  color: #d1d1d1;
  font-weight: bold;
`;

const Card = styled.div`
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
  padding: 1px 0;
  margin: 15px 0;
  border-radius: 3px;
  background-color: rgba(250, 250, 250, 1);
  .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    background-color: #cacaca; 
  }
`;

const TasksContainer = styled(SimpleBar)`
  height: calc(30vh - 20px);
  margin: 5px 0;
`;

const Title = styled.div`
  font-weight: bold;
  margin-left: 5px;
  margin-top: 5px;
  line-height: 1;
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

    const translateValue = props.topLegend === '' ? '-68px' : '-50px';

    return (
        <div
            className="col-6"
            ref={drop}
        >
            <TopQuadrantLegend>{props.topLegend}</TopQuadrantLegend>
            <LeftQuadrantLegend translateValue={translateValue}>{props.leftLegend}</LeftQuadrantLegend>
            <Card>
                <Title>{props.title}</Title>
                <TasksContainer>
                    {
                        tasks.map((task) => {
                           return  <Task task={task} key={task.id} />
                        })
                    }
                </TasksContainer>
            </Card>
        </div>
    );
};

export default Quadrant;
