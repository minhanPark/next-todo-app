import instance from ".";
import { TodoType } from "../../types/todo";

interface AddTodoApiBody {
  text: string;
  color: TodoType["color"];
}

export const getTodosApi = () => instance.get<TodoType[]>("/api/todos");

export const checkTodoApi = (id: number) => instance.patch(`/api/todos/${id}`);

export const addTodoApi = (body: AddTodoApiBody) => {
  instance.post("/api/todos", body);
};

export const deleteTodoApi = (id: number) =>
  instance.delete(`/api/todos/${id}`);
