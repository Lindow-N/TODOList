import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import './style.scss';

const Tasks = ({ tasks, setTaskDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <Task
        key={task.id}
        onChangeDone={setTaskDone}
        {...task}
      />
    ))}
  </ul>
);

// version longue
// const Tasks = ({ tasks }) => {
//   const tasksList = tasks.map((task) => {
//     console.log('object');

//     // React.createElement(Task, {...task});
//     return (
//       <Task
//         key={task.id}
//         // id={task.id}
//         // label={task.label}
//         // done={task.done}
//         // ici on vient utiliser le spread operator pour déverser
//         // les propriétés de l'objet task dans les props du composant Task
//         {...task}
//       />
//     );
//   });

//   return (
//     <ul className="tasks">
//       {tasksList}
//     </ul>
//   );
// };

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setTaskDone: PropTypes.func.isRequired,
};

export default Tasks;
