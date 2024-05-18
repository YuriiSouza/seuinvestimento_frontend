"use client";

import React from 'react';

const ButtonComponent = ({ path, svg, nameButton }) => {
  const handleClick = () => {
    window.location.href = path;
  };

  return (
    <div>
      <button className="menu_button" onClick={handleClick}>
        <img src={svg} alt={nameButton} />
        <div>{nameButton}</div>
      </button>
    </div>
  );
};

export default ButtonComponent;
