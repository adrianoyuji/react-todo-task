import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Status, NewTodo, TodoState } from "./types";

const initialState: TodoState = {
  list: [],
  status: Status.idle,
  error: null,
  showTodoModal: false,
};

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(`${BASE_URL}/api/todos`);
  const parsedResponse = await response.json();
  return parsedResponse;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo: NewTodo) => {
    const response = await fetch(`${BASE_URL}/api/todos`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const parsedResponse = await response.json();
    return parsedResponse;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    const response = await fetch(`${BASE_URL}/api/todos/${id}`, {
      method: "delete",
    });
    if (response.status === 200) return { id, error: "" };
    return { id: null, error: `${response?.status}: ${response?.statusText}` };
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    onOpenTodoModal: (state) => {
      state.showTodoModal = true;
    },
    onCloseTodoModal: (state) => {
      state.showTodoModal = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = Status.loading;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = Status.succeeded;
        state.list = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = Status.failed;
        state.error = action.error.message || "Something went wrong...";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.list = [...state.list, action.payload];
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        if (action.payload.id && !action.payload.error) {
          state.list = state.list.filter(
            (todo) => todo.id !== action.payload.id
          );
        } else {
          console.log("Something went wrong: ", action.payload.error);
        }
      });
  },
});

export const selectTodoSlice = (state: RootState) => state.todos;
export const { onCloseTodoModal, onOpenTodoModal } = todoSlice.actions;
export default todoSlice.reducer;
