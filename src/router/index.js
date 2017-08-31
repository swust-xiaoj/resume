import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Layouts from '@/components/layouts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/e',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Layouts',
      component: Layouts
    }
  ]
});
