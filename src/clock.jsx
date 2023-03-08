import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {  incrementCount } from './features/counter/counterSlice';
import { formatTime } from "./utils";

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
          <span className="subscript-timer">{ms % 100}</span>
        </p>
      </>
    );
  }
  
  function SetMiniDisplay() {
    const timeCount = useSelector (state => state.stopwatch.timeCount);
    const clicked = useSelector (state => state.stopwatch.clicked);
  
    if (clicked === "none")
      return <p className="secondary-display">SPLIT TIME</p>;
  
    const { hrs, min, sec, ms } = formatTime(timeCount);
  
    return (
      <>
        <p className="secondary-display">
          {hrs}:{min}:{sec}.{ms % 1000}
        </p>
      </>
    );
  }