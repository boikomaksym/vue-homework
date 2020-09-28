<template>
  <router-link :to="'/movie/' + movie.id" class="movie-card-module__card">
    <img alt="movie-poster" :src="movie.posterUrl" />
    <div class="movie-card-module__footer">
      <ul>
        <li class="left">
          {{ movie.name }}
        </li>
        <li class="right">
          {{ movie.year }}
        </li>
      </ul>
      <div class="genre">{{ movie.genre }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      id: "id",
      posterUrl: "https://yolo.lv/storage/2020_03_23/1584938046_1204/w500.jpg",
      name: "name",
      genre: "genre",
      year: "2020"
    }
  }
};
</script>
<style>
ul {
  list-style-type: none;
  overflow: hidden;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #bdbdbd;
}
ul li.left {
  width: 40%;
  float: left;
  font-size: 25px;
}
ul li.right {
  width: 20%;
  float: right;
  font-size: 18px;
}
.genre {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #bdbdbd;
  font-size: 18px;
  margin-left: 40px;
}
</style>
