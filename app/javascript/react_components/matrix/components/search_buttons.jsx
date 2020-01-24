import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import colors from "../../../stylesheets/colors.js"

import { openModal } from '../actions/index';
import SearchField from "./search_field";

const Container = styled.div`
  margin: 20px 10px;
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
  width: 40px;
  height: 40px;
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

const SearchButtons = (props) => {
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

    const clearFilters = () => {

    }

    return (
        <Container>
            <Drawer width={drawerWidth} id='search-drawer'>
                <SearchField setDrawerWidth={setDrawerWidth} setBtnBackgroundColor={setBtnBackgroundColor}/>
            </Drawer>
            <Button type="button" id="search-btn" onClick={handleClick} backgroundColor={btnBackgroundColor}>
                <i className="fas fa-search"></i>
            </Button>
            <Button type="button" id="clear-filters-btn" onClick={clearFilters}>
                <i className="fas fa-times"></i>
            </Button>
        </Container>
    );
};

export default SearchButtons