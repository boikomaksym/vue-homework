<template>
  <div class="aaa">
    <div class="counter">{{ allMovies.length }} movie found</div>
    <radio-buttons
      class="buttons"
      left-button-id="ReleaseDate"
      left-button-value="release_date"
      right-button-id="Rating"
      right-button-value="vote_count"
      radio-button-name="Sort by"
      v-model="sortValue"
      @click="updateMovies"
    >
    </radio-buttons>
  </div>
</template>

<script>
import RadioButtons from "./RadioButtons";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { RadioButtons },
  computed: {
    ...mapGetters(["allMovies"]),
    ...mapActions(["updateMovies"]),
    sortValue: {
      get: function() {
        return this.$store.state.sort;
      },
      set: function(value) {
        this.$store.commit("setSort", value);
      }
    }
  }
};
</script>
<style>
.aaa {
  background-color: #3e3e3e;
  height: 100px;
  width: auto;
  display: flex;
}
.counter {
  margin-left: 380px;
  margin-top: 55px;
  z-index: 999999;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: white;
}
.buttons {
  position: relative;
  left: 310px;
}
</style>
