<template>
  <div class="grid">
    <movie-item v-for="movie in movies" :key="movie.id" :movie="movie" />
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
        posterUrl: "/poster.jpg",
        name: "Harry Potter",
        year: "2007",
        genre: "Fantasy"
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
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  padding: 5%;
}

div > div {
  padding: 10px;
  background-color: #232323;
}
</style>
