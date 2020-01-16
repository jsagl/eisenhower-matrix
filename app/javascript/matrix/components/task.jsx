import React, {useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useDrag } from 'react-dnd'

import { updateTask } from "../actions";
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
`;

const Task = (props) => {
    const initialStatus = props.task.status;
    const [status, setStatus] = useState(initialStatus);
    const matrixId = useParams().matrix;
    const dispatch = useDispatch();

    const [{isDragging}, drag] = useDrag({
        item: {
            type: 'TASK',
            task: props.task
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}
        >
            <Container>
                <p>{props.task.name}</p>
            </Container>
        </div>
    );
};

export default Task;
