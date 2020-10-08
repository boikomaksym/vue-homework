import Vue from "vue";
import Vuex from "vuex";
import apiService from "../api/apiService";
Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    populateMovies: async ({ commit }) => {
      let newVar = await apiService.getMovies();
      commit("setMovies", newVar);
    },
    updateMovies: async ({ commit, state }) => {
      const filteredMovies = await apiService.getMovies({
        sortBy: state.sort,
        searchBy: state.searchByType,
        search: state.searchText,
        sortOrder: "desc"
      });
      commit("setMovies", filteredMovies);
    }
  },
  mutations: {
    setSearchText: (state, value) => {
      state.searchText = value;
    },
    setSearchBy: (state, value) => {
      state.searchByType = value;
    },
    setMovies: (state, value) => {
      state.movies = value;
    },
    setSort: (state, value) => {
      state.sort = value;
    }
  },
  state: {
    movies: [],
    searchText: "",
    searchByType: "title",
    sort: "release_date"
  },
  getters: {
    allMovies(state) {
      return state.movies;
    }
  }
});
