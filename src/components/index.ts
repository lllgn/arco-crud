import { App } from "vue";

import ArcoCrud from "./crud";
import ArcoFrom from "./form";

const components = [ArcoCrud, ArcoFrom];
export { ArcoCrud, ArcoFrom };

//组件可通过use的形式使用
export default {
  ArcoCrud,
  ArcoFrom,
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
