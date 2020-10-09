<template>
  <div>
    <v-header :show-home-button="true"> </v-header>
    <h1>404 Page not found</h1>
  </div>
</template>
<script>
import vHeader from "../components/v-header";

export default {
  name: "NotFoundComponent",
  components: {
    vHeader
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 100px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: white;
}
</style>
