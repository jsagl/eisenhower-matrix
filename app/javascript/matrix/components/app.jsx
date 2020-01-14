import React from 'react';
// import styled from 'styled-components';

import Quadrant from './quadrant';

const App = () => {
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

export default App;
