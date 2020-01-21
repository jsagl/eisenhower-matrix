import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";

import {openCategoryModal} from "../actions";

const Container = styled.div`
  box-shadow: 0px 2px 7px 2px rgba(100, 100, 100, 0.1);
  padding: 0px 5px;
  margin: 5px;
  height: 30px;
  border-radius: 3px;
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
`;

const ColorMarker = styled.div`
  width: 8px;
  height: 20px;
  margin-right: 10px;
  background-color: ${props => props.color};
`;

const Category = (props) => {
    const matrixId = useParams().matrix;
    const dispatch = useDispatch();

    const openModal = (e) => {
        if (e.target.tagName !== 'I') {
            dispatch(openCategoryModal('CATEGORY_UPDATE', {title: 'Update category', category: props.category}));
        }
    };

    return (
        <div onClick={openModal}>
            <Container>
                <ColorMarker color={props.category.color} />
                <span>{props.category.name}</span>
            </Container>
        </div>
    );
};

export default Category;
