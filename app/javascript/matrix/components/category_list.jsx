import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';

import Category from './category'

const CategoryList = () => {
    const categories = useSelector(state => state.categories);

    return (
        <div className="col-3 card">
            {
                categories.map((category) => {
                    return  <Category category={category} key={category.id} />
                })
            }
        </div>
    );
};

export default CategoryList;
