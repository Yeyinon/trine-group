<script setup>
defineProps({
  name: String,
  company: String,
  message: String,
  rating: Number,
})
</script>

<template>
  <div
    class="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <!-- Étoiles -->
    <div class="mb-6 flex text-yellow-400">
      <span
        v-for="star in rating"
        :key="star"
        class="text-xl"
      >
        ★
      </span>
    </div>

    <!-- Message -->
    <p class="italic leading-7 text-slate-600">
      "{{ message }}"
    </p>

    <!-- Auteur -->
    <div class="mt-8 border-t pt-6">
      <h3 class="font-bold text-slate-900">
        {{ name }}
      </h3>

      <p class="text-sm text-slate-500">
        {{ company }}
      </p>
    </div>
  </div>
</template>