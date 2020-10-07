<template>
  <div class="form_toggle">
    <div class="form_toggle-item item-1">
      <span>{{ radioButtonName }}</span>
      <input
        type="radio"
        :name="radioButtonName"
        :id="leftButtonId"
        :value="leftButtonValue"
        checked
      />
      <label :for="leftButtonId">{{ leftButtonValue }}</label>
    </div>
    <div class="form_toggle-item item-2">
      <input
        type="radio"
        :name="radioButtonName"
        :id="rightButtonId"
        :value="rightButtonValue"
      />
      <label :for="rightButtonId">{{ rightButtonValue }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "radioButtons",
  props: {
    leftButtonId: {
      type: String,
      required: true
    },
    leftButtonValue: {
      type: String,
      required: true
    },
    rightButtonId: {
      type: String,
      required: true
    },
    rightButtonValue: {
      type: String,
      required: true
    },
    radioButtonName: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
span {
  font-size: 20px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: white;
  margin-right: 15px;
}
.form_toggle {
  width: auto;
  display: flex;
  margin: 50px 350px;
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
  background: #6f6f6f;
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
