<template>
  <div class="select">
    <div class="select-group" :class="{ active: iShowDropdown }" ref="select">
      <div
        class="select-title"
        @click="toggleDropDown"
        v-click-outside="toggleDropDown"
      >
        <input
          class="search-province"
          type="text"
          :placeholder="placeholder"
          v-model="searchText"
        />
      </div>
      <Dropdown
        v-show="iShowDropdown"
        :listData="listData"
        @resetSelect="listSelected = []"
        @closeDropdown="closeDropdown"
        :toggleListSelected="toggleListSelected"
        :isDataSelected="isDataSelected"
        :isListSelectedEmpty="isListSelectedEmpty"
      ></Dropdown>
    </div>
    <!-- <MultiSelectResult v-show="listData.length > 0"></MultiSelectResult> -->
  </div>
</template>

<script>
import Dropdown from "./Dropdown/Dropdown.vue";
// import MultiSelectResult from "./MultiSelectResult.vue";

export default {
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      listSelected: [],
      iShowDropdown: false,
      searchText: "",
    };
  },
  components: {
    Dropdown,
    // MultiSelectResult,
  },
  computed: {
    isListSelectedEmpty() {
      return this.listSelected.length === 0;
    },
  },
  methods: {
    toggleDropDown() {
      this.iShowDropdown = !this.iShowDropdown;
    },
    closeDropdown() {
      console.log("close");
      this.iShowDropdown = false;
    },
    toggleListSelected(value) {
      console.log(this.listSelected.indexOf(value) > -1);
      if (this.listSelected.indexOf(value) > -1)
        this.listSelected = this.listSelected.filter((data) => data !== value);
      else this.listSelected.push(value);
    },
    isDataSelected(value) {
      return this.listSelected.indexOf(value) > -1;
    },
  },
};
</script>

<style lang="css" scoped>
.select {
  width: 480px;
}

.select-group {
  border: 1px solid #999999;
  border-radius: 4px;
  position: relative;
}
.select-group.active {
  border: 1px solid #007bc3;
  box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
}
.select-title {
  color: #999999;
  cursor: pointer;
  position: relative;
  padding: 1px;
}
.select-title:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  right: 22px;
  top: 50%;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #666666;
}
.search-province {
  width: 100%;
  padding: 16px 10px;
  outline: none;
  border: 0;
}
.search-province ::placeholder {
  font-family: "Noto Sans", sans-serif;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400px;
}
</style>
