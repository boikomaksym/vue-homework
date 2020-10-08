import axios from "axios";

const BASE_URL = "http://react-cdp-api.herokuapp.com/movies";

export default {
  getMovies: async params => {
    return (
      await axios.get(BASE_URL, {
        params: params
      })
    ).data.data;
  },
  getMovieById: async id => {
    return (await axios.get(BASE_URL + `/${id}`)).data;
  }
};
