<script setup>
import { markRaw } from "vue"

defineProps({
  icon: {
    type: [Object, Function],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>

<div
    class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
>

    <component
        :is="icon"
        class="h-12 w-12 text-blue-600 transition-transform duration-300 group-hover:scale-110"
    />

    <h3
        class="mt-6 text-xl font-bold text-slate-900"
    >

        {{ title }}

    </h3>

    <p
        class="mt-4 leading-7 text-slate-600"
    >

        {{ description }}

    </p>

</div>

</template>