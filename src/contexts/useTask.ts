import { createContext } from "react";
import { Task } from '../components/Task.tsx';

export const TaskContext = createContext<Task[] | undefined>(undefined);