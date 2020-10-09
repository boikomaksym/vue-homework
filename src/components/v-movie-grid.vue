<template>
  <div class="grid">
    <v-movie-item v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import vMovieItem from "./v-movie-item";

import { mapState } from "vuex";

export default {
  name: "v-movie-grid",
  components: { vMovieItem },
  computed: {
    ...mapState({ movies: "movies_array" })
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
