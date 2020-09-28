<template>
  <div>
    <img :src="movie.posterUrl" />
    <div>{{ movie.name }}</div>
    <div>{{ movie.year }}</div>
    <div>{{ movie.genre }}</div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      id: "id",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL._AC_.jpg",
      name: "name",
      genre: "genre",
      year: "2020"
    }
  }
};
</script>
