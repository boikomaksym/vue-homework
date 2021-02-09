import Vue from "vue";
import Vuex from "vuex";
import apiService from "../api/apiService";
Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    populateMovies: async ({ commit }) => {
      let movies = await apiService.getMovies();
      commit("SET_MOVIES_ARRAY", movies);
    },
    updateMovies: async ({ commit, state }) => {
      const filteredMovies = await apiService.getMovies({
        sortBy: state.sort_option,
        searchBy: state.search_by_field,
        search: state.search_text_value,
        sortOrder: "desc"
      });
      commit("SET_MOVIES_ARRAY", filteredMovies);
    }
  },
  mutations: {
    SET_SEARCH_TEXT_VALUE: (state, value) => {
      state.search_text_value = value;
    },
    SET_SEARCH_BY_FIELD: (state, value) => {
      state.search_by_field = value;
    },
    SET_MOVIES_ARRAY: (state, value) => {
      state.movies_array = value;
    },
    SET_SORT_OPTION: (state, value) => {
      state.sort_option = value;
    }
  },
  state: {
    movies_array: [],
    search_text_value: "",
    search_by_field: "title",
    sort_option: "release_date"
  },
  getters: {
    getMovieCount(state) {
      return state.movies_array.length;
    }
  }
});
