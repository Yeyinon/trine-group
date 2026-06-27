<script setup>
const stats = [
  {
    value: "150+",
    label: "Clients satisfaits",
  },
  {
    value: "20+",
    label: "Services",
  },
  {
    value: "98%",
    label: "Satisfaction",
  },
  {
    value: "10+",
    label: "Années d'expérience",
  },
]
</script>

<template>
  <div class="grid grid-cols-2 gap-6 py-20 md:grid-cols-4">

    <div
      v-for="stat in stats"
      :key="stat.label"
      class="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
    >

      <h2 class="text-4xl font-bold text-blue-400">

        {{ stat.value }}

      </h2>

      <p class="mt-3 text-slate-300">

        {{ stat.label }}

      </p>

    </div>

  </div>
</template>