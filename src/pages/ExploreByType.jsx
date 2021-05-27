import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../context';
import fetchApi from '../services/fetchs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { pathName } from '../services/functions';


export default function ExploreByType(props) {
  const { surpriseId, setSurpriseId } = useContext(context);

  const { match: { path } } = props;
  const { typePath } = pathName(path);
  const typeOfTitle = (typePath === 'food') ? 'Comidas' : 'Bebidas';
  const typeOfPath = (typePath === 'food') ? 'comidas' : 'bebidas';
  const typeOfKey = (typePath === 'food') ? 'meals' : 'drinks';
  const typeOfId = (typePath === 'food') ? 'idMeal' : 'idDrink';

  async function randomId() {
    const fetchRandon = await fetchApi(typePath, 'random', '');
    setSurpriseId(fetchRandon[typeOfKey][0][typeOfId]);
  }

  useEffect(() => {
    randomId();
  }, []);

  function exploreIngredient() {
    return (
      <Link to={ `/explorar/${typeOfPath}/ingredientes` } >
        <button
          type="button"
        >
          Por Ingredientes
        </button>
      </Link>
    );
  }

  function exploreArea() {
    return (
      <Link to={ `/explorar/${typeOfPath}/area` } >
        <button type="button">Por Local de Origem</button>
      </Link>
    );
  }

  function exploreSurprise() {
    return (
      <Link to={ `/${typeOfPath}/${surpriseId}` }>
        <button type="button">Me Surpreenda!</button>
      </Link>
    );
  }

  return (
    <>
      <Header title={ `Explorar ${typeOfTitle}` } />
      <div>
        { exploreIngredient() }
        { exploreArea() }
        { exploreSurprise() }
      </div>
      <Footer />
    </>
  );
}
