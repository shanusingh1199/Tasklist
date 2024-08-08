import { useContext, useEffect, useState } from 'react';
import { useTaskProvider } from '../../context/TaskProvider';
import TaskCard from './TaskCard';

function AllTask() {
    const { fetchTask, loading, error } = useTaskProvider();
    const [task,setTask]=useState([])
    useEffect(() => {
       const list= fetchTask();
       setTask(list)
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading tasks.</div>;
    }

    return (
        <div>
            <div className='flex flex-wrap'>
                {task.map((task, index) => (
                    <div key={index}>
                        <TaskCard {...task} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllTask;
