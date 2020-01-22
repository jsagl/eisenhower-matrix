import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import styled from "styled-components";
import colors from "../../../stylesheets/colors";
import SimpleBar from 'simplebar-react';

import Category from './category'
import {fetchCategories, fetchMatrices, fetchTasks, openCategoryModal} from "../actions";

const Container = styled.div`
  .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    background-color: #cacaca;
  }
  padding: 6px 0 1px 0;
  margin: 15px 15px;
  background-color: white;
  width: 220px;
  border-radius: 3px;
  border-top: 8px solid ${colors.complementaryColor};
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
  display: ${props => props.display};
`;

const List = styled(SimpleBar)`
  max-height: 180px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 5px 0 5px 5px;
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

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;

`;

const MatrixName = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  i {
    width: 8px;
    margin-right: 10px;
    font-size: 14px;
    color: ${colors.secondaryColor}
  }
`;

const MatrixList = (props) => {
    const matrices = useSelector(state => state.matrices);
    const dispatch = useDispatch();

    const [currentMatrix, setCurrentMatrix] = useState(useParams().matrix);

    useEffect(()=> {
        dispatch(fetchMatrices());
    }, []);

    const handleClick = (matrixId) => {
        setCurrentMatrix(matrixId);
        dispatch(fetchTasks(matrixId));
        dispatch(fetchCategories(matrixId));
    };

    return (
        <Container display={props.display}>
            <div>
                <Title>MATRICES</Title>
                <List>
                    {
                        matrices.map((matrix) => {
                            return (
                                <MatrixName key={matrix.id}>
                                    <i className="fas fa-hashtag"></i>
                                    <StyledLink
                                        to={`${matrix.id}`}
                                        onClick={() => handleClick(matrix.id)}
                                    >
                                        {matrix.name}
                                    </StyledLink>
                                </MatrixName>
                            )
                        })
                    }
                </List>
            </div>
        </Container>
    );
};

export default MatrixList;
