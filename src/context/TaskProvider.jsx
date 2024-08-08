// import { useContext } from "react";
// import { createContext } from "react";

// export const Task= createContext({



// })

// export const useTask=()=>{
//     return useContext(Task)
// }


// export const TaskProvider=Task.Provider



import { createContext, useContext, useEffect, useState } from 'react';
import { service } from '../app/config.js';
import { Await } from 'react-router-dom';
const TaskContext = createContext();


export const TaskProvider = ({children }) => {
    
    const [data,setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const fetchTask = async () => {
        setError(false);
        setLoading(true);
        try {
            const task = await service.getTasks();
            setLoading(false);
            return task.documents;
        } catch (error) {
            setError(true);
            setLoading(false);
            console.log(error.message);
        }
    };
    
    const addTask = async () => {
        try {
            await service.createTask({data});
            
        } catch (error) {
            console.log("task can't be added", error);
        }
    };
    
    const removeTask = async () => {};
    
    const updateTask = async () => {};
    
    
    return (
        <TaskContext.Provider value={{data,setData,error,setError,loading,setLoading,removeTask,updateTask,addTask,fetchTask}}>
            {children}
        </TaskContext.Provider>
    );
};
export const useTaskProvider = () =>useContext(TaskProvider)