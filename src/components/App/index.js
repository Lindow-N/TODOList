// == Import npm
import React from 'react';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// == Import
import './style.scss';

import tasksData from 'src/data/tasks';

// == Composant
const App = () => {
  const undoneTasksNumber = tasksData.filter((task) => !task.done).length;

  return (
    <div className="app">
      <Form />
      <Counter count={undoneTasksNumber} />
      <Tasks tasks={tasksData} />
    </div>
  );
};

// == Export
export default App;
