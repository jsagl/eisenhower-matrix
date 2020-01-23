import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import styled from "styled-components";
import colors from "../../../stylesheets/colors";
import SimpleBar from 'simplebar-react';

import {fetchCategories, fetchMatrices, fetchTasks} from "../actions";

const Container = styled.div`
  .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    background-color: #cacaca;
  }
  padding: 3px 0 1px 0;
  margin: 15px 15px;
  background-color: white;
  width: 220px;
  border-radius: 3px;
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
  display: ${props => props.display};
`;

const List = styled(SimpleBar)`
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
  color: ${props => props.color};
  text-decoration: none;
  cursor: pointer;
  font-weight: ${props => props.fontWeight};
  &:hover {
    color: ${colors.secondaryColor};
    text-decoration: none;
  }
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
    const [selectedMatrix, setSelectedMatrix] = useState(parseInt(useParams().matrix, 10));
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchMatrices());
    }, [dispatch]);

    const handleClick = (matrixId) => {
        setSelectedMatrix(matrixId);
        dispatch(fetchTasks(matrixId));
        dispatch(fetchCategories(matrixId));
    };

    return (
        <Container>
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
                                        fontWeight={matrix.id === selectedMatrix ? 'bold' : 'normal'}
                                        color={matrix.id === selectedMatrix ? `${colors.secondaryColor}` : 'black'}
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
