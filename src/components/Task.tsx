import { Check } from 'phosphor-react';

export interface Task {
    description: string
    done: boolean
}

export interface ITask {
    task: Task
}

export function Task({task}: ITask) {
    return (
        <div className='flex items-center bg-gray-500 hover:bg-gray-400 border-[1px] border-gray-400 rounded-[16px] p-[1rem] text-gray-100 text-[0.875rem] transition-colors'>
            <div className={`flex items-center justify-center w-[18px] h-[18px] rounded-[50%] mr-[10px] ${task.done ? 'bg-purple-dark' : 'border-[2px] border-blue'}`}>
                {task.done && <Check width={12} color='#fff' />}
            </div>
            {task.description}
        </div>
    )
}