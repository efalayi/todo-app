import React from 'react';

/* 
  Button Component
  @param {string} name
  @param {func} handleClick
  @returns button element
 */
const Button = ({ name, handleClick }) => {
  return (
    <input className="button" type="button" value={name} onClick={handleClick} />
  );
}

export default Button;
