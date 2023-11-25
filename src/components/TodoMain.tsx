import { Header } from './Header.tsx';
import { SearchArea } from './SearchArea.tsx';
import { Task } from './Task.tsx';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.tsx';
import { ClipboardText } from 'phosphor-react';

export function TodoMain() {
    const { tasks } = useContext(TaskContext)

    return (
        <div className='bg-gray-600 h-[100vh]'>
            <Header/>

            <div className='max-w-[736px] mx-auto'>
                <SearchArea />

                <section className='flex flex-col mt-[4rem]'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-[0.6rem]'>
                            <span className='text-blue font-bold text-[0.875rem]'>Tarefas criadas</span>
                            <strong
                                className='flex justify-center items-center text-[0.815rem] h-[19px] text-gray-200 bg-gray-400 rounded-[16px] px-[8px]'
                            >
                                {tasks.length}
                            </strong>
                        </div>

                        <div className='flex items-center gap-[0.6rem]'>
                            <span className='text-purple font-bold text-[0.875rem]' >Concluídas</span>
                            <strong
                                className='flex justify-center items-center text-[0.815rem] h-[19px] text-gray-200 bg-gray-400 rounded-[16px] px-[8px]'
                            >
                                {tasks.filter(task => task.done === true).length} de {tasks.length}
                            </strong>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[0.75rem] mt-[1.5rem]'>

                        {(tasks && tasks.length) ? tasks.map((task: Task) => {
                            return <Task task={task} key={task.id} />
                        }) : (
                            <div className='flex items-center justify-center flex-col mt-[4rem] text-gray-300'>
                                <ClipboardText size={56} color='#808080' />
                                <span className='mt-[1rem]'>Você ainda não tem tarefas cadastradas</span>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}