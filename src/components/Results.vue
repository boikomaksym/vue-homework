<template>
  <div>
    <p>{{ counter }} movie count</p>
    <radio-buttons
      left-button-value="Release date"
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
      counter: 0
    };
  }
};
</script>
