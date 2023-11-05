import { Header } from './components/Header.tsx'
import { Task } from './components/Task.tsx'
import { SearchArea } from './components/SearchArea.tsx'

function App() {
    return (
        <div className='bg-gray-600'>
            <Header/>

            <div className='max-w-[736px] mx-auto'>
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
                        <Task />
                        <Task />
                        <Task />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App
