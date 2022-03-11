import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/create-employee/CreateEmployeeComponent'),
  },
  {
    path: '/list-employees',
    name: 'list',
    component: () => import('../components/pages/list-employee/ListEmployeeComponent'),
  },
  {
    path: '/edit-employee/:id',
    name: 'update',
    component: () => import('../components/pages/edit-employee/EditEmployeeComponent'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
