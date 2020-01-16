import React from 'react';
import NewTaskForm from './new_task_form';

const TaskModal = () => {
    const dismissModal = () => document.getElementById('closeNewTaskModal').click();

    return (
        <div className="modal fade" id="taskModal" tabIndex="-1" role="dialog" aria-labelledby="taskModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="taskModalLabel">Modal title</h5>
                        <button id="closeNewTaskModal" type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <NewTaskForm dismissModal={dismissModal}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;