import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../css/components/S.ListCards';
import { typeOfpage } from '../services/keysOfPages';

function ListCards(props) {
  const { type } = props;
  const { id, thumb, type: path , str  } = typeOfpage[type];

  const MAX_ITENS = 12;

  const renderCards = () => {
    const cards = props.items.filter((item) => props.items.indexOf(item) < MAX_ITENS)
      .map((item) => ((
        <S.Card key={ item[id] }>
          <Link to={ `/${path}/${item[id]}` }>
            <h1>{item[str]}</h1>
            <img
              src={ item[thumb] }
              alt={ item[str] }
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
