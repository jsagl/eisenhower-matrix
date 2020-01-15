import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display: ${props => props.display};
`;

const NewTaskForm = (props) => {
    let modalDisplay = props.display;

    const closeModal = () => {
        const modal = document.getElementById('new-task-modal');

        if (modal && modalDisplay === 'block') {
            props.setDisplay('none');
        }
    };

    return (
        <Modal id="new-task-modal" display={modalDisplay} className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create a new task</h5>
                        <button type="button" className="close" aria-label="Close" onClick={()=>{closeModal()}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="task-name-field"
                                    key="task-name-field"
                                    placeholder="Task name"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="task-description-field"
                                    key="task-description-field"
                                    placeholder="Task description"
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    id="task-status-field">
                                    <option>Unassigned</option>
                                    <option>Urgent & Important</option>
                                    <option>Urgent & Not important</option>
                                    <option>Not Urgent & Important</option>
                                    <option>Not Urgent & Not Important</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default NewTaskForm;
