import vResults from "../components/v-results";

export default {
  component: vResults,
  title: "Results"
};

export const results = () => ({
  components: { vResults },
  template: "<results/>"
});
