<template>
  <div class="aaa">
    <div class="counter">{{ counter }} movie found</div>
    <radio-buttons
      class="buttons"
      left-button-id="ReleaseDate"
      left-button-value="Release date"
      right-button-id="Rating"
      right-button-value="Rating"
      radio-button-name="Sort by"
    >
    </radio-buttons>
  </div>
</template>

<script>
import RadioButtons from "./RadioButtons";
export default {
  components: { RadioButtons },
  data() {
    return {
      counter: 9
    };
  }
};
</script>
<style>
.aaa {
  background-color: #3e3e3e;
  height: 100px;
  width: auto;
  display: flex;
}
.counter {
  margin-left: 380px;
  margin-top: 55px;
  z-index: 999999;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: white;
}
.buttons {
  position: relative;
  left: 310px;
}
</style>
