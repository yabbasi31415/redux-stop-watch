import React from "react";
import { WatchButtons } from "../buttons/watchButtons";
import { Clock } from "../clock/clock";
import { LogTable } from "../logTable/logTable";
import { App } from "./styles";
import "./App.css";

function StopWatch() {
  return (
    <App>
      <Clock />
      <WatchButtons />
      <LogTable />
    </App>
  );
}

export default StopWatch;
