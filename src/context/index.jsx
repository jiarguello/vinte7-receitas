import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { createLocalStorage } from '../services/localStorage';

const initialState = {
  searchTerm: '',
  option: 'name',
};

const context = createContext();

function Provider({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [authLogin, setAuthLogin] = useState({});
  const [formValidation, setFormValidation] = useState(false);
  const [foods, setFoods] = useState(null);
  const [drinks, setDrinks] = useState(null);
  const [categories, setCategories] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [surpriseId, setSurpriseId] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    createLocalStorage('favoriteRecipes'),
  );
  const [ingredientOn, setIngreditOn] = useState('');
  const [doneRecipes, setDoneRecipe] = useState(
    createLocalStorage('doneRecipes'),
  );
  const [filter, setFilter] = useState(initialState)
  const [recomendations, setRecomendations] = useState(null);
  const [details, setDetails] = useState(null);
  const [inProgressRecipes, setInProgressRecipes] = useState([]);

  const value = {
    data,
    setData,
    doneRecipes,
    setDoneRecipe,
    favoriteRecipes,
    setFavoriteRecipes,
    isSearching,
    setIsSearching,
    isLoading,
    setLoading,
    authLogin,
    setAuthLogin,
    formValidation,
    setFormValidation,
    drinks,
    setDrinks,
    foods,
    setFoods,
    categories,
    setCategories,
    surpriseId,
    setSurpriseId,
    ingredientOn,
    setIngreditOn,
    filter,
    setFilter,
    recomendations,
    setRecomendations,
    details,
    setDetails,
    inProgressRecipes,
    setInProgressRecipes,
  };

  return <context.Provider value={ value }>{children}</context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { context, Provider };
