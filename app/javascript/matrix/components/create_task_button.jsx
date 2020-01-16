import React, { useState } from 'react';

const CreateTaskButton = (props) => {
    return (
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#taskModal">
            Launch demo modal
        </button>
    );
};

export default CreateTaskButton;
