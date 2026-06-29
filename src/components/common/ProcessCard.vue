<script setup>
defineProps({
  step: String,
  title: String,
  description: String,
})
</script>

<template>

<div class="relative text-center">

    <div
        class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white shadow-lg"
    >
        {{ step }}
    </div>

    <h3 class="mt-6 text-2xl font-bold text-slate-900">

        {{ title }}

    </h3>

    <p class="mt-4 leading-7 text-slate-600">

        {{ description }}

    </p>

</div>

</template>