import axios from "axios";
import { BASE_URL, API_KEY } from "../config/api_config";
const API = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getMovies = (endpoint) => {
  console.log(`Calling getMovies with endpoint: ${endpoint}`);
    return API.get(`/movie/${endpoint}`);
    // console.log('=================Movies==================', response.data.results);
    // console.log('=================API Response=================', response.data);
    // return response.data.results;
  // }catch (error) {
  //   throw new Error(`API Error fetching movies: ${error.message}`);
  // }
};

export const getDetails = (id, type) => {
  console.log(`Calling getDetails with id: ${id} and type: ${type}`);
  return API.get(`/${type}/${id}`);
};


export const getTVs = (endpoint) => {
  console.log(`Calling getTVs with endpoint: ${endpoint}`);
  return API.get(`/tv/${endpoint}`);
}

export const getSearch = (query, type) => {
  console.log(`Calling searchMovies with query: ${query} and type: ${type}`);
  return API.get(`/search/${type}`, {
    params: {
      query: query,
    },
  });
}

