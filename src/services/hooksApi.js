import { useContext, useEffect } from 'react';
import { context } from '../context';
import fetchApi from './fetchs';

export function useApi(type) {
  const {
    drinks, setDrinks,
    foods, setFoods,
  } = useContext(context);
  const {filter, setFilter} = useContext(context);
  const { option, searchTerm } = filter;
  const key = (type === 'foods' ? 'meals' : 'drinks');

  useEffect(() => {
    fetchApi(type, option, searchTerm).then((res) => {
      const result = res[key];
      key === 'meals' && setFoods(result);
      key === 'drinks' && setDrinks(result);
      setFilter({
        option: 'name',
        searchTerm: ''
      })
    });
  }, []);

  return { foods, drinks };
}

export function useCategory(type) {
  const { categories, setCategories } = useContext(context);
  const numberOfButtons = 5;
  const key = (type === 'foods' ? 'meals' : 'drinks');

  useEffect(() => {
    fetchApi(type, 'categoriesList', '').then((res) => {
      const result = res[key]
        .filter((recipe) => res[key].indexOf(recipe) < numberOfButtons);
      setCategories(result);
    });
  }, []);

  return { categories };
}

export function useDetails(type, id) {
  const { recomendations, setRecomendations } = useContext(context);
  const lengthOfRecomendations = 6;
  const key = (type === 'foods' ? 'meals' : 'drinks');

  useEffect(() => {
    fetchApi(type, 'details', id).then((res) => {
      const result = res[key]
        // .filter((recipe) => res[key].indexOf(recipe) < lengthOfRecomendations);
      setRecomendations(result);
    });
  }, []);

  return { recomendations };
}
