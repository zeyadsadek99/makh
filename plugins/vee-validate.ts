import { defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

export default defineNuxtPlugin(() => {
  // Define rules globally
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);
});
