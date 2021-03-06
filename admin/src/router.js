import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Main from './views/Main.vue'

import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'

import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'

import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'

import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'

import AdEdit from './views/AdEdit.vue'
import AdList from './views/AdList.vue'

import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { isPublic: true}
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        { path: '/categories/create', component: CategoryEdit },
        { path: '/categories/list', component: CategoryList },
        // 表示把url里的参数注入到CategoryEdit里
        { path: '/categories/edit/:id', component: CategoryEdit, props: true },

        // 物品
        { path: '/items/create', component: ItemEdit },
        { path: '/items/list', component: ItemList },
        { path: '/items/edit/:id', component: ItemEdit, props: true },
        // 英雄
        { path: '/heroes/create', component: HeroEdit },
        { path: '/heroes/list', component: HeroList },
        { path: '/heroes/edit/:id', component: HeroEdit, props: true },
        // 文章
        { path: '/articles/create', component: ArticleEdit },
        { path: '/articles/list', component: ArticleList },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        // 广告位
        { path: '/ads/create', component: AdEdit },
        { path: '/ads/list', component: AdList },
        { path: '/ads/edit/:id', component: AdEdit, props: true },
        // 管理员
        { path: '/admin_users/create', component: AdminUserEdit },
        { path: '/admin_users/list', component: AdminUserList },
        { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true }
      ]
    },
  ]
})
// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login');
  }
  next()
})
export default router
