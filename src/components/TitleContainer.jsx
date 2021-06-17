import React, { useContext, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import BlackHeart from '../images/blackHeartIcon.svg';
import WhiteHeart from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { updateLocalStorageItem } from '../services/localStorage';
import * as S from '../css/components/S.TitleContainer';
import { context } from '../context';

const pathName = (path) => ({
  typePath: path.includes('comidas') ? 'food' : 'cocktail',
});

const timeoutClipboard = 2000;

function TitleContainer({
  match: {
    params: { id },
    path,
  },
  item,
}) {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(context);
  const [clipboard, setClipboard] = useState(false);

  const isFavorite = favoriteRecipes.length > 0
    && favoriteRecipes.find((recipe) => recipe.id === id);

  const { typePath } = pathName(path);
  const sources = (meal, drink) => item && (
    typePath === 'food' ? item[meal] : item[drink]);

  const handleFavorite = () => {
    const newState = updateLocalStorageItem('favoriteRecipes', {
      id: item.idMeal || item.idDrink,
      type: path.includes('comida') ? 'comida' : 'bebida',
      area: item.strArea || '',
      category: item.strCategory,
      alcoholicOrNot: item.strAlcoholic || '',
      name: item.strMeal || item.strDrink,
      image: item.strMealThumb || item.strDrinkThumb,
    });
    setFavoriteRecipes(newState);
  };

  const handleClipboard = () => {
    clipboardCopy(
      `http://localhost:3000/${
        path.includes('comida') ? 'comidas' : 'bebidas'
      }/${id}`,
    );
    setClipboard(true);
    setTimeout(() => setClipboard(false), timeoutClipboard);
  };

  return (
    <S.TitleContainer>
      <S.H1>{sources('strMeal', 'strDrink')}</S.H1>
      <S.Hr></S.Hr>
      <S.Div>
        <S.Buttons type="button" onClick={ handleClipboard }>
          <img style={ { height: "4vh" } } src={ shareIcon } alt="favorite-status" />
        </S.Buttons>
        {clipboard && <span>Link copiado!</span>}
        <S.Buttons type="button" onClick={ handleFavorite }>
          <img
            style={ { height: "4vh" } }
            src={ isFavorite ? BlackHeart : WhiteHeart }
            alt="favorite-status"
          />
        </S.Buttons>
      </S.Div>
    </S.TitleContainer>
  );
}

TitleContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string.isRequired,
  }).isRequired,
  item: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ),
};

TitleContainer.defaultProps = {
  item: {},
};

export default TitleContainer;
