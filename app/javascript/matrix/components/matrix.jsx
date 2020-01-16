import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Quadrant from './quadrant';
import UnassignedTasksBox from "./unassigned_tasks_box";
import DoneTasksBox from "./doneTasksBox";
import CreateTaskButton from './create_task_button';
import NewTaskModal from './new_task_modal';
import {fetchTasks} from "../actions";

const Container = styled.div`
  margin: 50px 100px;
`;


const Matrix = () => {
    const dispatch = useDispatch();
    const matrixId = useParams().matrix;

    useEffect(()=> {
        dispatch(fetchTasks(matrixId));
    }, [dispatch]);

    return (
        <Container className="">
            <CreateTaskButton/>
            <div className="row justify-content-center">
                <UnassignedTasksBox tasksFilter={positionToNum.toBeAssigned}/>
            </div>
            <br/>
            <div className="row justify-content-center">
                <Quadrant tasksFilter={positionToNum.importantUrgent}/>
                <Quadrant tasksFilter={positionToNum.importantNotUrgent}/>
            </div>
            <div className="row justify-content-center">
                <Quadrant tasksFilter={positionToNum.notImportantUrgent}/>
                <Quadrant tasksFilter={positionToNum.notImportantNotUrgent}/>
            </div>
            <br/>
            <div className="row justify-content-center">
                <DoneTasksBox tasksFilter={positionToNum.done}/>
            </div>
            <NewTaskModal/>
        </Container>
    );
};

const positionToNum = {
    toBeAssigned: 0,
    importantUrgent: 1,
    importantNotUrgent: 2,
    notImportantUrgent: 3,
    notImportantNotUrgent: 4,
    done: 5
};

export default Matrix;
export { positionToNum };