import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
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


    const handleClick = (e) => {
        const smallQuadrants = document.querySelectorAll('.form-matrix-quadrant');

        smallQuadrants.forEach((quadrant) => {
            quadrant.classList.remove('selected-quadrant');
        });

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
