import versionInfos from "../package.json";

import Auth from "./components/Auth.vue";

const version = versionInfos.version;

export { version, Auth };

export default {
  version,
  Auth,

  install(Vue) {
    Vue.component(Auth.name, Auth);
  },
};
