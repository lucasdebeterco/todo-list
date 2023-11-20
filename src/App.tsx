import { Header } from './components/Header.tsx'
import { Task } from './components/Task.tsx'
import { SearchArea } from './components/SearchArea.tsx'
import { TaskContext } from './contexts/useTask.ts'

function App() {

    const Tasks = [
        {
            description: 'teste',
            done: false
        }, {
            description: 'teste',
            done: true
        }
    ]

    return (
        <div className='bg-gray-600 h-[100vh]'>
            <Header/>

            <div className='max-w-[736px] mx-auto'>
                <TaskContext.Provider  value={Tasks}>
                    <SearchArea/>

                    <section className='flex flex-col mt-[4rem]'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-[0.6rem]'>
                                <span className='text-blue font-bold text-[0.875rem]'>Tarefas criadas</span>
                                <strong
                                    className='flex justify-center items-center text-[0.815rem] h-[19px] text-gray-200 bg-gray-400 rounded-[16px] px-[8px]'
                                >
                                    5
                                </strong>
                            </div>

                            <div className='flex items-center gap-[0.6rem]'>
                                <span className='text-purple font-bold text-[0.875rem]' >Concluídas</span>
                                <strong
                                    className='flex justify-center items-center text-[0.815rem] h-[19px] text-gray-200 bg-gray-400 rounded-[16px] px-[8px]'
                                >
                                    2 de 5
                                </strong>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[0.75rem] mt-[1.5rem]'>
                            {Tasks.map(task => {
                                return <Task task={task} />
                            })}
                        </div>
                    </section>
                </TaskContext.Provider>
            </div>
        </div>
    )
}

export default App
