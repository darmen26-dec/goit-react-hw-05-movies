import React, { useEffect, useState } from 'react';
import { searchMovies } from 'components/Api/Api';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const newQuery = elements.query ? elements.query.value : '';

    if (newQuery !== '') {
      setSearchParams({ query: newQuery });
      setQuery(newQuery);
    } else {
      setSearchParams({});
      setQuery('');
    }

    e.currentTarget.reset();
  };

  useEffect(() => {
    console.log(query);
    if (query) {
      searchMovies(query).then(data => {
        setMovies(data);
      });
    }
  }, [query]);

  return (
    <div className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchFormInput}
          type="text"
          name="query"
          defaultValue={query || ''}
        />
        <button type="submit" className={css.searchFormButton}>
          Search
        </button>
      </form>
      {movies.length === 0 && query ? (
        <div>No results. Please try again.</div>
      ) : (
        <ul className={css.searchList}>
          {movies.map(movie => (
            <li key={movie.id} className={css.searchItem}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
