import './App.css';
import {useSelector} from 'react-redux';

export function LogTable() {
    const newLogEntry = useSelector (state => state.stopwatch.newLogEntry);
    const logIndex = useSelector (state => state.stopwatch.logIndex);
  
    return (
      <>
        <div className="grid-container">
          {newLogEntry.map((newLogEntry, index) => (
            <>
              <div className="grid-item" key={logIndex}>
                {newLogEntry.id}
              </div>
              <div className="grid-item" key={newLogEntry.clock}>
                {newLogEntry.clock}
              </div>
              <div className="grid-item" key={newLogEntry.event + toString(logIndex)}>
                {newLogEntry.event}
              </div>
            </>
          ))}
        </div>
      </>
    );
  }