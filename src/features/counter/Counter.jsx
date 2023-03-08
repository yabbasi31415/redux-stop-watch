import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {start, pause, split, reset} from './counterSlice';
import styles from './Counter.module.css';

export function Counter () {
  const startBtn = useSelector (state => state.counter.start.id);

  const dispatch = useDispatch ();

  return (
    <div className="button-actions">
      <button
        id="start"
        className={useSelector (state => state.counter.start.class)}
        onClick={() =>
          startBtn === 'Start' ? dispatch (start ()) : dispatch (pause ())}
        disabled={useSelector (state => state.counter.start.isDisabled)}
      >
        {useSelector (state => state.counter.start.id)}
      </button>
      <button
        id="split"
        className={useSelector (state => state.counter.split.class)}
        onClick={() => dispatch (split ())}
        disabled={useSelector (state => state.counter.split.isDisabled)}
      >
        Split
      </button>
      <button
        id="reset"
        className={useSelector (state => state.counter.reset.class)}
        onClick={() => dispatch (reset ())}
        disabled={useSelector (state => state.counter.reset.isDisabled)}
      >
        Reset
      </button>
    </div>
  );
}
