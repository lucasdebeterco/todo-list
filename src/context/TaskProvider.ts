/*
import { ReactNode, useContext, useState } from "react";
const TaskContext = useContext();

interface ITaskProvider {
    children: ReactNode
}

const TaskProvider = ({ children }: ITaskProvider) => {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(1);
    const happyBirthday = () => setAge(age + 1);

    return (
        <TaskContext.Provider value={{ name, age, happyBirthday }}>
            {children}
        </TaskContext.Provider>
    )
}*/
