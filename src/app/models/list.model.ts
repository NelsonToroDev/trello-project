import { ToDo } from "./todo.model";

export interface List {
  title: string;
  todos: ToDo[];
}