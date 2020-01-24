import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import {fetchTasks, searchTasks} from "../actions";

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

    return (
        <input
            type="text"
            className="form-control"
            id="search-field"
            key="search-field"
            name="searchInput"
            placeholder="Search"
            onChange={handleChange}
            value={searchInput}
        />
    );
};

export default SearchField;
