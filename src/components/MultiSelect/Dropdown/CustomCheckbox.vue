<template lang="">
  <div class="checkbox-group">
    <span class="checkbox-wrap">
      <input
        type="checkbox"
        :checked="isDataSelected(value)"
        :value="value"
        @input="toggleCheckBox(value)"
      />
      <span class="checkmark"></span>
    </span>
    <span class="label">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => "",
    },
    isDataSelected: {
      type: Function,
      default: () => () => {},
    },
    toggleListSelected: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    toggleCheckBox(value) {
      this.toggleListSelected(value);
    },
  },
};
</script>

<style lang="css" scoped>
.checkbox-group {
  display: flex;
  align-items: center;
}
span.label {
  color: #333333;
  margin-left: 27px;
}
.checkbox-wrap {
  display: block;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 8px;
}
.checkbox-wrap input {
  position: relative;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  margin-top: 5px;
}
.checkbox-wrap .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #333333;
}
.checkbox-wrap input:checked + .checkmark {
  background-color: #45d1c9;
  border-color: transparent;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-wrap input:checked + .checkmark:after {
  display: block;
}
.checkbox-wrap .checkmark:after {
  left: 6px;
  top: 2px;
  width: 2px;
  height: 8px;
  border: solid white;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
}
</style>
