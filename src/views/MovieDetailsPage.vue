<template>
  <div>
    <header-component :show-home-button="true">
      <movie-detail />
    </header-component>
    <results />
    <movie-grid></movie-grid>
  </div>
</template>

<script>
import Results from "../components/Results";
import HeaderComponent from "../components/HeaderComponent";
import MovieGrid from "../components/MovieGrid";
import MovieDetail from "../components/MovieDetails";

export default {
  name: "SearchView",
  components: {
    MovieDetail,
    MovieGrid,
    Results,
    HeaderComponent
  }
};
</script>

<style scoped></style>
