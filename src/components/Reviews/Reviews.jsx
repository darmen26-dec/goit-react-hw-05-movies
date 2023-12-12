import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/Api/Api';
import css from 'components/Reviews/Reviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (movieReviews === null) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(review =>
            review ? (
              <li key={review.id}>
                <h3 className={css.authorName}>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ) : null
          )}
        </ul>
      ) : (
        <p className={css.errorHeading}>There are no reviews for this film.</p>
      )}
    </div>
  );
};

export default Reviews;
