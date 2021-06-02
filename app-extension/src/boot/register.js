import { boot } from "quasar/wrappers";
import VuePlugin from "quasar-ui-plugin.auth/src/index.js";

export default boot(({ app }) => {
  app.use(VuePlugin);
});
