import React, { Suspense, useState, useEffect } from 'react';
import { getMovieDetails } from 'components/Api/Api';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from 'pages/MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const roundToTens = num => {
    const percentValue = Math.round(num * 10);
    return `${percentValue}%`;
  };

  return (
    <>
      <div>
        <div className={css.button}>
          <Link to={backLink} className={css.backButton}>
            Go back{' '}
          </Link>
        </div>
        <div className={css.wrapper}>
          <img
            className={css.image}
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
            }
            alt={`${movie.title}`}
          />
          <div className={css.details}>
            <h2 className={css.heading}>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>User score: {roundToTens(movie.vote_average)}</p>
            <h3>Overview</h3>
            <p className={css.overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={css.genresList}>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className={css.additionalInfo}>Additional information</h2>
        <ul className={css.list}>
          <li className={css.linksWrapper}>
            <Link to={'cast'} className={css.links}>
              Cast
            </Link>
          </li>
          <li className={css.linksWrapper}>
            <Link to={'reviews'} className={css.links}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
