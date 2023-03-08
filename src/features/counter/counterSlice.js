import { createSlice } from "@reduxjs/toolkit";
import { formatTime, setTimeCount } from "../../utils";

const initialState = {
  value: 0,
  status: "idle",
  clicked: "none",
  timeCount: 0,
  start: {
    id: "Start",
    class: "enable-start-btn",
    isDisabled: false,
  },
  split: {
    id: "Split",
    class: "enable-split-btn",
    isDisabled: true,
  },
  reset: {
    id: "Reset",
    class: "enable-reset-btn",
    isDisabled: true,
  },
  logIndex: 0,
  newLogEntry: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    start: (state) => {
      state.start.id = "Pause";
      state.start.class = "enable-pause-btn";
      state.clicked = "start";
      state.split.isDisabled = false;
      state.reset.isDisabled = true;
    },
    pause: (state) => {
      state.start.id = "Start";
      state.start.class = "enable-start-btn";
      state.clicked = "pause";
      state.split.isDisabled = true;
      state.reset.isDisabled = false;
      state.logIndex += 1;
      state.newLogEntry.push({
        id: state.logIndex,
        clock: Object.values(formatTime(state.timeCount)).join(":"),
        event: "Pause",
      });
    },
    split: (state) => {
      state.clicked = "split";
      state.logIndex += 1;
      state.newLogEntry.push({
        id: state.logIndex,
        clock: Object.values(formatTime(state.timeCount)).join(":"),
        event: "Split",
      });
    },
    reset: (state) => {
      state.clicked = "reset";
      state.logIndex = 0;
      state.newLogEntry = [];
    },
    incrementCount: (state) => {
      state.timeCount = setTimeCount(state.timeCount, state.clicked);
    },
  },
});

export const { start, pause, split, reset, incrementCount } =
  counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectEvent = (state) => (event, prop) =>
  state.counter.reset.class;

export default counterSlice.reducer;
