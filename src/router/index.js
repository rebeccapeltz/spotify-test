import Vue from 'vue';
import Router from 'vue-router';
import KeywordSearch from '@/components/KeywordSearch';
import Authorize from '@/components/Authorize';


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'KeywordSearch',
      component: KeywordSearch
    },
    {
      path: '/authorize',
      name: 'Authorize',
      component: Authorize
    }
  ]
})
