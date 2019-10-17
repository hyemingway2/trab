import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signin from './views/Signin.vue';
import Signup from './views/Signup.vue';
import Designer from './views/Designer.vue';
import Travel from './views/Travel.vue';
import Sell from './views/Sell.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel,
    },
    {
      path: '/designer',
      name: 'designer',
      component: Designer,
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell,
    },
  ],
});
