import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Lucas De Gaetano</h1>
        <h5 className="text-light">Front-End Developer y Mas+</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Bajar
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
