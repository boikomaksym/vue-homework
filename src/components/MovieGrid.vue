<template>
  <div class="grid">
    <movie-item v-for="movie in allMovies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieItem from "./MovieItem";

import {mapGetters} from "vuex";

export default {
    name: "MovieGrid",
    components: { MovieItem },
    computed: {
      ...mapGetters(["allMovies"])
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
