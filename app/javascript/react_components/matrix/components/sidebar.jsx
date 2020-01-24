import React from 'react';
import styled from 'styled-components';
import colors from "../../../stylesheets/colors";
import CreateTaskButton from "./create_task_button";
import SearchButton from "./search_buttons";

const Container = styled.div`
  background-color: ${props => colors.primaryColor};
  height: 100%;
  position: fixed;
  z-index: 5;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
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
            <SearchButton/>
        </Container>
    );
};

export default Sidebar;
