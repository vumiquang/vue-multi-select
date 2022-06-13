import Vue from "vue";
import Vuex from "vuex";
import { removeVietnameseTones } from "../utils/convertVN";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    provinces: {},
    provincesSelected: { data: [] },
    iShowDropdown: false,
    searchProvince: "",
  },
  getters: {
    getProvinces(state) {
      let filterProvince = {};
      for (const key in state.provinces) {
        const p = removeVietnameseTones(state.provinces[key]).toLowerCase();

        if (p.includes(state.searchProvince)) {
          filterProvince[key] = state.provinces[key];
        }
      }
      return filterProvince;
    },
    getProvincesSelected(state) {
      return state.provincesSelected.data;
    },
    getTagSelected(state) {
      let tagSelected = [];

      state.provincesSelected.data.forEach((key) => {
        const provinceObj = { [key]: state.provinces[key] };
        tagSelected.push(provinceObj);
      });

      return tagSelected;
    },
    shouldShowDropdown(state) {
      return state.iShowDropdown;
    },
    getSearchProvince(state) {
      return state.searchProvince;
    },
  },
  mutations: {
    SET_PROVINCE_FROM_API(state, provinces) {
      state.provinces = provinces;
    },
    REMOVE_PROVINCE_SELECTED(state, tag) {
      state.provincesSelected.data = state.provincesSelected.data.filter(
        (ele) => ele !== tag
      );
    },
    FORMAT_PROVINCE_SELECTED(state) {
      state.provincesSelected.data = [];
    },
    TOGGLE_DROPDOWN(state) {
      state.iShowDropdown = !this.state.iShowDropdown;
    },
    CLOSE_DROPDOWN(state) {
      state.iShowDropdown = false;
    },
    SET_SEARCH_PROVINCE(state, value) {
      state.searchProvince = removeVietnameseTones(value).toLowerCase();
    },
  },
  actions: {
    getProvincesAPI({ commit }) {
      Vue.axios
        .get("https://provinces.open-api.vn/api/?depth=2")
        .then((response) => {
          let data = {};
          response.data.forEach((province) => {
            data[province.codename] = province.name.replace(
              /(Tỉnh )|(Thành phố )/i,
              ""
            );
          });
          commit("SET_PROVINCE_FROM_API", data);
        });
    },
    setSearchProvince({ commit }, value) {
      commit("SET_SEARCH_PROVINCE", value);
    },
  },
});
