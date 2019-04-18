import Vue from 'vue';
import Router from 'vue-router';
import echarts1 from '@/components/echarts1';
import echarts2 from '@/components/echarts2';
import login from '@/page/login';
import data from '@/page/data';
import introduce from '@/page/introduce';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/data',
      name: 'data',
      component: data,
      children: [
        {
          path: '/echarts1',
          name: 'echarts1',
          component: echarts1,
        },
        {
          path: '/echarts2',
          name: 'echarts2',
          component: echarts2,
        },
      ]
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    
  ],
});
