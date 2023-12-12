import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.container}>
      <BallTriangle
        height="100"
        width="100"
        color="tomato"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
