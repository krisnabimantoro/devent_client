import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
//gunakan "router" di Vue dengan plugin "use"
app.use(router);

app.mount("#app");
