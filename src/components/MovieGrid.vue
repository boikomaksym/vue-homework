<template>
  <div class="grid">
    <movie-item
      class="cell"
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  name: "MovieGrid",
  components: { MovieItem },
  data: () => {
    const movies = [];
    for (var i = 0; i < 9; i++) {
      movies.push({
        id: i,
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL._AC_.jpg",
        name: "Kill Bill V.1",
        year: "1994",
        genre: "Thriller"
      });
    }
    return {
      movies
    };
  }
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
}

div > div {
  padding: 10px;
  background-color: #232323;
}
</style>
