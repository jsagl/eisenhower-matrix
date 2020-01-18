import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {positionToNum} from "./matrix";

const Container = styled.div`
  //border: 1px solid black;
  //background-color: white;
  width: 100%;
  padding: 0px;
  .selected-quadrant {
    background-color: lightgreen;
  }
`;

const Quadrant = styled.div`
  margin: 3px;
  cursor: pointer;
`;

const TaskFormQuadrant = (props) => {
    const [colorClass, setColorClass] = useState('');

    useEffect(() => {
        setColorClass(props.taskStatus === props.quadrantStatus ? 'selected-quadrant' : '');
    });

    const smallQuadrants = document.querySelectorAll('.form-matrix-quadrant');

    const handleClick = (e) => {
        smallQuadrants.forEach((quadrant) => {
            quadrant.classList.remove('selected-quadrant');
        });
        //
        e.target.classList.toggle('selected-quadrant');
        props.setStatus(props.quadrantStatus)
    };

    return (
        <Container className="col-6">
            <Quadrant className={`card form-matrix-quadrant ${colorClass}`}
                onClick={handleClick}
                taskStatus={props.taskStatus}
                quadrantStatus={props.quadrantStatus}
            >
                {props.content}
            </Quadrant>
        </Container>
    );
};

export default TaskFormQuadrant;
