import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from "styled-components";
import SimpleBar from 'simplebar-react';

import Category from './category'
import {openCategoryModal} from "../actions";

const Container = styled.div`
  .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    background-color: #cacaca;
  }
  padding: 1px 0;
  margin: 15px 15px;
  background-color: white;
  width: 220px;
  border-radius: 3px;
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
`;

const List = styled(SimpleBar)`
  max-height: 180px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  margin-left: 5px;
  margin-top: 5px;
  line-height: 1;
  i {
    margin-left: 10px;
    font-size: 15px;
    color: #cccccc;
    transition: all .1s linear;
    &:hover {
      cursor: pointer;
      color: #b4b4b4;
  }
    
  }
`;

const CategoryList = () => {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openCategoryModal('CATEGORY_CREATION'));
    };

    return (
        <Container>
            <div>
                <Title>CATEGORIES <i className="fas fa-plus" onClick={handleClick}></i></Title>
                <List>
                    {
                        categories.map((category) => {
                            return  <Category category={category} key={category.id} />
                        })
                    }
                </List>
            </div>
        </Container>
    );
};

export default CategoryList;
