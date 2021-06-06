import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import FooterContainer from '../css/components/S.Footer';

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/bebidas">
        <img src={ drinkIcon } alt="bebidas" />
      </Link>
      <Link to="/explorar">
        <img src={ exploreIcon } alt="explorar" />
      </Link>
      <Link to="/comidas">
        <img src={ mealIcon } alt="comidas" />
      </Link>
    </FooterContainer>
  );
}
