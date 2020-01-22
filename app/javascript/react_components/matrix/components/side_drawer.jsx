import React, {useState} from 'react';
import styled from 'styled-components';
import CategoryList from "./category_list";
import MatrixList from "./matrix_list";
import colors from "../../../stylesheets/colors";


const Container = styled.div`
  background-color: ${colors.secondaryColor};
  height: 100%;
  padding-top: 80px;
  position: fixed;
  z-index: 2;
  margin-left: 60px;
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-right: 1px solid ${colors.primaryColor};
`;

const DrawerToggler = styled.div`
  position: relative;
  top: -40px;
  left: ${props => props.togglerOffset};
  width: 30px;
  height: 30px;
  padding-right: 3px;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  color: white;
  background-color: ${colors.primaryColor};
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: rgba(248, 248, 248, 1);
    color: ${colors.primaryColor};
    border: 1px solid ${colors.primaryColor};
  }
`;


const SideDrawer = (props) => {
    const [offset, setOffset] = useState(0);
    const [listsDisplay, setListsDisplay] = useState('block');

    const handleClick = () => {
      if (offset === 0) {
          setOffset(233);
          setListsDisplay('none');

      }
      else {
          setOffset(0)
          setListsDisplay('block');
      }
    };

    return (
        <Container width={`${250 - offset}px`}>
            <DrawerToggler
                onClick={handleClick}
                togglerOffset={`${234 - offset}px`}
            ><i className="fas fa-caret-left"></i></DrawerToggler>
            <MatrixList display={listsDisplay}/>
            <CategoryList display={listsDisplay}/>
        </Container>
    );
};

export default SideDrawer;
