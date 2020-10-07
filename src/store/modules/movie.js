import movies from "../../assets/movies.json";
export default {
  actions: {
    updateMovies:({commit, state}) => {
        const movies = state.movies.filter(movie => {
          if (state.searchBy === 'Genre') {
            const genres = movie.genres.join(', ')
            return genres.includes(state.searchText)
          }
          if (state.searchBy === 'Title') {
            return movie.title.includes(state.searchText)
          }
        })
            .sort((a, b) => {
              if (state.sort === 'release_date') {
                return new Date(a.release_date) > new Date(b.release_date) ? -1 : 1
              }
              if (state.sort === 'vote_count') {
                return a.vote_count > b.vote_count ? -1 : 1
              }
            })
        commit('setMovies', movies)
      }
  },
  mutations: {
    setSearchText: (state, value) => {
      state.searchText = value
    },
    setSearchBy: (state, value) => {
      state.searchBy = value
    },
    setMovies: (state, value) => {
      state.filteredMovies = value
    },
    setSort: (state, value) => {
      state.sort = value
    }
  },
  state: {
    movies,
    filteredMovies: movies,
    searchText: '',
    searchBy: 'Title',
    sort: 'release_date'
  },
  getters: {
    allMovies(state) {
      return state.filteredMovies;
    },
    getMovieById: (state) => (id) => {
      return state.movies.find(movie => movie.id == id)
    }
  }
};
