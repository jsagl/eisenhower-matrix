import React from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import colors from "../../../stylesheets/colors.js"

import { openModal } from '../actions/index';

const Button = styled.button`
  background-color: ${colors.primaryColor};
  width: 40px;
  height: 40px;
  margin: 20px 10px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  outline: none;
  transition: all .05s linear;
  &:focus {
   outline: none;
   border: none;
  }
  &:hover {
    background-color: ${colors.secondaryColor};
  }
`;

const CreateTaskButton = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openModal('TASK_CREATION', {title: 'Create task'}));
    };

    return (
        <Button type="button" onClick={handleClick}>
            <i className="fas fa-plus"></i>
        </Button>
    );
};

export default CreateTaskButton