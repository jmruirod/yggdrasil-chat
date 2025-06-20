<script setup lang="ts"></script>

<template>
  <div class="bg-zinc-900 rounded-sm min-w-md text-white">
    <header class="flex justify-between items-center p-4 border-b border-white/10">
      <div class="flex gap-3 items-center">
        <div class="w-11 h-11 bg-teal-500 rounded-full text-center leading-11 font-bold text-lg">
          A
        </div>
        <div>
          <div class="font-bold">Ana García</div>
          <div class="text-sm text-white/50">En linea</div>
        </div>
      </div>
      <div class="flex">
        <button
          class="size-8 hover:bg-zinc-950 active:scale-90 rounded-full transition-all duration-300"
        >
          T
        </button>
        <button
          class="size-8 hover:bg-zinc-950 active:scale-90 rounded-full transition-all duration-300"
        >
          V
        </button>
        <button
          class="size-8 hover:bg-zinc-950 active:scale-90 rounded-full transition-all duration-300"
        >
          M
        </button>
      </div>
    </header>
    <main class="p-4 flex flex-col gap-6 border-b border-white/10">
      <div class="flex justify-start">
        <div class="bg-zinc-950 px-4 py-2 rounded-2xl max-w-[70%]">
          <div>¡Hola! ¿Cómo estás?</div>
          <div class="text-white/50 font-mono text-sm">10:30</div>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="bg-teal-600 px-4 py-2 rounded-2xl max-w-[70%]">
          <div>¡Hola! Todo bien, gracias. ¿Y tú qué tal?</div>
          <div class="text-white/50 font-mono text-sm">10:31</div>
        </div>
      </div>
      <div class="flex justify-start">
        <div class="bg-zinc-950 px-4 py-2 rounded-2xl max-w-[70%]">
          <div>Muy bien también. ¿Tienes planes para el fin de semana?</div>
          <div class="text-white/50 font-mono text-sm">10:33</div>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="bg-teal-600 px-4 py-2 rounded-2xl max-w-[70%]">
          <div>Sí, pensaba ir al parque si hace buen tiempo</div>
          <div class="text-white/50 font-mono text-sm">10:35</div>
        </div>
      </div>
    </main>
    <footer class="p-4 flex items-center gap-4">
      <input
        class="flex-1 bg-zinc-950 rounded-sm p-2 focus:outline-hidden"
        type="text"
        placeholder="Escribe un mensaje..."
      />
      <button class="bg-teal-600 rounded-sm py-2 px-6 font-bold transition-all active:scale-90">
        Enviar
      </button>
    </footer>
  </div>
</template>
