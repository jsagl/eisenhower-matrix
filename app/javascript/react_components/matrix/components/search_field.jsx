import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import {fetchTasks, searchTasks} from "../actions";
import styled from "styled-components";
import colors from "../../../stylesheets/colors";

const Field = styled.input`
  margin: 0px 5px;
`;

const SearchField = (props) => {
    const matrixId = useParams().matrix;
    const dispatch = useDispatch();

    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value === '') {
            dispatch(fetchTasks(matrixId));
        } else {
            dispatch(searchTasks(matrixId, e.target.value));
        }
    };

    const handleEscapeEnter = (e) => {
        if (e.keyCode === 27 || e.keyCode === 13) {
            props.setDrawerWidth('0px');
            props.setBtnBackgroundColor(colors.primaryColor);
        }
    };

    const handleBlur = () => {
        props.setDrawerWidth('0px');
        props.setBtnBackgroundColor(colors.primaryColor);
    };

    return (
        <Field
            type="text"
            className="form-control"
            id="search-field"
            key="search-field"
            name="searchInput"
            placeholder="Search"
            onChange={handleChange}
            onKeyDown={handleEscapeEnter}
            onBlur={handleBlur}
            value={searchInput}
        />
    );
};

export default SearchField;
