<template>
  <div class="select">
    <div
      v-click-outside="closeDropdown"
      class="select-group"
      :class="{ active: iShowDropdown }"
    >
      <div class="select-title" @click="toggleDropdown">
        <input
          type="text"
          class="search-province"
          :placeholder="placeholder"
          @input="setSearchText($event)"
          ref="input"
        />
      </div>
      <Dropdown
        v-show="iShowDropdown"
        @resetSelect="listSelected = []"
        @closeDropdown="closeDropdown"
        :listData="filterData"
        :toggleListSelected="toggleListSelected"
        :isDataSelected="isDataSelected"
        :isListSelectedEmpty="isListSelectedEmpty"
      ></Dropdown>
    </div>
    <MultiSelectResult
      v-show="!isListSelectedEmpty"
      :listSelected="listSelected"
      :removeListSelected="removeListSelected"
    ></MultiSelectResult>
  </div>
</template>

<script>
import Dropdown from "./Dropdown/Dropdown.vue";
import MultiSelectResult from "./MultiSelectResult.vue";
import { removeVietnameseTones } from "../../utils/convertVN";

export default {
  data() {
    return {
      listSelected: [],
      iShowDropdown: false,
      searchText: "",
      searchTimeOut: null,
    };
  },
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: () => "",
    },
    onSelect: {
      type: Function,
      default: () => () => {},
    },
  },

  components: {
    Dropdown,
    MultiSelectResult,
  },
  computed: {
    isListSelectedEmpty() {
      return this.listSelected.length === 0;
    },
    filterData() {
      const value = removeVietnameseTones(this.searchText).toLowerCase();
      return this.listData.filter((data) =>
        removeVietnameseTones(data).toLowerCase().includes(value)
      );
    },
  },
  methods: {
    toggleDropdown() {
      if (this.iShowDropdown) {
        this.$refs.input.blur();
      }
      this.iShowDropdown = !this.iShowDropdown;
    },
    openDropdown() {
      this.iShowDropdown = true;
    },
    closeDropdown() {
      this.iShowDropdown = false;
    },
    toggleListSelected(value) {
      if (this.listSelected.indexOf(value) > -1)
        this.listSelected = this.listSelected.filter((data) => data !== value);
      else this.listSelected.push(value);
    },
    isDataSelected(value) {
      return this.listSelected.indexOf(value) > -1;
    },
    removeListSelected(value) {
      this.listSelected = this.listSelected.filter((data) => data !== value);
    },
    setSearchText(event) {
      if (this.searchTimeOut) clearTimeout(this.searchTimeOut);

      this.searchTimeOut = setTimeout(() => {
        this.searchText = event.target.value;
      }, 500);
    },
  },
  watch: {
    listSelected: function (data) {
      this.onSelect(data);
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
