import { Check, Trash } from 'phosphor-react';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.tsx';

export interface Task {
    id: string
    description: string
    done: boolean
}

export interface ITask {
    task: Task
}

export function Task({task}: ITask) {
    const { tasks, setUpdatedTaks } = useContext(TaskContext)

    function handleDoneClick(id: string) {
        const taskIndex = tasks.findIndex((task) => task.id === id)
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done

        setUpdatedTaks(updatedTasks)
    }

    function handleRemoveTask(id: string) {
        let updatedTasks = [...tasks]
        updatedTasks = updatedTasks.filter(task => task.id !== id)

        setUpdatedTaks(updatedTasks)
    }

    return (
        <div className={`
            flex justify-between items-center bg-gray-500 hover:bg-gray-400 border-[1px] border-gray-400 rounded-[16px] p-[1rem] text-gray-100 text-[0.875rem]
            ${task.done && 'line-through text-gray-300'}
        `}>
            <div className='flex items-center flex-1'>
                <div
                    className={`flex items-center justify-center w-[18px] h-[18px] rounded-[50%] mr-[10px] ${task.done ? 'bg-purple-dark' : 'border-[2px] border-blue'}`}
                    onClick={() => handleDoneClick(task.id)}
                >
                    {task.done && <Check width={12} color='#fff' />}
                </div>
                <span className='max-w-[90%]'>
                    {task.description}
                </span>
            </div>

            <Trash
                className='opacity-70 hover:opacity-100'
                color='#b7b7b7'
                size={20}
                onClick={() => handleRemoveTask(task.id)}
            />
        </div>
    )
}