import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import Card from '../components/ListCards';

const timeoutClipboard = 2000;

function ListDoneRecipeCards({ done = [] }) {
  const [clipboard, setClipboard] = useState(false);

  const handleClipboard = (type, id) => {
    clipboardCopy(`http://localhost:3000/${type}s/${id}`);
    setClipboard(true);
    setTimeout(() => setClipboard(false), timeoutClipboard);
  };

  const renderCard = ({
      id, alcoholicOrNot, type, image,
      name, area, category, doneDate, tags
    }, index) => (

    <Card key={ id }>
      <span>
        {alcoholicOrNot || `${area} - ${category}`}
      </span>
      <Link to={ `/${type}s/${id}` }>
        <img
          style={ { width: '100%' } }
          src={ image }
          alt={ `${name}-done-recipe` }
        />
        <span>{name}</span>
      </Link>
      <span>{doneDate}</span>
      { tags.map((tagName) => (
        <span
          key={ `${tagName}-${index}` }
        >
          {tagName}
        </span>
      )) }
      <div>
        <button type="button" onClick={ handleClipboard.bind(null, type, id) }>
          <img
            src={ shareIcon }
            alt="share-status"
          />
        </button>
      </div>
      {clipboard && <span>Link copiado!</span>}
    </Card>
  );

  const renderCards = () => done.map(
    (recipe, index) => renderCard(recipe, index),
  );
  return done.length > 0 && renderCards();
}

export default ListDoneRecipeCards;
