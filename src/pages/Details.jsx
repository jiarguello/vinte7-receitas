import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import * as S from '../css/pages/S.Details';
import TitleContainer from '../components/TitleContainer';
import {
  pathName,
  ingredientsArray,
  measureArray,
  sourcesRecomendations,
  adjustmentUrl,
} from '../services/functions';
import { context } from '../context';
import { useDetails, useRecomendations } from '../services/hooksApi';
import { typeOfpage } from '../services/keysOfPages';
import { updateLocalStorageInProgress } from '../services/localStorage';

export default function Details(props) {
  const [redirect, setRedirect] = useState(false);
  const { inProgressRecipes, setInProgressRecipes } = useContext(context);

  const {
    match: { params, path },
  } = props;
  const { id } = params;
  
  const {
    typePath,
    recomendationPath,
  } = pathName(path);

  const { id: idType, category } = typeOfpage[typePath];
  
  const { details } = useDetails(typePath, id);
  const { recomendations } = useRecomendations(recomendationPath);

  const handleStart = () => {
    setInProgressRecipes([...inProgressRecipes, details]);
    updateLocalStorageInProgress('inProgress', details)
    setRedirect(true);
  };

  if (redirect) return <Redirect
    to={ `/comidas/${details[idType]}/in-progress` }
  />

  return (
    <S.Container>
      { details &&
        <main>
          <S.ThumbNail src={ details.strMealThumb } alt="recipe" />
          <TitleContainer { ...props } item={ details } />
          <h3>{details[category]}</h3>
          <ul>
            <h4>Ingredients:</h4>
            {
              ingredientsArray(details).map((item, index) => (
                <li
                key={ index }
                >
                  {measureArray(details)[index]}
                  &nbsp;
                  <strong>{item}</strong>
                </li>
              ))
            }
          </ul>
          <p>{details.strInstructions}</p>
          {typePath === 'foods' && (
            <iframe
            src={ adjustmentUrl(details.strYoutube) }
            title="video"
            />
            )}
        </main>
      }
      <S.RecomendationContainer>
        {recomendations
          && recomendations.map((recipe, index) => (
            <S.Card key={ index }>
              <img
                src={ recipe.strDrinkThumb }
                alt="recomendations"
                />
              <h3>
                {sourcesRecomendations('strMeal', 'strDrink', recipe, typePath)}
              </h3>
            </S.Card>
          ))}
      </S.RecomendationContainer>
      <S.StartButton
        type="button"
        onClick={ handleStart }
      >
        Iniciar Receita
      </S.StartButton>
    </S.Container>
  );
}

Details.propTypes = {
  id: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string.isRequired,
  }).isRequired,
};

Details.defaultProps = {
  id: '52832',
};
