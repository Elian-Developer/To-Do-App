import React, { useState } from "react";
import '../css/taskForm.css'
import { v4 as uuidv4 } from 'uuid'

const Form = (props) => {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSend = e => {
        e.preventDefault();
    
        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false
        }

        props.onSubmit(newTask);
    }

    return(
        <form className="task-form" onSubmit={handleSend}>
            <input
                className='task-input'
                type='text'
                placeholder='Type a Task'
                name="text"
                onChange={handleChange}
            />
            <button className="task-button">
                Add Task
            </button>
        </form>
    );
}

export default Form;