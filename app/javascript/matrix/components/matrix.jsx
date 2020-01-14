import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

import Quadrant from './quadrant';
import CreateTaskButton from './create_task_button';
import {fetchTasks} from "../actions";

const positionToNum = {
    toBeAssigned: 0,
    importantUrgent: 1,
    importantNotUrgent: 2,
    notImportantUrgent: 3,
    notImportantNotUrgent: 4,
    done: 5
};

const Matrix = () => {
    const dispatch = useDispatch();
    const matrixId = useParams().matrix;

    useEffect(()=> {
        dispatch(fetchTasks(matrixId));
    }, [dispatch]);

    return (
        <div>
            <CreateTaskButton/>
            <div className="row justify-content-center">
                <Quadrant tasksFilter={positionToNum.toBeAssigned}/>
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
                <Quadrant tasksFilter={positionToNum.done}/>
            </div>
        </div>
    );
};

export default Matrix;
