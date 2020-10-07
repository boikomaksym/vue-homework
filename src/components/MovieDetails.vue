<template>
  <div class="detail">
    <div class="poster">
      <img alt="movie poster" :src="movie.posterUrl" />
    </div>
    <div class="description">
      <div class="name">
        <h2>{{ movie.name }}</h2>
        <div class="rating">{{ movie.rating }}</div>
      </div>
      <h3>{{ movie.secondName }}</h3>
      <div class="info">
        <span class="date">{{ movie.year }}</span>
        <span>{{ movie.length }}</span>
      </div>
      <div class="overview">
        {{ movie.plot }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  data: () => ({
    movie: {
      posterUrl: "/poster.jpg",
      name: "Harry Potter",
      secondName: "Harry Potter and the Deathly Hallows",
      year: "2007",
      plot:
        "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the " +
        "seventh and final novel of the Harry Potter series. It was released on 21 July 2007 in the United Kingdom" +
        " by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel" +
        " chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final " +
        "confrontation between the wizards Harry Potter and Lord Voldemort.",
      rating: "4.8",
      length: "143 min",
      genre: "Comedy"
    }
  })
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
