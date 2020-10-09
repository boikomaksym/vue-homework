<template>
  <div class="aaa">
    <div class="counter">{{ getMovieCount }} movie found</div>
    <v-radio-buttons
      class="buttons"
      left-button-id="ReleaseDate"
      left-button-value="release_date"
      right-button-id="Rating"
      right-button-value="vote_count"
      radio-button-name="Sort by"
      v-model="sortValue"
      @click="updateMovies"
    >
    </v-radio-buttons>
  </div>
</template>

<script>
import vRadioButtons from "./v-radio-buttons";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { vRadioButtons },
  computed: {
    ...mapGetters(["getMovieCount"]),
    ...mapActions(["updateMovies"]),
    sortValue: {
      get: function() {
        return this.$store.state.sort_option;
      },
      set: function(value) {
        this.$store.commit("SET_SORT_OPTION", value);
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
