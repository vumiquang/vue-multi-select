<template>
  <div class="wrap">
    <SelectProvince></SelectProvince>
  </div>
</template>

<script>
import SelectProvince from "./components/SelectProvince.vue";
export default {
  components: {
    SelectProvince,
  },
  created() {
    this.$store.dispatch("getProvincesAPI");
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
