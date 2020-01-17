import React from 'react';
import styled from 'styled-components';
import {positionToNum} from "./matrix";

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

const Quadrant = styled.div`
  //border: 1px solid black;
  //background-color: white;
  width: 100%;
  padding: 0px;
  div {
    margin: 3px;
    cursor: pointer;
  }
`;

const TaskFormMatrix = (props) => {
    const handleClick = (e) => {
      document.querySelectorAll('.form-matrix-quadrant').forEach((quadrant) => {
         quadrant.classList.remove('selected-quadrant');
      });

      e.target.classList.toggle('selected-quadrant');
      props.setStatus(e.target.dataset.status)

    };

    return (
        <Container>
            <Row className="row">
                <Quadrant className="col-6">
                    <div className='card form-matrix-quadrant' onClick={handleClick} data-status={positionToNum.importantUrgent}>Important & Urgent</div>
                </Quadrant>
                <Quadrant className="col-6">
                    <div className='card form-matrix-quadrant' onClick={handleClick} data-status={positionToNum.importantNotUrgent}>Important & Not Urgent</div>
                </Quadrant>
            </Row>
            <Row className="row">
                <Quadrant className="col-6">
                    <div className='card form-matrix-quadrant' onClick={handleClick} data-status={positionToNum.notImportantUrgent}>Not Important & Urgent</div>
                </Quadrant>
                <Quadrant className="col-6">
                    <div className='card form-matrix-quadrant' onClick={handleClick} data-status={positionToNum.notImportantNotUrgent}>Not Important & Not Urgent</div>
                </Quadrant>
            </Row>
        </Container>
    );
};

export default TaskFormMatrix;
