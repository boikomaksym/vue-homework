<template>
  <div>
    <h1>Find your movie</h1>
    <div>
      <div class="search">
        <input class="searchBox" v-model="searchText" placeholder="Quentin Tarantino" />
        <button class="searchBtn" @click="updateMovies" >Search</button>
      </div>
      <radio-buttons
        left-button-id="Title"
        left-button-value="Title"
        right-button-value="Genre"
        right-button-id="Genre"
        radio-button-name="Search by"
        v-model="searchBy"
      >
      </radio-buttons>
    </div>
  </div>
</template>

<script>
import RadioButtons from "./RadioButtons";
import {mapActions} from "vuex";

export default {
  name: "SearchBar",
  components: { RadioButtons },
  computed: {
    searchText: {
      get: function() {
        return this.$store.state.searchText
      },
      set: function(value) {
        this.$store.commit("setSearchText", value)
      }
    },
    searchBy: {
      get: function() {
        return this.$store.state.searchBy
      },
      set: function(value) {
        this.$store.commit("setSearchBy", value)
      }
    }
  },
  methods: {
    ...mapActions(["updateMovies"])
  }};
</script>
<style>
h1 {
  width: auto;
  font-size: 60px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 100;
  color: white;
  margin-left: 350px;
}
body {
  width: auto;
  background: #1c1b1b;
  font-family: Arial;
}
.search {
  width: auto;
  display: flex;
  margin-left: 350px;
  margin-right: 350px;
}
.searchBox {
  width: 70%;
  border-radius: 10px 10px 10px 10px;
  background-color: #0a0a0a;
  font-size: 20px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: white;
}
.searchBtn {
  width: 30%;
  height: 50px;
  background-color: #f65261;
  text-align: center;
  color: white;
  border-radius: 10px 10px 10px 10px;
  font-size: 20px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
}
</style>
