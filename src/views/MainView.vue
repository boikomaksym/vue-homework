<template>
  <div>
    <header-component>
      <search />
    </header-component>
    <results />
    <movie-grid></movie-grid>
  </div>
</template>

<script>
import Results from "../components/Results";
import HeaderComponent from "../components/HeaderComponent";
import Search from "../components/Search";
import MovieGrid from "../components/MovieGrid";

export default {
  name: "SearchView",
  components: {
    MovieGrid,
    Search,
    Results,
    HeaderComponent
  }
};
</script>

<style scoped></style>
