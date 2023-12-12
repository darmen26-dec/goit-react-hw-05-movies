import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;

const API_KEY = 'ff637f30e47aba984ca1bbe10eb189d9';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async movieID => {
  try {
    const response = await axios.get(`movie/${movieID}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getCast = async movieID => {
  try {
    const response = await axios.get(
      `movie/${movieID}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching cast details:', error);
    throw error;
  }
};

export const getReviews = async movieID => {
  try {
    const response = await axios.get(
      `movie/${movieID}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};
