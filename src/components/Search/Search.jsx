import React from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../store/searchReducer';
import './Search.scss';

export const Search = () => {
  const dispatch = useDispatch();

  const onQueryChange = (event) => {
    event.preventDefault();
    dispatch(searchByName(event.target.value));
  };

  return (
    <div className="search_container">
      <input
        className="search_container__input"
        type="text"
        onChange={(event) => onQueryChange(event)}
        placeholder="Search company ..."
      />
    </div>
  );
};
