export interface todo {
  content: string;
  id: number;
}
export interface todoList {
  date: string;
  name: string;
  todos: Array<todo>;
  _v: number;
  _id: string;
}
export interface listOfLists {
  todoLists: Array<todoList>;
  length: number;
}
