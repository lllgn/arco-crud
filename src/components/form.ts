import { App } from "vue";
import ArcoFrom from "./crud/form/index.vue";

export { ArcoFrom };

//组件可通过use的形式使用
export default {
  ArcoFrom,
  install(app: App) {
    app.component("arco-form", ArcoFrom);
  },
};
