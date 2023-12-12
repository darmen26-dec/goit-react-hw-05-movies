import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import css from 'pages/Home/Home.module.css';

const Home = () => {
  const [dataLoading, setDataLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        if (Array.isArray(data.results)) {
          setMoviesData(data.results);
        } else {
          console.error('Invalid data format: results is not an array.');
        }
      })
      .catch(error => {
        console.error('getTrending error:', error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, []);

  return (
    <main>
      <div>
        <h1 className={css.homeHeading}>Trending today</h1>
        {Array.isArray(moviesData) && moviesData.length > 0 ? (
          <ul className={css.homeList}>
            {moviesData.map(movie => (
              <li key={movie.id} className={css.homeListItem}>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className={css.homeListImg}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                    }
                    alt={movie.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.moviesError}>No movies available.</p>
        )}
        {dataLoading && <Loader />}
      </div>
    </main>
  );
};

export default Home;
