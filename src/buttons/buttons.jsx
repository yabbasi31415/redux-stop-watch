import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { start, pause, split, reset, selectEvent } from "../reducer";
import * as styles from "./styles";

export function Buttons() {
  const startBtnLabel = useSelector(selectEvent("start", "id"));

  const dispatch = useDispatch();

  return (
    <styles.Div>
      <styles.Start
        clicked={startBtnLabel}
        id="start"
        onClick={() =>
          startBtnLabel === "Start" ? dispatch(start()) : dispatch(pause())
        }
        disabled={false}
      >
        {startBtnLabel}
      </styles.Start>

      <styles.Split
        disabledStatus={useSelector(selectEvent("split", "isDisabled"))}
        id="split"
        onClick={() => dispatch(split())}
        disabled={useSelector(selectEvent("split", "isDisabled"))}
      >
        Split
      </styles.Split>

      <styles.Reset
        disabledStatus={useSelector(selectEvent("reset", "isDisabled"))}
        id="reset"
        onClick={() => dispatch(reset())}
        disabled={useSelector(selectEvent("reset", "isDisabled"))}
      >
        Reset
      </styles.Reset>
    </styles.Div>
  );
}
