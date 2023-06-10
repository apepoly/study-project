import { createRouter, createWebHistory } from 'vue-router'
import {useStore} from "@/stores";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/index',
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/IndexView.vue'),
      children: [
        {
          path: '/introduction',
          name: 'introduction',
          component: () => import('@/components/main/IntroductionOfPandaParkPage.vue')
        },
        {
          path: '/knowledge',
          name: 'knowledge',
          component: () => import('@/components/main/Knowledge.vue')
        },
        {
          path: '/news',
          name: 'news',
          component: () => import('@/components/main/News.vue')
        },
        {
          path: '/travel',
          name: 'travel',
          component: () => import('@/components/main/Travel.vue')
        }
      ]
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
      children: [
        {
          path: '',
          name: 'welcome-login',
          component: () => import('@/components/welcome/LoginPage.vue')
        }, {
          path: 'register',
          name: 'welcome-register',
          component: () => import('@/components/welcome/RegisterPage.vue')
        }, {
          path: 'forget',
          name: 'welcome-forget',
          component: () => import('@/components/welcome/ForgetPage.vue')
        },
      ]
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('@/views/ManageView.vue'),
      children: [
        {
          path: '/userList',
          name: 'userList',
          component: () => import('@/components/manage/UserList.vue')
        }, {
          path: '/userAuthApply',
          name: 'userAuthApply',
          component: () => import('@/components/manage/UserAuthApply.vue')
        }, {
          path: '/postList',
          name: 'postList',
          component: () => import('@/components/manage/postList.vue')
        }, {
          path: '/postApply',
          name: 'postApply',
          component: () => import('@/components/manage/postApply.vue')
        }, {
          path: '/newsApply',
          name: 'newsApply',
          component: () => import('@/components/manage/newsApply.vue')
        }, {
          path: '/newsList',
          name: 'newsList',
          component: () => import('@/components/manage/newsList.vue')
        }, {
          path: '/foundationList',
          name: 'foundationList',
          component: () => import('@/components/manage/foundationList.vue')
        }, {
          path: '/capitalFlow',
          name: 'capitalFlow',
          component: () => import('@/components/manage/CapitalFlow.vue')
        }
      ]
    },
    {
      path: '/KnowledgeDetail',
      name: 'KnowledgeDetail',
      component: () => import('@/views/KnowledgeView.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const store = useStore()
//   if (store.auth.user != null && to.name.startsWith('welcome-')) {
//     next('/index')
//   // } else if (store.auth.user == null && to.fullPath.startsWith('/index')) {
//   //   next('/login')
//   // } else if (to.matched.length === 0){
//     next('/index')
//   } else {
//     next()
//   }
// })
export default router
