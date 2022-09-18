import React from 'react';
import CV from '../../assets/cv_lucasdegaetano.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Hablame
      </a>
    </div>
  );
};

export default CTA;
