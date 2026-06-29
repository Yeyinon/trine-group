<script setup>
import { testimonials } from "../../data/testimonials"

import SectionTitle from "../common/SectionTitle.vue"
import TestimonialCard from "../common/TestimonialCard.vue"
</script>

<template>
  <section class="bg-slate-50 py-24">

    <div class="mx-auto max-w-7xl px-6">

      <SectionTitle
        badge="Témoignages"
        title="Ils nous font confiance"
        description="La satisfaction de nos clients est notre plus grande réussite."
      />

      <div
        class="grid grid-cols-1 gap-8 lg:grid-cols-3"
      >

        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"

          :name="testimonial.name"
          :company="testimonial.company"
          :message="testimonial.message"
          :rating="testimonial.rating"
        />

      </div>

    </div>

  </section>
</template>