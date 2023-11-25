import { PlusCircle } from 'phosphor-react'
import { FormEvent, useContext } from 'react'
import { Task } from './Task.tsx'
import { TaskContext } from '../context/TaskContext.tsx'
import { v4 as uuidv4 } from 'uuid'

export function SearchArea() {
    const { tasks, setUpdatedTaks } = useContext(TaskContext)

    function handleFormSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const newTask: Task = {
            id: uuidv4(),
            description: String(Object.fromEntries(new FormData(event.currentTarget)).task),
            done: false
        };

        (event.target as HTMLFormElement).task.value = ''

        const tasksUpdated = [...tasks, newTask]
        setUpdatedTaks(tasksUpdated)
    }

    return (
        <form
            className='mt-[-28px] flex gap-[0.5rem] w-full'
            onSubmit={e => handleFormSubmit(e)}
        >
            <input
                name="task"
                id="task"
                placeholder='Adicione uma nova tarefa'
                className='text-white border-gray-700 border-[1px] bg-gray-400 rounded-[8px] h-[54px] p-[16px] w-full outline-blue-dark'
            />
            <button type='submit' className='flex items-center justify-center h-[54px] px-[16px] bg-blue hover:bg-blue-dark rounded-[8px] transition-colors'>
                <span className='text-white'>Criar</span>
                <PlusCircle size={16} color='#fff' className='ml-[0.5rem]' />
            </button>
        </form>
    )
}