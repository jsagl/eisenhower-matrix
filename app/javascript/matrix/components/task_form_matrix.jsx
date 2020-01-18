import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {positionToNum} from "./matrix";

import TaskFormQuadrant from "./task_form_quadrant";

const Container = styled.div`
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
  padding: 2px;
  width: 100%;
  border-radius: 3px;
  background-color: rgba(250, 250, 250, 1)
`;

const Row = styled.div`
  padding: 0px;
  width: 100%;
  margin: 0;
`;

const TaskFormMatrix = (props) => {
    return (
        <Container>
            <Row className="row">
                <TaskFormQuadrant content={'Important & Urgent'} setStatus={props.setStatus}  taskStatus={props.taskStatus} quadrantStatus={positionToNum.importantUrgent}/>
                <TaskFormQuadrant content={'Important & Not Urgent'} setStatus={props.setStatus}  taskStatus={props.taskStatus} quadrantStatus={positionToNum.importantNotUrgent}/>
            </Row>
            <Row className="row">
                <TaskFormQuadrant content={'Not Important & Urgent'} setStatus={props.setStatus}  taskStatus={props.taskStatus} quadrantStatus={positionToNum.notImportantUrgent}/>
                <TaskFormQuadrant content={'Not Important & Not Urgent'} setStatus={props.setStatus}  taskStatus={props.taskStatus} quadrantStatus={positionToNum.notImportantNotUrgent}/>
            </Row>
        </Container>
    );
};

export default TaskFormMatrix;
