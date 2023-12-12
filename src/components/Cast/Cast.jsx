import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/Api/Api';
import css from 'components/Cast/Cast.module.css';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [dataLoading, setDataLoading] = useState(true);
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const details = await getCast(movieId);
        if (Array.isArray(details.cast)) {
          setCastData(details.cast);
        } else {
          console.error('Invalid data format: cast is not an array.');
        }
      } catch (error) {
        console.error('Error occurred while fetching movie data:', error);
      } finally {
        setDataLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  if (!castData || castData.length === 0) {
    return (
      <div>
        {dataLoading ? (
          <Loader />
        ) : (
          <h1 className={css.errorHeading}>
            Sorry, there is no cast information available!
          </h1>
        )}
      </div>
    );
  }

  return (
    <div>
      {dataLoading ? (
        <Loader />
      ) : (
        <ul className={css.castList}>
          {castData.map(cast => (
            <li key={cast.id} className={css.listItem}>
              <div className={css.actorWrapper}>
                <img
                  className={css.actorImg}
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                      : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                  }
                  alt={cast.original_name}
                />
                <div className={css.actorInfo}>
                  <p className={css.actorName}>
                    <strong>{cast.name}</strong>
                  </p>
                  <p className={css.actorCharacter}>
                    <strong>Character:</strong> {cast.character}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
