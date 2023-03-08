import {useSelector} from 'react-redux';
import * as styles from "./styles";

export function LogTable() {
    const newLogEntry = useSelector (state => state.stopwatch.newLogEntry);
    const logIndex = useSelector (state => state.stopwatch.logIndex);
  
    return (
      <>
        <styles.Grid>
          {newLogEntry.map((newLogEntry, index) => (
            <>
              <styles.GridEntry key={logIndex}>
                {newLogEntry.id}
              </styles.GridEntry>
              <styles.GridEntry key={newLogEntry.clock}>
                {newLogEntry.clock}
              </styles.GridEntry>
              <styles.GridEntry key={newLogEntry.event + toString(logIndex)}>
                {newLogEntry.event}
              </styles.GridEntry>
            </>
          ))}
        </styles.Grid>
      </>
    );
  }