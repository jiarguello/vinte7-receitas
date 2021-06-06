import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from '../css/components/S.Header';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import SearchFilters from './SerchFilters';

export default function Header({ title, canFind, setFilter }) {
  const [searchFilters, setSearchFilters] = useState(false);

  const handleFilters = () => {
    setSearchFilters(!searchFilters);
  };

  return (
    <>
      <S.Header>
        <Link to="/perfil">
          <S.ProfileImg
            src={ ProfileIcon }
            alt="profile-button"
          />
        </Link>
        <h1>{title}</h1>
        {canFind && (
          <S.SearchButton
            onClick={ handleFilters }
            bgColor={ searchFilters ? 'rgba(0, 0, 0, .5)' : 'var(--hearder-color)' }
          >
            <img
              src={ SearchIcon }
              alt="search-icon"
            />
          </S.SearchButton>
        )}
      </S.Header>
      {searchFilters && <SearchFilters setFilter={ setFilter } />}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  canFind: PropTypes.bool,
  setFilter: PropTypes.func,
};

Header.defaultProps = {
  canFind: false,
  setFilter: () => {},
};
