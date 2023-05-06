import React from "react";
import '../css/task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'


const Task = ({id, text, complete, completeTask, deleteTask }) => {
    return (
      <div className={complete ? 'task-container complete' : 'task-container'}>
        <div className='task-text' onClick={() => completeTask(id)}>
        {text}
        </div>
        <div className='task-icon' onClick={() => deleteTask(id)}>
          <AiOutlineCloseCircle size='25'/>
        </div>
      </div>
    );
}

export default Task