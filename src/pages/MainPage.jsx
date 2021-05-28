import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import { context } from '../context';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import ListCards from '../components/ListCards';
import fetchApi from '../services/fetchs';
import HooksApi from '../services/hooksApi';
import CategoriesButtons from '../components/SearchButtons/SearchButtons';
import { pathName } from '../services/functions';

export default function MainPage(props) {
  const { match: { path } } = props;
  const { typePath } = pathName(path);
  const typeOfPage = (typePath === 'food') ? 'foods' : 'drinks';
  const typeOfId = (typePath === 'food') ? 'idMeal' : 'idDrink';
  const typeOfPath = (typePath === 'food') ? 'comidas' : 'bebidas';
  const typeOfTitle = (typePath === 'food') ? 'Comidas' : 'Bebidas';
  const typeOfCategorie = (typePath === 'food') ? 'food' : 'drink';
  const typeOfKey = (typePath === 'food') ? 'meals' : 'drinks';

  const {
    setDrinks, setFoods, categories, setCategories, isSearching, ingredientOn, setIngreditOn,
  } = useContext(context);
  let selector = 'name';
  let searchName = '';

  const { [typeOfPage]: listOfRecipes, setFilter: setFilterHook } = HooksApi(typePath);
  const uniqueRecipe = listOfRecipes && listOfRecipes.length === 1;
  const moreThanOneRecipes = listOfRecipes && listOfRecipes.length > 1;

  useEffect(() => {
    if (ingredientOn !== '') {
      selector = 'ingredient';
      searchName = ingredientOn;
    }

    const lengthOfList = 12;
    fetchApi(typePath, selector, searchName).then((res) => {
      const fetchRecipes = res[typeOfKey]
        .filter((recipe) => res[typeOfKey].indexOf(recipe) < lengthOfList);
        (typePath === 'food') ? setFoods(fetchRecipes) : setDrinks(fetchRecipes);
    });

    const lengthOfCategories = 5;
    fetchApi(typePath, 'categoriesList', '').then((res) => {
      const fetchCategories = res[typeOfKey]
        .filter((recipe) => res[typeOfKey].indexOf(recipe) < lengthOfCategories);
      setCategories(fetchCategories);
    });

    setIngreditOn('');
  }, [setDrinks, setFoods, setCategories]);

  return (
    <>
      <Header title={typeOfTitle} canFind setFilter={ setFilterHook } />
      {categories && <CategoriesButtons type={typeOfCategorie} />}
      {moreThanOneRecipes && <ListCards items={ listOfRecipes } type={typeOfPage} />}
      {uniqueRecipe && isSearching && <Redirect to={ `/${typeOfPath}/${listOfRecipes[0][typeOfId]}` } /> }
      <Footer />
    </>
  );
}
