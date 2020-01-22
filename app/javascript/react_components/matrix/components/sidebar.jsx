import React from 'react';
import styled from 'styled-components';
import colors from "../../../stylesheets/colors";
import CreateTaskButton from "./create_task_button";

const Container = styled.div`
  background-color: ${props => colors.primaryColor};
  height: 100%;
  position: fixed;
  z-index: 1;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-right: 1px solid darkblue;
`;

const Brand = styled.div`
  margin: 20px 10px;
`;

const Logo = styled.img`
  width: 40px;
  margin-right: 10px;
 `;

const LogoUrl = require('../../../../assets/images/logo_transparent_cropped2.png');

const Sidebar = (props) => {
    return (
        <Container>
            <Brand>
                <Logo src={LogoUrl} alt=""/>
            </Brand>
            <CreateTaskButton/>
        </Container>
    );
};

export default Sidebar;
