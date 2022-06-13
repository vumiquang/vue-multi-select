import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    provinces: {},
    provincesSelected: { data: [] },
    iShowDropdown: false,
  },
  getters: {
    getProvinces(state) {
      return state.provinces;
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
  },
});
