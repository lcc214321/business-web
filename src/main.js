// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import axios from 'axios';
import 'iview/dist/styles/iview.css';
import { Notice } from 'iview';

Vue.config.productionTip = false;

Vue.use(iView);

Vue.prototype.$http = axios;
Vue.prototype.$Notice = Notice;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});