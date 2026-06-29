<script setup>
import { stats } from "../../data/stats"
</script>

<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4 gap-4 md:gap-6 p-5 md:p-6">

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
    </div>
  </section>
</template>