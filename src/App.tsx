import { Header } from './components/Header.tsx'
import { Task } from './components/Task.tsx'
import { SearchArea } from './components/SearchArea.tsx'

function App() {
    return (
        <div className='bg-gray-600'>
            <Header/>

            <div className='max-w-[736px] mx-auto'>
                <SearchArea/>

                <section>
                    <div>
                <span>
                    Tarefas criadas
                    <strong>5</strong>
                </span>

                        <span>
                    Concluídas
                    <strong>2 de 5</strong>
                </span>
                    </div>
                    <div>
                        <Task/>
                        <Task/>
                        <Task/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App
