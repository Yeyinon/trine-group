<script setup>
defineProps({
  icon: [Object, Function],
  title: String,
  value: String,
})
</script>

<template>

<div
    class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
>

    <component
        :is="icon"
        class="mb-5 h-10 w-10 text-blue-600"
    />

    <h3 class="font-bold text-slate-900">

        {{ title }}

    </h3>

    <p class="mt-2 text-slate-600">

        {{ value }}

    </p>

</div>

</template>