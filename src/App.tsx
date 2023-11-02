import { Header } from './components/Header.tsx'
import { Task } from './components/Task.tsx'

function App() {
  return (
    <div className=''>
        <Header />

        <section>
            <input />
            <button type='submit'>
                Criar
            </button>
        </section>

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
                <Task />
                <Task />
                <Task />
            </div>
        </section>
    </div>
  )
}

export default App
