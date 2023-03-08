import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {  incrementCount } from '../reducer';
import { formatTime } from "../utils/utils";
import * as styles from "./styles";

export const Clock = () => {

  const dispatch = useDispatch ();
   
    useEffect(() => {
      const interval = setInterval(() => {
        dispatch (incrementCount ());
      }, 1);
      return () => clearInterval(interval);
    });
  
    return (
      <div className="clock">
        <SetDisplay />
        <SetMiniDisplay />
      </div>
    );
  };

  function SetDisplay() {
   const timeCount = useSelector (state => state.stopwatch.timeCount);
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
  
  function SetMiniDisplay() {
    const timeCount = useSelector (state => state.stopwatch.timeCount);
    const clicked = useSelector (state => state.stopwatch.clicked);
  
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