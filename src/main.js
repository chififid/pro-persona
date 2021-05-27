import { createApp } from "vue";
import App from "./components/App.vue";
import "./assets/scss/styles.scss";
import router from "./router";

createApp(App).use(router).mount("#app");
