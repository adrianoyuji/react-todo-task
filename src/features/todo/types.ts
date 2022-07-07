export interface Todo {
  id: number;
  title: string;
  description: string;
}
export interface NewTodo {
  title: string;
  description: string;
}

export enum Status {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}
export interface TodoState {
  list: Todo[];
  status: Status;
  error: string | null;
  showTodoModal: boolean;
}
