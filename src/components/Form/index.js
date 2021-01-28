import React from 'react';

import './style.scss';

const Form = () => {
  const handleOnSubmit = (event) => {
    // comme en vanilla il faut arrêter le comportement par défaut
    // du formulaire
    event.preventDefault();
    console.log('je soumet le formulaire');
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="form__input"
      />
    </form>
  );
};

export default Form;
