import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routeConfig from './router-config'
Vue.use(VueRouter)
import VueKonva from 'vue-konva'

Vue.use(VueKonva)

const router = new VueRouter({
	routes: routeConfig
});



new Vue({
    el: '#app',
	router,
	render: h => h(App)
})
