import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import colors from "../../../stylesheets/colors.js";
import {useParams} from 'react-router-dom';

import {fetchTasks, openModal, searchTasks} from '../actions/index';

const Container = styled.div`
`;

const Drawer = styled.div`
  position: fixed;
  z-index: 6;
  left: 61px;
  margin-top: -5px;
  background-color: ${colors.primaryColor};
  height: 50px;
  width: ${props => props.width};
  display: flex;
  align-items: center;
  transition: all 0.1s linear;
  overflow: hidden;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const SearchButton = styled.button`
  background-color: ${props => props.backgroundColor};
  margin: 20px 10px;
  width: 40px;
  height: 40px;
  border: none;
  padding-top: 1px;
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

const ClearButton = styled.button`
  background-color: ${colors.primaryColor};
  margin: 20px 10px;
  width: 40px;
  height: 40px;
  border: none;
  padding-top: 1px;
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

const Field = styled.input`
  margin: 0px 5px;
`;

const SearchButtons = (props) => {
    const matrixId = useParams().matrix;
    const dispatch = useDispatch();
    const [drawerWidth, setDrawerWidth] = useState('0px');
    const [btnBackgroundColor, setBtnBackgroundColor] = useState(colors.primaryColor);

    const handleClick = () => {
        if (drawerWidth === '0px') {
            setDrawerWidth('200px');
            setBtnBackgroundColor(colors.secondaryColor);
            document.getElementById('search-field').focus()
        } else {
            setDrawerWidth('0px');
            setBtnBackgroundColor(colors.primaryColor);
        }
    };

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
            setDrawerWidth('0px');
            setBtnBackgroundColor(colors.primaryColor);
        }
    };

    const handleBlur = () => {
        setDrawerWidth('0px');
        setBtnBackgroundColor(colors.primaryColor);
    };

    const clearFilters = () => {
        if (searchInput !== '') {
            setSearchInput('');
            dispatch(fetchTasks(matrixId));
        }
    };

    return (
        <Container>
            <Drawer width={drawerWidth} id='search-drawer'>
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
            </Drawer>

            <SearchButton type="button" id="search-btn" onClick={handleClick} backgroundColor={btnBackgroundColor}>
                <i className="fas fa-search"></i>
            </SearchButton>

            <ClearButton type="button" id="clear-filters-btn" onClick={clearFilters}>
                <i className="fas fa-times"></i>
            </ClearButton>
        </Container>
    );
};

export default SearchButtons