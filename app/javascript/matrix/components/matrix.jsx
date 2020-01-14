import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

import Quadrant from './quadrant';
import {fetchTasks} from "../actions";

const Matrix = () => {
    const tasks = useSelector(state => state.tasks);

    const dispatch = useDispatch();

    const matrixId = useParams().matrix;

    useEffect(()=> {
        dispatch(fetchTasks(matrixId));
    }, [dispatch]);

    return (
        <div>
            <div className="row justify-content-center">
                <Quadrant/>
            </div>
            <br/>
            <div className="row justify-content-center">
                <Quadrant/>
                <Quadrant/>
            </div>
            <div className="row justify-content-center">
                <Quadrant/>
                <Quadrant/>
            </div>
            <br/>
            <div className="row justify-content-center">
                <Quadrant/>
            </div>
        </div>
    );
};

export default Matrix;
