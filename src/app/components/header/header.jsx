import React from 'react';
import '@/app/components/header/styles-header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="/images/logo.png" alt="logo" />

      <div id="search">
        <img src="/svg/eye.svg" alt="Search Icon" />

        <label htmlFor="search"></label>
        <input placeholder="Pesquisar" type="text" id="search" />

        <div className="user">
          <button>
            <img src="/images/user_photo.png" alt="User" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
