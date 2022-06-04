import React from 'react';

const ControlesFormInput = ({
  inputId,
  inputName,
  inputType,
  inputLabel,
  inputText,
  inputValue,
  inputFunc,
}) => {
  return (
    <div className=''>
      <label className='form-label' htmlFor={inputId}>
        {inputLabel}
      </label>
      <input
        className='form-control'
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={inputFunc}
        id={inputId}
      />
      {inputText && <p className='form-text'>{inputText}</p>}
    </div>
  );
};

export default ControlesFormInput;
