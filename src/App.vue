<template>
  <div id="app">
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "App",
  components: {
    FooterComponent
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #232323;
}
</style>
