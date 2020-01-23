import React from 'react';

const TaskFormRadioButton = (props) => {
    const formattedContent = (value) => {
        if (value === 15 || value === 30) {
            return `${value}min`
        } else if (value === 60 || value === 120) {
            return `${value / 60}h`
        } else {
            return `2h+`
        }
    };

    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio"
                   name="timeToComplete"
                   id={`ttc${props.value}`}
                   key={`ttc${props.value}`}
                   value={props.values}
                   checked={props.timeToComplete === props.value}
                   onChange={() => {props.setTimeToComplete(props.value)}}
            />
            <label className="form-check-label"
                   htmlFor={`ttc${props.value}`}
            >
                {formattedContent(props.value)}
            </label>
        </div>
    );
};

export default TaskFormRadioButton;
