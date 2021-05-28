import React, { useEffect, useState, useContext } from 'react';
import fetchApi from '../services/fetchs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCards from '../components/ListCards';
import { context } from '../context';
import { pathName } from '../services/functions';

export default function ExploreFoodArea(props) {
  const [areas, setAreas] = useState([]);
  const [selectArea, setSelectArea] = useState('');
  const [selector, setSelector] = useState('name');
  const { foods, setFoods, drinks, setDrinks } = useContext(context);

  const { match: { path } } = props;
  const { typePath } = pathName(path);
  const typeOfPage = (typePath === 'food') ? 'foods' : 'drinks';
  const typeOfKey = (typePath === 'food') ? 'meals' : 'drinks';

  useEffect(() => {
    fetchApi(typePath, 'areasList', '').then(((list) => setAreas(list.meals)));
  }, []);

  useEffect(() => {
    const lengthOfList = 12;
    fetchApi('food', selector, selectArea).then((res) => {
      const fetchRecipes = res[typeOfKey]
        .filter((recipe) => res[typeOfKey].indexOf(recipe) < lengthOfList);
        (typePath === 'food') ? setFoods(fetchRecipes) : setDrinks(fetchRecipes);
    });
  }, [setDrinks, setFoods, selectArea, selector]);

  function createDropdown() {
    return areas.map((area) => (
      <option
        key={ area.strArea }
        value={ area.strArea }
      >
        {area.strArea}
      </option>
    ));
  }

  function handleChange({ target }) {
    const { value } = target;
    if (value === 'All') {
      setSelector('name');
      setSelectArea('');
    } else {
      setSelector('area');
      setSelectArea(value);
    }
  }

  return (
    <>
      <Header title="Explorar Origem" canFind />
      <div>
        <select onChange={ handleChange }>
          <option
            key="all"
            value="All"
          >
            All
          </option>
          {createDropdown()}
        </select>
        <ListCards items={ (typePath === 'food') ? foods : drinks } type={typeOfPage} />
      </div>
      <Footer />
    </>
  );
}
