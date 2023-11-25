import { createContext, ReactNode, useState } from 'react'
import { Task } from '../components/Task.tsx'

interface ITaskProvider {
    children: ReactNode
}

interface ITaskContext {
    tasks: Task[]
    setUpdatedTaks: (updatedTasks: Task[]) => void
}

export const TaskContext = createContext<ITaskContext>({ tasks: [], setUpdatedTaks: () => {}})

export const TaskProvider = ({children}: ITaskProvider) => {
    const [tasks, setTasks] = useState<Task[]>(
        JSON.parse(localStorage.getItem('taks') ?? '[]')
    )

    function setUpdatedTaks(updatedTasks: Task[]) {
        updatedTasks.sort((a,b) => Number(a.done) - Number(b.done))

        setTasks(updatedTasks)
        localStorage.setItem('taks', JSON.stringify(updatedTasks))
    }

    return (
        <TaskContext.Provider value={{tasks, setUpdatedTaks}}>
            {children}
        </TaskContext.Provider>
    )
}