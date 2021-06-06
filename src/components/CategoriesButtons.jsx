import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { context } from '../context';
import ButtonsContainer from '../css/components/S.SearchButtons';
import fetchApi from '../services/fetchs';

function CategoriesButtons(props) {
  const { type } = props;
  const {
    setFoods,
    setDrinks,
    categories,
  } = useContext(context);

  const handleClick = ({ target }) => {
    const name = (target.name !== 'all') ? target.name : '';
    const categorie = (target.name !== 'all') ? 'categorie' : 'name';
    fetchApi(type, categorie, name).then(
      (res) => {
        type === 'foods' && setFoods(res.meals);
        type === 'drinks' && setDrinks(res.drinks);
      }
    )
  };

  return (
    <ButtonsContainer>
      <button
        type="button"
        name="all"
        onClick={ (event) => handleClick(event) }
      >
        All
      </button>
      {
        categories.map(({ strCategory }) => (
          <button
            key={ strCategory }
            type="button"
            name={ strCategory }
            onClick={ (event) => handleClick(event) }
          >
            { strCategory }
          </button>
        ))
      }
    </ButtonsContainer>
  );
}

CategoriesButtons.propTypes = {
  type: PropTypes.string.isRequired,
};

export default CategoriesButtons;
