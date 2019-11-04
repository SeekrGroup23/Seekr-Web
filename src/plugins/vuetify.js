import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import Echarts from "vue-echarts";

import "echarts/lib/chart/bar";

Vue.component("chart", Echarts);

Vue.use(Vuetify, {
  iconfont: "mdi"
})