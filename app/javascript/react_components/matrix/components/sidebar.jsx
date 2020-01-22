import React from 'react';
import styled from 'styled-components';
import CategoryList from "./category_list";
import MatrixList from "./matrix_list";

const Container = styled.div`
  background-color: dodgerblue;
  height: 100%;
  position: fixed;
  z-index: 1;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const Brand = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  h2 {
    color: white;
    margin: 0;
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  margin-right: 10px;
`;

const Sidebar = (props) => {
    return (
        <Container>
            <Brand>
                <Logo></Logo>
                <h2>Brand</h2>
            </Brand>
            <MatrixList/>
            <CategoryList/>
        </Container>
    );
};

export default Sidebar;
