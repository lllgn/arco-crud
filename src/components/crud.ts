import { App } from "vue";
import ArcoCrud from "./crud/index.vue";

export { ArcoCrud };

//组件可通过use的形式使用
export default {
  ArcoCrud,
  install(app: App) {
    app.component("arco-crud", ArcoCrud);
  },
};
