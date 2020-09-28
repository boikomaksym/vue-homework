<template>
  <div class="searchBar">
    <h3>Find your movie</h3>
    <div class="inputSearch">
      <input placeholder="Quentin Tarantino" type="text" />
      <button class="searchBtn">Search</button>
    </div>
    <div>
      <radio-buttons left-button-value="Title" right-button-value="Genre" radio-button-name="Search by">
      </radio-buttons>
    </div>
  </div>
</template>

<script>
import RadioButtons from "./RadioButtons";

export default {
  name: "SearchBar",
  components: { RadioButtons }
};
</script>
<style>
.inputSearch {
  margin-bottom: 20px;
  position: center;
  display: flex;
}
.searchBtn {
  background-color: #f65261;
  width: 238px;
  height: 60px;
  font-family:Arial;
  font-size:28px;
  color:#ffffff;
  text-transform:uppercase;
}
</style>
