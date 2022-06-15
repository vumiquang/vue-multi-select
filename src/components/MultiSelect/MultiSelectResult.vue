<template lang="">
  <div class="province-result">
    <div
      class="province-tag"
      v-for="(tag, index) in getTagSelected"
      :key="index"
    >
      <span class="tag-name">{{ Object.values(tag)[0] }}</span>
      <img
        src="../../assets/delete.png"
        class="tag-delete"
        @click="$store.commit('REMOVE_PROVINCE_SELECTED', Object.keys(tag)[0])"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// console.log( "" );
export default {
  computed: {
    ...mapGetters(["getTagSelected"]),
  },
};
</script>

<style lang="css">
.province-result {
  border: 1px solid #999999;
  border-radius: 4px;
  padding-bottom: 11px;
  position: relative;
  margin-top: 8px;
  padding: 8px;
  padding-bottom: 3px;
  display: flex;
  flex-wrap: wrap;
}
.province-tag {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  background: #f8f8f8;
  border-radius: 32px;
  margin-bottom: 5px;
  margin-right: 4px;
}
.tag-name {
  color: #333333;
  padding: 0 20px;
}
.tag-delete {
  margin-right: 10px;
  cursor: pointer;
}
</style>
