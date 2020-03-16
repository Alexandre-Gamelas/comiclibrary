import React from 'react';

/*organismos*/
import { Navbar } from './components/organisms'
import { Intro } from './components/organisms'
import {Daily} from './components/organisms'

function App() {
  return (
    <main className="container-fluid">
      <Navbar />
      <Intro />
      <Daily />
    </main>
  );
}

export default App;
