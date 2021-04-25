import instance from ".";
import { TodoType } from "../../types/todo";

export const getTodosApi = () => instance.get<TodoType[]>("/api/todos");
