import React from 'react';

import './style.scss';

const Form = () => (
  <form className="form">
    <input
      type="text"
      placeholder="Ajouter une tâche"
      className="form__input"
    />
  </form>
);

export default Form;
