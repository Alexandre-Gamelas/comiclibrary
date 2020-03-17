import React from 'react';

/*organismos*/
import { Navbar } from './components/organisms'
import { Intro } from './components/organisms'
import {DailyContainer} from './containers/'

function App() {
  return (
    <main className="container-fluid">
      <Navbar />
      <Intro />
      <DailyContainer />
    </main>
  );
}

export default App;
