import React, { useState } from 'react';

const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState('');

  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(() => event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field ">
          <input
            id="email_inline"
            placeholder="search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovies(search, type)}
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={type === 'all'}
              onChange={handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              checked={type === 'movie'}
              onChange={handleFilter}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              checked={type === 'series'}
              onChange={handleFilter}
            />
            <span>Serials only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export { Search };
