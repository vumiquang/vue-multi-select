<template>
  <div class="wrap">
    <MultiSelect
      :listData="provinces"
      @select="doSomeThing"
      :placeholder="'Chọn tỉnh thành'"
    ></MultiSelect>
  </div>
</template>

<script>
import Vue from "vue";
import MultiSelect from "./components/MultiSelect/MultiSelect.vue";
export default {
  data() {
    return { provinces: [] };
  },
  components: {
    MultiSelect,
  },
  methods: {
    doSomeThing(data) {
      console.log(data);
    },
  },
  created() {
    Vue.axios
      .get("https://provinces.open-api.vn/api/?depth=2")
      .then((response) => {
        let data = [];
        response.data.forEach((province) => {
          data.push(province.name.replace(/(Tỉnh )|(Thành phố )/i, ""));
        });
        this.provinces = data;
      });
  },
};
</script>

<style lang="css">
.wrap {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
