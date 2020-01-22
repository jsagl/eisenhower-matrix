import React from 'react';
import styled from 'styled-components';
import CategoryList from "./category_list";
import MatrixList from "./matrix_list";
import colors from "../../../stylesheets/colors";


const Container = styled.div`
  background-color: ${colors.secondaryColor};
  height: 100%;
  padding-top: 80px;
  position: fixed;
  z-index: 2;
  margin-left: 60px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-left: 1px solid #2071ce;
`;

const SideDrawer = (props) => {
    return (
        <Container>
            <MatrixList/>
            <CategoryList/>
        </Container>
    );
};

export default SideDrawer;
