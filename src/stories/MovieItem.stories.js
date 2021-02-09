import MovieItem from "../components/v-movie-item.vue";

export default {
  component: MovieItem,
  title: "Movie item"
};

export const movie = () => ({
  components: { MovieItem },
  template: `
    <movie-item :movie="movie"/>
  `,
  computed: {
    movie: () => ({
      id: "id",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL._AC_.jpg",
      name: "name",
      genre: "genre",
      year: "2020"
    })
  }
});
