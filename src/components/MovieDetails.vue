<template>
  <div class="detail">
    <div class="poster">
      <img :data-url="movie.poster_path" :alt="movie.title" v-lazy-load-image />
    </div>
    <div class="description">
      <div class="name">
        <h2>{{ movie.title }}</h2>
        <div class="rating">{{ movie.vote_count | formatVote}}</div>
      </div>
      <h3>{{ movie.tagline }}</h3>
      <div class="info">
        <span class="date">{{ movie.release_date | formatDate}}</span>
        <span>{{ movie.length }}</span>
      </div>
      <div class="overview">
        {{ movie.overview }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MovieDetail",
  data: function() {
    return {
      movie: {}
    }
  },
  created: function() {
    this.setMovie()
  },
  methods: {
    setMovie: function() {
      this.movie = this.getMovieById(this.$route.params.id)
    }
  },
  computed: {
    ...mapGetters(["getMovieById"]),
  },
  watch: {
    "$route": "setMovie"
  }
};
</script>

<style scoped>
.detail {
  color: white;
  display: flex;
}

.description {
  margin-left: 30px;
}

h2 {
  font-size: 40px;
  margin: 0 30px 0 0;
  line-height: 1.5;
}

h3 {
  font-size: 15px;
}

.info {
  color: #f65261;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.date {
  margin-right: 30px;
}

.poster {
  max-width: 350px;
  min-width: 300px;
}

img {
  width: 100%;
  height: 100%;
}

.name {
  display: flex;
}

.rating {
  font-size: 35px;
  padding: 4px;
  color: #a1e66f;
  border: solid white;
  border-radius: 100px;
}
</style>
