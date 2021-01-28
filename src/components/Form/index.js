import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ onSubmitForm, inputValue }) => {
  const handleOnSubmit = (event) => {
    // comme en vanilla il faut arrêter le comportement par défaut
    // du formulaire
    event.preventDefault();
    console.log('je soumet le formulaire');
    onSubmitForm();
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="form__input"
        value={inputValue}
      />
    </form>
  );
};

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Form;
