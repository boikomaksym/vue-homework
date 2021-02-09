import RadioButtons from "../components/v-radio-buttons";

export default {
  component: RadioButtons,
  title: "RadioButtons"
};

export const radioButton = () => ({
  components: { RadioButtons },
  template: "<radio-buttons/>"
});
