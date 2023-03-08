import React from 'react';
import {Buttons} from '../buttons/buttons';
import {Clock} from '../clock/clock';
import {LogTable} from '../logTable/logTable';
import * as styles from './styles'
import "./App.css"

function App () {
  return (
    <styles.App>

      <Clock />
      <Buttons />
      <LogTable />

    </styles.App>
  );
}

export default App;
