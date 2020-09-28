import RadioButtons from "../components/RadioButtons";

export default {
  component: RadioButtons,
  title: "RadioButtons"
};

export const radioButton = () => ({
  components: { RadioButtons },
  template: "<radio-buttons/>"
});
