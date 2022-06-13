<template>
  <div class="select">
    <div
      class="select-group"
      :class="{ active: shouldShowDropdown }"
      ref="select"
    >
      <div class="select-title" @click="TOGGLE_DROPDOWN">
        <input
          class="search-province"
          type="text"
          placeholder="Chọn thành phố"
          v-model="searchProvince"
        />
      </div>
      <DropdownProvince v-show="shouldShowDropdown"></DropdownProvince>
    </div>
    <ProvinceResult v-show="provincesSelected.data.length > 0"></ProvinceResult>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

import DropdownProvince from "./Dropdown/DropdownProvince.vue";
import ProvinceResult from "./ProvinceResult.vue";

export default {
  components: {
    DropdownProvince,
    ProvinceResult,
  },
  computed: {
    ...mapState(["provincesSelected"]),
    ...mapGetters(["shouldShowDropdown", "getSearchProvince"]),
    searchProvince: {
      get() {
        return this.$store.getters.getSearchProvince;
      },
      set(value) {
        this.$store.dispatch("setSearchProvince", value);
      },
    },
  },
  methods: {
    ...mapMutations(["CLOSE_DROPDOWN", "TOGGLE_DROPDOWN"]),
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (e.target.contains(this.$refs.select)) this.CLOSE_DROPDOWN();
    });
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
