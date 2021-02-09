<template>
  <div id="app">
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import vFooter from "../src/components/v-footer";

export default {
  name: "App",
  components: {
    vFooter
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #232323;
}
</style>
