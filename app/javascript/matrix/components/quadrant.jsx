import React from 'react';
// import styled from 'styled-components';

import Task from './task'

const Quadrant = () => {
    return (
        <div className="col-6 card">
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </div>
    );
};

export default Quadrant;
