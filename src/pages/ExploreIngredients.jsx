import React, { useEffect, useContext } from 'react';
import fetchApi from '../services/fetchs';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import ListIngredientsCards from '../components/ListIngredientsCards';
import { context } from '../context';
import { pathName } from '../services/functions';

export default function ExploreIngredients(props) {
  const { match: { path } } = props;
  const { typePath } = pathName(path);
  const typeOfKey = (typePath === 'food') ? 'meals' : 'drinks';
  const typeOfFetch = (typePath === 'food') ? 'food' : 'cocktail';
  console.log(typePath)

  const { foods, setFoods, drinks, setDrinks } = useContext(context);

  useEffect(() => {
    const lengthOfList = 12;
    fetchApi(typeOfFetch, 'ingredientsList', '').then((res) => {
      const fetchRecipes = res[typeOfKey]
        .filter((recipe) => res[typeOfKey].indexOf(recipe) < lengthOfList);
        (typeOfFetch === 'food') ? setFoods(fetchRecipes) : setDrinks(fetchRecipes);
    });
  }, [setFoods, setDrinks]);

  return (
    <>
      <Header title="Explorar Ingredientes" />
      <div>
        <ListIngredientsCards items={ (typeOfFetch === 'food') ? foods : drinks } />
      </div>
      <Footer />
    </>
  );
}
