import React from 'react';

const Task = props => {
    
    let i = props.i;
    let title = props.task.title;
    let className = props.task.done ? 'done' : '';
    
    return (
        <li>
            <p className={className}>{`${i + 1}. ${title}`}</p>
            <button className={className} onClick={props.doneTask}>&#10004;</button>
            <button className={className} onClick={props.deleteTask}>&#10006;</button>
        </li>
    );
}

export default Task;