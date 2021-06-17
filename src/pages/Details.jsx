import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import TitleContainer from '../components/TitleContainer';
import {
  pathName,
  ingredientsArray,
  measureArray,
  adjustmentUrl,
} from '../services/functions';
import { context } from '../context';
import { useDetails, useRecomendations } from '../services/hooksApi';
import { typeOfpage } from '../services/keysOfPages';
import { updateLocalStorageInProgress } from '../services/localStorage';
import * as S from '../css/pages/S.Details';


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
  // const { recomendations } = useRecomendations(recomendationPath);

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
        <S.Main>
          <S.ThumbNail src={ details.strMealThumb } alt="recipe" />
          <TitleContainer { ...props } item={ details } />
          <S.H3>Ingredients:</S.H3>
          <ul>
            {
              ingredientsArray(details).map((item, index) => (
                <S.Li
                key={ index }
                >
                  {measureArray(details)[index]}
                  &nbsp;
                  <strong>{item}</strong>
                </S.Li>
              ))
            }
          </ul>
          <S.P>{details.strInstructions}</S.P>
          {typePath === 'foods' && (
            <S.Iframe
            src={ adjustmentUrl(details.strYoutube) }
            title="video"
            />
            )}
          <S.StartButton
            type="button"
            onClick={ handleStart }
          >
            Iniciar
          </S.StartButton>
        </S.Main>
      }
      {/* <S.RecomendationContainer>
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
      </S.RecomendationContainer> */}
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
