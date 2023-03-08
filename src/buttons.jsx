import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {start, pause, split, reset} from './stopwatchReducer';

export function Buttons () {
  const startBtn = useSelector (state => state.stopwatch.start.id);

  const dispatch = useDispatch ();

  return (
    <div className="button-actions">
      <button
        id="start"
        className={useSelector (state => state.stopwatch.start.class)}
        onClick={() =>
          startBtn === 'Start' ? dispatch (start ()) : dispatch (pause ())}
        disabled={useSelector (state => state.stopwatch.start.isDisabled)}
      >
        {useSelector (state => state.stopwatch.start.id)}
      </button>
      <button
        id="split"
        className={useSelector (state => state.stopwatch.split.class)}
        onClick={() => dispatch (split ())}
        disabled={useSelector (state => state.stopwatch.split.isDisabled)}
      >
        Split
      </button>
      <button
        id="reset"
        className={useSelector (state => state.stopwatch.reset.class)}
        onClick={() => dispatch (reset ())}
        disabled={useSelector (state => state.stopwatch.reset.isDisabled)}
      >
        Reset
      </button>
    </div>
  );
}
