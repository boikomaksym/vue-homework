<template>
  <div>
  <router-link :to="'/movie/' + movie.id" >
    <img alt="movie-poster" :src="movie.poster_path" />
    <div class="movie-card-module__footer">
      <ul>
        <li class="left">
          {{ movie.title }}
        </li>
        <li class="right">
          {{ movie.release_date }}
        </li>
      </ul>
      <div class="genre">{{ movie.genres|formatArrayToString }}</div>
    </div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  filters: {
    formatArrayToString: genres => {
      return genres.join(', ');
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
