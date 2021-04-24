import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "넥스트 투두 만들기", color: "red", checked: false },
  { id: 2, text: "독서 하기", color: "green", checked: true },
  { id: 3, text: "늦지않게 자기", color: "yellow", checked: false },
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;
