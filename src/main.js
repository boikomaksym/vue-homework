import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { formatDate } from "./filters/formatDate";
import { formatVote } from "./filters/formatVote";
import { directive } from "./plugins/directive";

Vue.filter("formatDate", formatDate);
Vue.filter("formatVote", formatVote);
Vue.directive("lazyLoadImage", directive);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch("populateMovies");
  }
}).$mount("#app");
