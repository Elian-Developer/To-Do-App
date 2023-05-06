import React, {useState} from "react";
import TaskForm from './taskForm'
import '../css/listTask.css'
import Task from './task'

const ListTask = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) =>{
        if(task.text.trim()){
            task.text = task.text.trim();

         const tasksUpdated = [task, ...tasks];
         setTasks(tasksUpdated);
        }
    }

    const deleteTask = (id) => {
        const taskUpdated = tasks.filter(task => task.id !== id);
        setTasks(taskUpdated)
    }

    const completeTask = (id) => {
        const taskUpdated = tasks.map(task => {
            if(task.id === id) {
                task.complete = !task.complete;
            }
            return task
        });
        setTasks(taskUpdated);
    }

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className="task-list-container">
                {
                    tasks.map((task) => 
                        <Task 
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            complete={task.complete}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListTask;