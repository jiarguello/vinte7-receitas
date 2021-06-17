import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import TitleContainer from '../components/TitleContainer';
import {
  pathName,
  ingredientsArray,
  measureArray,
  sources,
} from '../services/functions';
// import { context } from '../context';
import { useDetails, useRecomendations } from '../services/hooksApi';
import { typeOfpage } from '../services/keysOfPages';
import * as S from '../css/pages/S.RecipeProgress';

import fetchApi from '../services/fetchs';

export default function RecipeProgress(props) {
  const [counter, setCounter] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const {
    match: { params, path },
  } = props;
  const { id } = params;

  
  const {
    typePath,
    selectorPath,
  } = pathName(path);
  
  const { id: idType, category } = typeOfpage[typePath];

  const { details } = useDetails(typePath, id);

  const handle = ({ target }) => {
    if (target.checked) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const doneRecipe = () => {
    // const recipeFinished = {
    //   id: '',
    //   type: comida-ou-bebida,
    //   area: area-da-receita-ou-texto-vazio,
    //   category: categoria-da-receita-ou-texto-vazio,
    //   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    //   name: nome-da-receita,
    //   image: imagem-da-receita,
    //   doneDate: quando-a-receita-foi-concluida,
    //   tags: array-de-tags-da-receita-ou-array-vazio
    // }

    setRedirect(true);
    // Aqui tem que ser atualizado;
  };

  return (
    <S.Container>
      {
        details && 
        <S.Main>
          <S.ThumbNail
            src={ details.strMealThumb }
            alt="recipe"
          />
          <TitleContainer { ...props } item={ details } />
          <S.H3>
            {details
              && (typePath === 'food' ? details.strCategory : details.strAlcoholic)}
          </S.H3>
          <S.H3>Ingredients:</S.H3>
          <ul>
            {
              ingredientsArray(details).map((item, index) => (
                <S.Label
                  key={ index }
                  htmlFor={ index }
                >
                  <input
                    id={ index }
                    type="checkbox"
                    onClick={ handle }
                  />
                  &nbsp;
                  {measureArray(details)[index]}
                  &nbsp;
                  <strong>{item}</strong>
                </S.Label>
              ))}
          </ul>
          <S.P>{details && details.strInstructions}</S.P>
          <S.ButtonFinish
            type="button"
            disabled={ ((ingredientsArray(details) === null
              ? '' : (ingredientsArray(details).length) !== counter)) }
            onClick={ doneRecipe }
          >
            Finalizar Receita
          </S.ButtonFinish>
        </S.Main>
      }
      { redirect && <Redirect to="/receitas-feitas" /> }
    </S.Container>
  );
}

RecipeProgress.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string.isRequired,
  }).isRequired,
};
