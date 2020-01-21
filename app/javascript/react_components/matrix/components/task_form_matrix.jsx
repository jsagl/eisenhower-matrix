import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {positionToNum} from "./matrix";

import TaskFormQuadrant from "./task_form_quadrant";

const Container = styled.div`
  padding: 2px;
  width: 100%;
  border-radius: 3px;
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
                <TaskFormQuadrant content={'Do'} setStatus={props.setStatus}  taskStatus={props.taskStatus} quadrantStatus={positionToNum.importantUrgent}/>
                <TaskFormQuadrant content={'Decide'} setStatus={props.setStatus}  taskStatus={props.taskStatus} quadrantStatus={positionToNum.importantNotUrgent}/>
            </Row>
            <Row className="row">
                <TaskFormQuadrant content={'Delegate'} setStatus={props.setStatus}  taskStatus={props.taskStatus} quadrantStatus={positionToNum.notImportantUrgent}/>
                <TaskFormQuadrant content={'Delete'} setStatus={props.setStatus}  taskStatus={props.taskStatus} quadrantStatus={positionToNum.notImportantNotUrgent}/>
            </Row>
        </Container>
    );
};

export default TaskFormMatrix;
