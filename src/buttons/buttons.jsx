import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { start, pause, split, reset } from "../reducer";
import * as styles from "./styles";

export function Buttons() {
  const startBtn = useSelector((state) => state.stopwatch.start.id);

  const dispatch = useDispatch();

  return (
    <styles.Div>
      <styles.Start
        id="start"
        onClick={() =>
          startBtn === "Start" ? dispatch(start()) : dispatch(pause())
        }
        disabled={useSelector((state) => state.stopwatch.start.isDisabled)}
      >
        {useSelector((state) => state.stopwatch.start.id)}
      </styles.Start>

      <styles.Split
        id="split"
        onClick={() => dispatch(split())}
        disabled={useSelector((state) => state.stopwatch.split.isDisabled)}
      >
        Split
      </styles.Split>

      <styles.Reset
        id="reset"
        onClick={() => dispatch(reset())}
        disabled={useSelector((state) => state.stopwatch.reset.isDisabled)}
      >
        Reset
      </styles.Reset>
    </styles.Div>
  );
}
