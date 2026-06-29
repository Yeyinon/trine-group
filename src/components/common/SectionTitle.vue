<script setup>
defineProps({
  badge: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="mx-auto mb-16 max-w-3xl text-center">

    <span
      class="font-semibold uppercase tracking-[0.25em] text-blue-600"
    >
      {{ badge }}
    </span>

    <h2
      class="mt-4 text-4xl font-bold text-slate-900 md:text-5xl"
    >
      {{ title }}
    </h2>

    <p
      class="mt-6 text-lg leading-8 text-slate-600"
    >
      {{ description }}
    </p>

  </div>
</template>