import Results from "../components/Results";

export default {
  component: Results,
  title: "Results"
};

export const results = () => ({
  components: { Results },
  template: "<results/>"
});
