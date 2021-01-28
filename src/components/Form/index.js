import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ onSubmitForm, inputValue, onChangeInput }) => {
  const handleOnSubmit = (event) => {
    // comme en vanilla il faut arrêter le comportement par défaut
    // du formulaire
    event.preventDefault();
    console.log('je soumet le formulaire');
    onSubmitForm();

    // ici on aurait pu récupérer la valeur de l'input event.target[0].value
    // dans ce cas on saura ce qui est dans l'input uniquement quand on soumettra
    // le formulaire
  };

  const handleOnChange = (event) => {
    console.log('je passe dans handleOnChange', event.target.value);
    onChangeInput(event.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="form__input"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
};

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Form;
