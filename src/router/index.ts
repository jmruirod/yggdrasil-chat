import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

// Guard de navegación global
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("userToken"); // Simula la verificación de un token
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si la ruta requiere autenticación y el usuario no está autenticado, redirige a login
    next("/login");
  } else if (to.name === "login" && isAuthenticated) {
    // Si el usuario ya está autenticado y trata de ir a la página de login, redirige a home
    next("/");
  } else {
    // Permite el acceso a la ruta
    next();
  }
});

export default router;
