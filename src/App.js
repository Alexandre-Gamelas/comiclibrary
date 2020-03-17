import React from 'react';

/*organismos*/
import { Navbar } from './components/organisms'
import { Intro } from './components/organisms'
import { DailyContainer } from './containers/'

function App() {
  return (
    <main className="container-fluid">
      <Navbar />
      <Intro />
      <DailyContainer />
      <div className="mt-5 pt-5"></div>
    </main>
  );
}

export default App;
