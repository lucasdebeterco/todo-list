import { TaskProvider } from './context/TaskContext.tsx'
import { TodoMain } from './components/TodoMain.tsx';

function App() {
    return (
        <TaskProvider>
            <TodoMain />
        </TaskProvider>
    )
}

export default App
