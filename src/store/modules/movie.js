import moviesJson from "../../assets/movies.json";
export default {
  actions: {
  },
  mutations: {
  },
  state: {
    movies: moviesJson
  },
  getters: {
    allMovies(state) {
      return state.movies;
    },
    getMovieById: (state) => (id) => {
      return state.movies.find(movie => movie.id == id)
    }
  }
};
