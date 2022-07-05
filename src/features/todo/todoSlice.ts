import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { TodoState } from "./types";

const initialState: TodoState = {
  list: [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere est imperdiet, eleifend tellus vel, ultrices magna. Donec id est sit amet sem convallis tincidunt et a nisi. Praesent vel eleifend metus. Sed et augue eget metus bibendum tristique. Morbi suscipit nisi enim, in dictum felis eleifend tincidunt. ",
    },
  ],
};

const todoSlice = createSlice({ name: "todos", initialState, reducers: {} });

export const selectAllTodos = (state: RootState) => state.todos;
export default todoSlice.reducer;
