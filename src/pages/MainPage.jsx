import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { context } from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCards from '../components/ListCards';
import { useApi, useCategory } from '../services/hooksApi';
import CategoriesButtons from '../components/CategoriesButtons';
import { pathName } from '../services/functions';
import { typeOfpage } from '../services/keysOfPages';

export default function MainPage(props) {
  const { match: { path } } = props;
  const { typePath } = pathName(path);

  const selectorPage = typeOfpage[typePath];
  const { title, id, type, page } = selectorPage;

  const { isSearching } = useContext(context);

  const { [typePath]: listOfRecipes, setFilter: setFilterHook } = useApi(typePath);
  const { categories } = useCategory(typePath);
  const uniqueRecipe = listOfRecipes && listOfRecipes.length === 1;

  return (
    <>
      <Header title={title} canFind setFilter={setFilterHook} />
      {categories && <CategoriesButtons type={page} />}
      <ListCards items={listOfRecipes} type={page} />
      {uniqueRecipe && isSearching && <Redirect to={`/${type}/${listOfRecipes[0][id]}`} /> }
      <Footer />
    </>
  );
}
