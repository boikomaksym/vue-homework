import SearchBar from "../components/v-search";

export default {
  component: SearchBar,
  title: "Search bar"
};

export const searchBar = () => ({
  components: { SearchBar },
  template: "<search-bar/>"
});
