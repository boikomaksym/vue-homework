<template>
  <div class="header">
    <header>
      <h1>Netfilxroulette</h1>
      <router-link to="/" v-if="showHomeButton">
        <button>HOME</button>
      </router-link>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    showHomeButton: Boolean
  }
};
</script>

<style scoped>
.header {
  position: relative;
  padding: 15px 25px;
  background: linear-gradient(
      to right,
      rgba(28, 21, 21, 0.79),
      rgba(47, 41, 41, 0.85)
    ),
    url("../assets/background.jpg");
}

h1 {
  position: relative;
  text-transform: lowercase;
  margin-left: 5%;
  font-size: 25px;
  margin-bottom: 30px;
  text-align: left;
  color: #f65261;
}
header {
  display: flex;
  justify-content: space-between;
}
</style>
