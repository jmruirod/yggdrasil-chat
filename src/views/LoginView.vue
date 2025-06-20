<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const error = ref<string | null>(null);
const router = useRouter();

const handleLogin = () => {
  error.value = null; // Limpiar errores anteriores
  // Simulación de una llamada a una API de autenticación
  // En una aplicación real, aquí harías una petición HTTP a tu backend
  try {
    if (username.value === "user" && password.value === "password") {
      // Simula un login exitoso
      localStorage.setItem("userToken", "fake-jwt-token"); // Guarda un token o indicador de sesión
      router.push("/"); // Redirige a la página de inicio
    } else {
      error.value = "Usuario o contraseña incorrectos";
    }
  } catch (err) {
    error.value = "Ocurrió un error durante el login";
    console.error("Login error:", err);
  }
};
</script>

<template>
  <div class="bg-zinc-900 rounded-sm min-w-md text-white p-5">
    <header class="flex flex-col items-center">
      <h1 class="mt-2 text-3xl font-bold">YGGDRASIL</h1>
      <h2 class="text-white/50">Conecta con los nueve mundos</h2>
    </header>
    <form action="" @submit.prevent="handleLogin" class="mt-10 flex flex-col gap-8 text-md">
      <div class="flex flex-col gap-2">
        <label for="user" class="text-white/50">Usuario</label>
        <input
          type="text"
          name="user"
          v-model="username"
          class="bg-zinc-950 rounded-sm p-2 border-b-2 border-white/15 focus:outline-hidden focus:border-white"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between">
          <label for="password" class="text-white/50">Contraseña</label>
          <span class="text-teal-300 hover:text-teal-200 cursor-pointer text-[15px]"
            >¿Olvidaste tu contraseña?</span
          >
        </div>
        <input
          type="password"
          name="password"
          v-model="password"
          class="bg-zinc-950 rounded-sm p-2 border-b-2 border-white/15 focus:outline-hidden focus:border-white"
        />
        <div class="min-h-10">
          <p v-if="error" class="text-red-700 text-right">{{ error }}</p>
        </div>
      </div>
      <button
        type="submit"
        class="bg-teal-500 rounded-sm py-2 text-2xl font-bold -translate-y-2 transition-all shadow-[0px_6px_0px_rgb(0,120,111)] active:shadow-none active:translate-y-0"
      >
        Entrar
      </button>
    </form>
  </div>
</template>
