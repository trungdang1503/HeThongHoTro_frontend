import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/Login.vue'; // Import trang Login
import DashboardView from '../views/Dashboard.vue'; // Ví dụ trang được bảo vệ

const routes = [
  { path: '/login', name: 'Login', component: LoginView },
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true } // Đánh dấu route này cần xác thực
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Bảo vệ các route yêu cầu xác thực
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user-token');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    // Nếu route yêu cầu đăng nhập và người dùng chưa có token, chuyển về trang login
    next('/login');
  } else {
    next(); // Nếu có token, cho phép đi tiếp
  }
});

export default router;