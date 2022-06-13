<template lang="">
  <div class="province-group">
    <label
      class="province-item"
      v-for="(province, key, index) in getProvinces"
      :key="index"
    >
      <CustomCheckbox :province="province" :codeProvince="key"></CustomCheckbox>
    </label>
  </div>
</template>

<script>
import CustomCheckbox from "./CustomCheckbox.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CustomCheckbox,
  },
  computed: {
    ...mapGetters(["getProvinces"]),
  },
};
</script>

<style lang="css" scoped>
.province-group {
  height: 240px;
  overflow-y: scroll;
}
/* width */
.province-group::-webkit-scrollbar {
  width: 8px;
}

/* Track */
.province-group::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
.province-group::-webkit-scrollbar-thumb {
  background: #dcdcdc;
  border-radius: 4px;
}
.province-item {
  display: block;
  transition: background-color 0.3s ease;
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  padding-top: 4px;
  padding-bottom: 4px;
}
.province-item:hover {
  background: #e7f1fd;
}
</style>
