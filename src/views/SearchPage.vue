<template>
  <div>
    <v-header>
      <v-search />
    </v-header>
    <v-results />
    <v-movie-grid></v-movie-grid>
  </div>
</template>

<script>
import vResults from "../components/v-results";
import vHeader from "../components/v-header";
import vSearch from "../components/v-search";
import vMovieGrid from "../components/v-movie-grid";

export default {
  name: "MainView",
  components: {
    vResults,
    vHeader,
    vSearch,
    vMovieGrid
  }
};
</script>

<style scoped></style>
