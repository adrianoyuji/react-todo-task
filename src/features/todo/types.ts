export interface Todo {
  id: number;
  title: string;
  description: string;
}

export interface TodoState {
  list: Todo[];
}
