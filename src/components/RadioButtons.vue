<template>
  <div class="form_toggle">
    <div class="form_toggle-item item-1">
      <input
        type="radio"
        id="leftButton"
        value="leftButtonValue"
        v-model="picked"
        checked
      />
      <label for="leftButton">{{ leftButtonValue }}</label>
    </div>
    <div class="form_toggle-item item-2">
      <input
        type="radio"
        id="rightButton"
        value="rightButtonValue"
        v-model="picked"
      />
      <label for="rightButton">{{ rightButtonValue }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "radioButtons",
  data: () => {
    return {
      picked: "leftButtonValue"
    };
  },
  props: {
    leftButtonValue: {
      type: String,
      required: true,
      default: "left"
    },
    rightButtonValue: {
      type: String,
      required: true,
      default: "right"
    },
    radioButtonName: {
      type: String,
      required: true,
      default: "name"
    }
  }
};
</script>

<style>
.form_toggle {
  display: inline-block;
  overflow: hidden;
}
.form_toggle-item {
  float: left;
  display: inline-block;
}
.form_toggle-item input[type="radio"] {
  display: none;
}
.form_toggle-item label {
  display: inline-block;
  padding: 0px 15px;
  line-height: 34px;
  border: 1px solid #999;
  border-right: none;
  cursor: pointer;
  user-select: none;
  background: #424242;
  color: #ffffff;
  text-transform: uppercase;
}

.form_toggle .item-1 label {
  border-radius: 6px 0 0 6px;
}
.form_toggle .item-2 label {
  border-radius: 0 6px 6px 0;
  border-right: 1px solid #424242;
}

.form_toggle .item-1 input[type="radio"]:checked + label {
  background: #f65261;
}
.form_toggle .item-2 input[type="radio"]:checked + label {
  background: #f65261;
}
</style>
