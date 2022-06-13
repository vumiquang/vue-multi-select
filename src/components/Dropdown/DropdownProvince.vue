<template lang="">
  <div class="province-wrap">
    <ListProvince></ListProvince>
    <div class="province-btn">
      <button
        class="btn btn-ok"
        :disabled="provincesSelected.data.length == 0"
        :class="{ active: provincesSelected.data.length > 0 }"
        @click="TOGGLE_DROPDOWN"
      >
        Đồng ý
      </button>
      <button class="btn btn-cancel" @click="FORMAT_PROVINCE_SELECTED">
        Hủy
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ListProvince from "./ListProvince.vue";

export default {
  components: {
    ListProvince,
  },
  computed: {
    ...mapState(["provincesSelected", "provincesSelected"]),
  },
  methods: {
    ...mapMutations(["FORMAT_PROVINCE_SELECTED", "TOGGLE_DROPDOWN"]),
  },
};
</script>

<style lang="css">
.province-wrap {
  position: absolute;
  z-index: 999;
  top: calc(100% + 1px);
  left: -1px;
  right: -1px;
  background-color: #ffffff;
  box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);
  padding-top: 8px;
  padding-bottom: 16px;
}
.province-btn {
  margin-top: 10px;
  padding-left: 16px;
}
.btn {
  border: 0;
  outline: 0;
  background: transparent;
  padding: 4px 20px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}
.btn ~ .btn {
  margin-left: 10px;
}
.btn.btn-ok {
  font-weight: 700;
  background-color: #dcdcdc;
  color: #fff;
  border-radius: 4px;
}
.btn-cancel {
  color: #007bc3;
}
.btn.btn-ok.active {
  background-color: #007bc3;
}
button:disabled,
button[disabled] {
  cursor: unset;
}
</style>
