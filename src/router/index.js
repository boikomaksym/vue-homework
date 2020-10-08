import Vue from "vue";
import VueRouter from "vue-router";
import SearchView from "../views/MainView";
import MovieDetailView from "../views/MovieDetailsPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: SearchView
  },
  {
    path: "/movie/:id",
    name: "Movie detail",
    component: MovieDetailView
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
