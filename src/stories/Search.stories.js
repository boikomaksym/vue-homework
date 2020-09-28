import SearchBar from "../components/Search";

export default {
  component: SearchBar,
  title: "Search bar"
};

export const searchBar = () => ({
  components: { SearchBar },
  template: "<search-bar/>"
});
