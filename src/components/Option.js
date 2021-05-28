import React from 'react';

const Option = (props) => (
<<<<<<< HEAD
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p> 
=======
  <div>
    {props.optionText}
>>>>>>> ad7d756867377c69086a5aba3c12866ea90a448b
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
      </button>
  </div>
);

export default Option;
