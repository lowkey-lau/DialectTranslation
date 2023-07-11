import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css/normalize.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "@/utils/console.js";
import Vconsole from "vconsole";
let vConsole = new Vconsole();

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(vConsole);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //解决Menu标签报错
  if (key != "Menu") {
    app.component(key, component);
  } else {
    app.component(key + "Icon", component);
  }
}

app.mount("#app");
