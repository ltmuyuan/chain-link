import { createApp } from 'vue';
import { createPinia } from "pinia";
import App from './App.vue';
import router from './router';
import './assets/styles/app.css';
import Antd from "ant-design-vue";

// import "ant-design-vue/dist/antd.css";
import 'ant-design-vue/dist/antd.variable.min.css';

createApp(App).use(createPinia()).use(router).use(Antd).mount('#app');
