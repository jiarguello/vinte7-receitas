import { useContext, useEffect } from 'react';
import { context } from '../context';
import fetchApi from './fetchs';

export function HooksApi(type) {
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
  }, [foods, setFoods, drinks, setDrinks]);

  return { foods, drinks };
}

export function HooksCategory(type) {
  const { categories, setCategories } = useContext(context);
  const numberOfButtons = 5;
  const key = (type === 'foods' ? 'meals' : 'drinks');

  useEffect(() => {
    fetchApi(type, 'categoriesList', '').then((res) => {
      const result = res[key]
        .filter((recipe) => res[key].indexOf(recipe) < numberOfButtons);
      setCategories(result);
    });
  }, [setCategories]);

  return { categories };
}
