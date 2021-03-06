import Vue from "vue";
import VueRouter from "vue-router";
import SearchView from "../views/SearchPage";
import MovieDetailView from "../views/MovieDetailsPage";
import NotFound from "../views/NotFoundPage";

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
  },
  {
    path: "*",
    name: "default",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
