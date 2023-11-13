import React from 'react';

const UserInput = ({ value, onChange, onKeyDown, disabled }) => {
  return (
    <input
      type='text'
      placeholder='Saisir texte'
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
};

export default UserInput;
