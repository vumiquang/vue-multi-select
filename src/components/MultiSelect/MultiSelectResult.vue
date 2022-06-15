<template lang="">
  <div class="province-result">
    <div
      class="province-tag"
      v-for="(data, index) in listSelected"
      :key="index"
    >
      <span class="tag-name">{{ data }}</span>
      <img
        src="../../assets/delete.png"
        class="tag-delete"
        @click="removeListSelected(data)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listSelected: {
      type: Array,
      default: () => [],
    },
    isListSelectedEmpty: {
      type: Boolean,
      default: () => false,
    },
    removeListSelected: {
      type: Function,
      default: () => () => {},
    },
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
