import MovieGrid from "../components/v-movie-grid";

export default {
  component: MovieGrid,
  title: "MovieGrid"
};

export const movieGrid = () => ({
  components: { MovieGrid },
  template: "<movie-grid/>"
});
