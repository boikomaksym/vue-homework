<template>
  <div>
    <header-component :show-home-button="true"> </header-component>
    <h1>404 Page not found</h1>
  </div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent";

export default {
  name: "NotFound",
  components: {
    HeaderComponent
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
