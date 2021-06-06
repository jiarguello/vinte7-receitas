import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { setInitialLocalStorage } from '../services/localStorage';

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
  const [toggleButton, setToggleButton] = useState(null);
  const [surpriseId, setSurpriseId] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    setInitialLocalStorage('favoriteRecipes'),
  );
  const [ingredientOn, setIngreditOn] = useState('');
  const [doneRecipes, setDoneRecipe] = useState(
    setInitialLocalStorage('doneRecipes'),
  );
  const [filter, setFilter] = useState(initialState)

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
    toggleButton,
    setToggleButton,
    ingredientOn,
    setIngreditOn,
    filter,
    setFilter,
  };

  return <context.Provider value={ value }>{children}</context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { context, Provider };
