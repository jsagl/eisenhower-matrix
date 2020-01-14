import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  visibility: ${props => props.visibility};
  float: right;
`;

const NewTaskForm = (props) => {

    return (
        <Modal className="card" id="new-task-modal" visibility={props.visibility}>
            <form>
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
                <button type="submit" className="btn btn-primary">Create</button>
            </form>

            {/*<form className="form-inline" onSubmit={handleSubmit}>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        ref={inputRef}*/}
            {/*        name="message"*/}
            {/*        key="hello"*/}
            {/*        className="form-control"*/}
            {/*        value={newMessage}*/}
            {/*        onChange={handleChange}*/}
            {/*    />*/}
            {/*    <button type="submit" className="btn btn-primary">*/}
            {/*        Send*/}
            {/*    </button>*/}
            {/*</form>*/}
        </Modal>
    );
};

export default NewTaskForm;
