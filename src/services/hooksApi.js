import { useContext, useEffect, useState } from 'react';
import { context } from '../context';
import fetchApi from './fetchs';

const initialState = {
  searchTerm: '',
  option: '',
};

function HooksApi(type) {
  const { drinks, setDrinks, foods, setFoods } = useContext(context);
  const [filter, setFilter] = useState(initialState);
  
  useEffect(() => {
    const typeSearch = (type === 'food') ? 'meals' : 'drinks';
    if (filter.option && filter.searchTerm) {
      fetchApi(type, filter.option, filter.searchTerm).then(
        (response) => {
          if (response[typeSearch]) {
            (typeSearch === 'meals') ? setFoods(response[typeSearch]) : setDrinks(response[typeSearch]);
          } else {
            alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
          } 
        },
        (error) => console.log(error),
      );
    } else {
      (typeSearch === 'meals') ? setFoods([]) : setDrinks([]);
    }
  }, [setDrinks, setFoods, filter]);

  return { foods, drinks, setFilter, filter };
}

export default HooksApi;
