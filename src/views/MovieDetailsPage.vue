<template>
  <div>
    <v-header :show-home-button="true">
      <v-movie-detail />
    </v-header>
    <v-results />
    <v-movie-grid></v-movie-grid>
  </div>
</template>

<script>
import vResults from "../components/v-results";
import vHeader from "../components/v-header";
import vMovieGrid from "../components/v-movie-grid";
import vMovieDetail from "../components/v-movie-details";

export default {
  name: "MovieDetailsPage",
  components: {
    vResults,
    vHeader,
    vMovieGrid,
    vMovieDetail
  }
};
</script>

<style scoped></style>
