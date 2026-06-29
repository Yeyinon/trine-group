<script setup>
import { features } from "../../data/whyChooseUs"

import SectionTitle from "../common/SectionTitle.vue"
import ServiceCard from "../common/ServiceCard.vue"
</script>

<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">

      <SectionTitle
        badge="Pourquoi nous choisir"
        title="Votre partenaire de confiance"
        description="Nous mettons notre expertise, notre réseau et notre engagement au service de votre réussite."
      />

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

        <ServiceCard
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />

      </div>

    </div>
  </section>
</template>