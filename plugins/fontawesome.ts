// plugins/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { all } from "@awesome.me/kit-KIT_CODE/icons";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Add all solid icons to the library
// library.add(...all);

library.add(fas);
library.add(faWhatsapp);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
