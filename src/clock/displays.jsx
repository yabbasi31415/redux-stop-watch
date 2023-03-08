import { useSelector } from "react-redux";
import { formatTime } from "../utils/utils";
import * as styles from "./styles";

export function MainDisplay() {
  const timeCount = useSelector((state) => state.stopwatch.timeCount);
  const { hrs, min, sec, ms } = formatTime(timeCount);

  return (
    <>
      <p>
        {hrs}:{min}:{sec}.{ms % 10}
        <styles.Subscript>{ms % 100}</styles.Subscript>
      </p>
    </>
  );
}

export function SecondaryDisplay() {
  const timeCount = useSelector((state) => state.stopwatch.timeCount);
  const clicked = useSelector((state) => state.stopwatch.clicked);

  if (clicked === "none")
    return <styles.MiniDisplay>SPLIT TIME</styles.MiniDisplay>;

  const { hrs, min, sec, ms } = formatTime(timeCount);

  return (
    <>
      <styles.MiniDisplay>
        {hrs}:{min}:{sec}.{ms % 1000}
      </styles.MiniDisplay>
    </>
  );
}
