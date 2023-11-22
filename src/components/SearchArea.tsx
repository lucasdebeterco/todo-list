import { PlusCircle } from 'phosphor-react';
import { FormEvent, useContext } from 'react';
import { Task } from './Task.tsx';
import { TaskContext } from '../context/TaskContext.tsx';

export function SearchArea() {
    const { setTasks } = useContext(TaskContext)

    function handleFormSubmit(event: FormEvent<HTMLFormElement>){
       event.preventDefault()

       const newTask: Task = {
           description: String(Object.fromEntries(new FormData(event.currentTarget)).task),
           done: false
       };
        setTasks([newTask])
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
                className='border-gray-700 border-[1px] bg-gray-400 rounded-[8px] h-[54px] p-[16px] w-full'
            />
            <button type='submit' className='flex items-center justify-center h-[54px] px-[16px] bg-blue rounded-[8px]'>
                <span className='text-white'>Criar</span>
                <PlusCircle size={16} color='#fff' className='ml-[0.5rem]' />
            </button>
        </form>
    )
}