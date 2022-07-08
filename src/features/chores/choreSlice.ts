import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Status, NewChore, ChoreState, Chore } from "./types";

const initialState: ChoreState = {
  list: [],
  status: Status.idle,
  error: null,
  showChoreModal: false,
};

export const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const fetchChores = createAsyncThunk("chores/fetchChores", async () => {
  const response = await fetch(`${BASE_URL}/api/chores`);
  const parsedResponse = await response.json();
  return parsedResponse;
});

export const addNewChore = createAsyncThunk(
  "chores/addNewChore",
  async (newChore: NewChore) => {
    const response = await fetch(`${BASE_URL}/api/chores`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newChore),
    });
    const parsedResponse = await response.json();
    return parsedResponse;
  }
);

export const deleteChore = createAsyncThunk(
  "chores/deleteChore",
  async (id: number) => {
    const response = await fetch(`${BASE_URL}/api/chores/${id}`, {
      method: "delete",
    });
    if (response.status === 200) return { id, error: "" };
    return { id: null, error: `${response?.status}: ${response?.statusText}` };
  }
);

export const updateChore = createAsyncThunk(
  "chores/updateChore",
  async (updatedChore: Chore) => {
    const response = await fetch(`${BASE_URL}/api/chores/${updatedChore.id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedChore),
    });
    const parsedResponse = await response.json();
    return parsedResponse;
  }
);

const choreSlice = createSlice({
  name: "chores",
  initialState,
  reducers: {
    onOpenChoreModal: (state) => {
      state.showChoreModal = true;
    },
    onCloseChoreModal: (state) => {
      state.showChoreModal = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChores.pending, (state, action) => {
        state.status = Status.loading;
      })
      .addCase(fetchChores.fulfilled, (state, action) => {
        state.status = Status.succeeded;
        state.list = action.payload;
      })
      .addCase(fetchChores.rejected, (state, action) => {
        state.status = Status.failed;
        state.error = action.error.message || "Something went wrong...";
      })
      .addCase(addNewChore.fulfilled, (state, action) => {
        state.list = [...state.list, action.payload];
      })
      .addCase(deleteChore.fulfilled, (state, action) => {
        if (action.payload.id && !action.payload.error) {
          state.list = state.list.filter(
            (chore) => chore.id !== action.payload.id
          );
        } else {
          console.log("Something went wrong: ", action.payload.error);
        }
      })
      .addCase(updateChore.fulfilled, (state, action) => {
        state.list = state.list.map((chore) => {
          if (chore.id !== action.payload.id) {
            return chore;
          } else {
            return action.payload;
          }
        });
      });
  },
});

export const selectChoreSlice = (state: RootState) => state.chores;
export const { onCloseChoreModal, onOpenChoreModal } = choreSlice.actions;
export default choreSlice.reducer;
