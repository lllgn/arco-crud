import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import router from './router';
import "@arco-design/web-vue/dist/arco.css";
import SvgIcon from "./plugin/svgIcon/SvgIcon.vue";
import JsonViewer from "vue-json-viewer";
import ArcoForm from "./components/crud/form/index.vue";
import ArcoCrud from "./components/crud/index.vue";



const app = createApp(App);
app.use(JsonViewer);
app.component("ArcoCrud", ArcoCrud);
app.component("ArcoForm", ArcoForm);
app.component("SvgIcon", SvgIcon);
app.use(ArcoVue);
// 挂载路由
app.use(router);
app.mount("#app");
