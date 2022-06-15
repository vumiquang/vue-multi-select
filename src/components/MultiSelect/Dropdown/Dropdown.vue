<template lang="">
  <div class="select-wrap">
    <div class="select-group">
      <label
        class="select-item"
        v-for="(value, index) in listData"
        :key="index"
      >
        <CustomCheckbox
          :value="value"
          :isDataSelected="isDataSelected"
          :toggleListSelected="toggleListSelected"
        ></CustomCheckbox>
      </label>
    </div>

    <div class="select-btn">
      <button
        class="btn btn-ok"
        :disabled="isListSelectedEmpty"
        :class="{ active: !isListSelectedEmpty }"
        @click="$emit('closeDropdown')"
      >
        Đồng ý
      </button>
      <button class="btn btn-cancel" @click="$emit('resetSelect')">Hủy</button>
    </div>
  </div>
</template>

<script>
import CustomCheckbox from "./CustomCheckbox.vue";
export default {
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
    toggleListSelected: {
      type: Function,
      default: () => () => {},
    },
    isDataSelected: {
      type: Function,
      default: () => () => {},
    },
    isListSelectedEmpty: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    CustomCheckbox,
  },
};
</script>

<style lang="css" scoped>
.select-wrap {
  position: absolute;
  z-index: 999;
  top: calc(100% + 1px);
  left: -1px;
  right: -1px;
  background-color: #ffffff;
  box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);
  padding-top: 8px;
  padding-bottom: 16px;
}
.select-btn {
  margin-top: 10px;
  padding-left: 16px;
}
.btn {
  border: 0;
  outline: 0;
  background: transparent;
  padding: 4px 20px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}
.btn ~ .btn {
  margin-left: 10px;
}
.btn.btn-ok {
  font-weight: 700;
  background-color: #dcdcdc;
  color: #fff;
  border-radius: 4px;
}
.btn-cancel {
  color: #007bc3;
}
.btn.btn-ok.active {
  background-color: #007bc3;
}
button:disabled,
button[disabled] {
  cursor: unset;
}

.select-group {
  height: 240px;
  overflow-y: scroll;
}
/* width */
.select-group::-webkit-scrollbar {
  width: 8px;
}

/* Track */
.select-group::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
.select-group::-webkit-scrollbar-thumb {
  background: #dcdcdc;
  border-radius: 4px;
}
.select-item {
  display: block;
  transition: background-color 0.3s ease;
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  padding-top: 4px;
  padding-bottom: 4px;
}
.select-item:hover {
  background: #e7f1fd;
}
</style>
