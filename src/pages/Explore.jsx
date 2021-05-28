import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

function exploreFoods() {
  return (
    <Link to="/explorar/comidas">
      <button type="button">Explorar Comidas</button>
    </Link>
  );
}

function exploreDrinks() {
  return (
    <Link to="/explorar/bebidas">
      <button type="button">Explorar Bebidas</button>
    </Link>
  );
}

export default function Explore() {
  return (
    <>
      <Header title="Explorar" />
      <div>
        { exploreFoods() }
        { exploreDrinks() }
      </div>
      <Footer />
    </>
  );
}
