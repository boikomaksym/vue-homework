import MovieGrid from "../components/MovieGrid";

export default {
  component: MovieGrid,
  title: "MovieGrid"
};

export const movieGrid = () => ({
  components: { MovieGrid },
  template: "<movie-grid/>"
});
