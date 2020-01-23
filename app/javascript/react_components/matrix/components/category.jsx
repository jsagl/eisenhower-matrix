import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";

import {openModal} from "../actions";
import {CATEGORY_UPDATE} from "../constants/constants";

const Container = styled.div`
  margin: 0 5px;
  height: 30px;
  border-radius: 3px;
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

const UpdatePen = styled.div`
  margin-left: 10px;
  font-size: 14px;
  color: #e3e3e3;
  transition: all .1s linear;
  &:hover {
    color: #b4b4b4;
  }
`;

const Category = (props) => {
    const matrixId = useParams().matrix;
    const dispatch = useDispatch();

    const openSharedModal = (e) => {
        dispatch(openModal(CATEGORY_UPDATE, {title: 'Update category', category: props.category}));
    };

    return (
        <div onClick={openSharedModal}>
            <Container>
                <ColorMarker color={props.category.color} />
                <span>{props.category.name}</span>
                <UpdatePen>
                    <i className="fas fa-pen"></i>
                </UpdatePen>
            </Container>
        </div>
    );
};

export default Category;
