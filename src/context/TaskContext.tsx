import { createContext, ReactNode, useState } from 'react'
import { Task } from '../components/Task.tsx'

interface ITaskProvider {
    children: ReactNode
}

interface ITaskContext {
    tasks: Task[];
    setTasks: any;
}

export const TaskContext = createContext<ITaskContext>({ tasks: [], setTasks: null})

export const TaskProvider = ({children}: ITaskProvider) => {
    const [tasks, setTasks] = useState<Task[]>(
        JSON.parse(localStorage.getItem('taks') ?? '')
    )

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}