import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../css/components/S.ListCards';

function ListCards(props) {
  const { type } = props;
  const typeOfId = (type === 'foods') ? 'idMeal' : 'idDrink';
  const typeOfPath = (type === 'foods') ? 'comidas' : 'bebidas';
  const typeOfThumb = (type === 'foods') ? 'strMealThumb' : 'strDrinkThumb';
  const typeOfStr = (type === 'foods') ? 'strMeal' : 'strDrink';

  const MAX_ITENS = 12;

  const renderCards = () => {
    const cards = props.items.filter((item) => props.items.indexOf(item) < MAX_ITENS)
      .map((item) => ((
        <S.Card key={ item[typeOfId] }>
          <Link to={ `/${typeOfPath}/${item[typeOfId]}` }>
            <h1>{item[typeOfStr]}</h1>
            <img
              src={ item[typeOfThumb] }
              alt={ item[typeOfStr] }
            />
          </Link>
        </S.Card>
      )));
    return (
      <S.CardContainer>
        { cards }
      </S.CardContainer>
    );
  };

  return props.items && renderCards();
}

export default ListCards;
