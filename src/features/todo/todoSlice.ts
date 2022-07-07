import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Status, Todo, TodoState } from "./types";

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
  async (newTodo: Todo) => {
    const response = await fetch(`${BASE_URL}/api/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const parsedResponse = await response.json();
    return parsedResponse;
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
      });
  },
});

export const selectTodoSlice = (state: RootState) => state.todos;
export const { onCloseTodoModal, onOpenTodoModal } = todoSlice.actions;
export default todoSlice.reducer;
