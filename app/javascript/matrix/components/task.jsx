import React, {useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";

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

    const handleChange = (e) => {
        setStatus(e.target.value);
        dispatch(updateTask(matrixId, props.task.id, {status: e.target.value}))
    };

    return (
        <Container>
            <p>{props.task.name}</p>
            <form action="">
                <div className="form-group">
                    <select
                        name="moveTaskSelect"
                        className="form-control"
                        id={`move-task-field-${props.task.id}`}
                        onChange={handleChange}
                        value={status}
                    >
                        <option value={positionToNum.toBeAssigned}>Unassigned</option>
                        <option value={positionToNum.importantUrgent}>Important & Urgent</option>
                        <option value={positionToNum.importantNotUrgent}>Important & Not Urgent</option>
                        <option value={positionToNum.notImportantUrgent}>Not Important & Urgent</option>
                        <option value={positionToNum.notImportantNotUrgent}>Not Important & Not Urgent</option>
                    </select>
                </div>
            </form>
        </Container>
    );
};

export default Task;
