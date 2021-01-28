// == Import npm
import React from 'react';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// == Import
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Counter />
    <Tasks />
  </div>
);

// == Export
export default App;
