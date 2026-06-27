<template>
  <section class="relative bg-slate-950 text-white overflow-hidden">

    <div
    class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_40%)]">
</div>

    <div class="max-w-7xl mx-auto px-6">

      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-screen">

        <HeroContent />

        <HeroImage />

      </div>

      <HeroStats />

    </div>

  </section>
</template>

<script setup>
import HeroContent from "./HeroContent.vue"
import HeroImage from "./HeroImage.vue"
import HeroStats from "./HeroStats.vue"
</script>