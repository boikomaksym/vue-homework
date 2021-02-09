<template>
  <div>
    <h1>Find your movie</h1>
    <div>
      <div class="search">
        <input
          class="searchBox"
          v-model="searchText"
          placeholder="Quentin Tarantino"
        />
        <button class="searchBtn" @click="search">Search</button>
      </div>
      <v-radio-buttons
        left-button-id="Title"
        left-button-value="title"
        right-button-value="genres"
        right-button-id="Genre"
        radio-button-name="Search by"
        v-model="searchByType"
      >
      </v-radio-buttons>
    </div>
  </div>
</template>

<script>
import vRadioButtons from "./v-radio-buttons";

export default {
  name: "SearchBar",
  components: { vRadioButtons },
  computed: {
    searchText: {
      get: function() {
        return this.$store.state.search_text_value;
      },
      set: function(value) {
        this.$store.commit("SET_SEARCH_TEXT_VALUE", value);
      }
    },
    searchByType: {
      get: function() {
        return this.$store.state.search_by_field;
      },
      set: function(value) {
        this.$store.commit("SET_SEARCH_BY_FIELD", value);
      }
    }
  },
  methods: {
    search() {
      this.$router.push({
        name: "Search",
        query: {
          field: this.searchByType,
          sort: this.$store.state.sort_option,
          q: this.searchText
        }
      });
    }
  }
};
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
