import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import Quadrant from './quadrant';
import UnassignedTasksBox from "./unassigned_tasks_box";
import DoneTasksBox from "./done_tasks_box";
import {fetchCategories, fetchTasks} from "../actions";
import Sidebar from './sidebar'
import SideDrawer from './side_drawer'
import colors from "../../../stylesheets/colors";
import SharedModal from "./shared_modal";

const Container = styled.div`
  margin-left: ${props => props.marginLeft};
  padding: 0;
  flex-grow: 1;
  position: fixed;
  z-index: 3;
  width: ${props => props.width};
  background-color: white;
  border-left: 1px solid rgba(240, 240, 240, 1);
  transition: width 0.2s ease-in-out, margin-left 0.2s ease-in-out;
`;

const SubContainer = styled.div`
  position: relative;
  overflow: auto;
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
`;

const DrawerToggler = styled.div`
  position: relative;
  z-index: 4;
  top: 30px;
  left: -12px;
  width: 25px;
  height: 25px;
  padding: ${props => props.caretPadding};
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  color: white;
  background-color: ${colors.primaryColor};
  box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(248, 248, 248, 1);
    color: ${colors.primaryColor};
    border: 1px solid ${colors.primaryColor};
  }
`;

const Matrix = () => {
    const dispatch = useDispatch();
    const matrixId = useParams().matrix;
    const [offset, setOffset] = useState(217);
    const [togglerCaret, setTogglerCaret] = useState('fas fa-caret-right');
    const [caretPadding, setCaretPadding] = useState('0px 0px 0px 3px');

    const handleClick = () => {
        if (offset === 0) {
            setOffset(217);
            setTogglerCaret('fas fa-caret-right');
            setCaretPadding('0px 0px 0px 3px');
        }
        else {
            setOffset(0);
            setTogglerCaret('fas fa-caret-left');
            setCaretPadding('0px 3px 0px 0px');
        }
    };

    useEffect(()=> {
        dispatch(fetchCategories(matrixId));
        dispatch(fetchTasks(matrixId));
    }, [dispatch]);

    return (
        <DndProvider backend={Backend}>
            <div className="d-flex">
                <ReactTooltip effect={'solid'} place={'right'} delayShow={500}/>
                <Sidebar/>
                <SideDrawer/>
                <Container width={`calc(100% + ${offset - 290}px)`} marginLeft={`${290 - offset}px`}>
                    <DrawerToggler
                        onClick={handleClick}
                        caretPadding={caretPadding}
                    >
                        <i className={togglerCaret}></i>
                    </DrawerToggler>
                    <SubContainer>
                        <div className="row justify-content-center">
                            <UnassignedTasksBox tasksFilter={positionToNum.toBeAssigned}/>
                        </div>
                        <br/>
                        <div className="row justify-content-center">
                            <Quadrant title={'DO'} topLegend={'URGENT'} leftLegend={'IMPORTANT'} tasksFilter={positionToNum.importantUrgent}/>
                            <Quadrant title={'DECIDE'} topLegend={'NOT URGENT'} leftLegend={''} tasksFilter={positionToNum.importantNotUrgent}/>
                        </div>
                        <div className="row justify-content-center">
                            <Quadrant title={'DELEGATE'} topLegend={''} leftLegend={'NOT IMPORTANT'} tasksFilter={positionToNum.notImportantUrgent}/>
                            <Quadrant title={'DELETE'} topLegend={''} leftLegend={''} tasksFilter={positionToNum.notImportantNotUrgent}/>
                        </div>
                        <br/>
                        <div className="row justify-content-center">
                            <DoneTasksBox tasksFilter={positionToNum.done}/>
                        </div>
                        <SharedModal/>
                    </SubContainer>
                </Container>
            </div>
        </DndProvider>
    );
};

const positionToNum = {
    toBeAssigned: 0,
    importantUrgent: 1,
    importantNotUrgent: 2,
    notImportantUrgent: 3,
    notImportantNotUrgent: 4,
    done: 5
};

export default Matrix;
export { positionToNum };