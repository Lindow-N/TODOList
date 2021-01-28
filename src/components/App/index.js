// == Import npm
import React from 'react';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// == Import
import './style.scss';

import tasksData from 'src/data/tasks';

// == Composant
class App extends React.Component {
  // ici pas besoin de déclarer le state dans le constructor
  // on a babel-class-properties
  state = {
    tasks: tasksData,
    taskLabel: 'Test task label',
  }

  // on passe par une propriété de class où on vient stocker une fonction
  // flêchée pour ne pas avoir à lier (bind) le contexte (this) de la classe à la fonction
  addTask = () => {
    const newTask = {
      id: 999,
      done: false,
      label: 'nouvelle tâche',
    };

    // lorsqu'on modifie un tableau dans le state
    // il faut repartir d'un nouveau tableau
    // A NE PAS FAIRE !!
    // const { tasks } = this.state;
    // tasks.push(newTask);

    // en déclaratif, on ne modifie jamais les données, on repart avec de nouvelles références
    // on parle ici d'IMMUTABILITE
    const { tasks } = this.state;
    const newTasks = [...tasks, newTask];

    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { tasks, taskLabel } = this.state;
    const undoneTasksNumber = tasks.filter((task) => !task.done).length;

    return (
      <div className="app">
        <Form
          onSubmitForm={this.addTask}
          inputValue={taskLabel}
        />
        <Counter count={undoneTasksNumber} />
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

// == Export
export default App;
