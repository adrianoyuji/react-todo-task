export interface Chore {
  id: number;
  title: string;
  description: string;
}
export interface NewChore {
  title: string;
  description: string;
}

export enum Status {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}
export interface ChoreState {
  list: Chore[];
  status: Status;
  error: string | null;
  showChoreModal: boolean;
}
