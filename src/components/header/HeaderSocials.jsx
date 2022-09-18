import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://ar.linkedin.com/in/lucas-de-gaetano-ba8269234" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/lucasdegaetano95" target="_blank" rel="noreferrer" ><FaGithub /></a>
      
    </div>
  )
}

export default HeaderSocials