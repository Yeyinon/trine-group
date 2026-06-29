<script setup>
import { CheckCircle } from "lucide-vue-next"
const qualities = [
    "Qualité",
    "Innovation",
    "Fiabilité"
]
</script>
<template>

    <div>

        <span class="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-300">

            🏆 Entreprise de confiance

        </span>

        <h1 class="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">

            Votre partenaire de confiance
            pour des solutions professionnelles.

        </h1>

        <p class="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">

            Nous accompagnons les entreprises avec des solutions innovantes,
            des services de qualité et une équipe engagée.

        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">

            <button
                class="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 font-semibold transition duration-300 hover:bg-blue-700 hover:scale-105">
                Découvrir nos services
            </button>

            <button
                class="w-full sm:w-auto rounded-xl border border-slate-600 px-8 py-4 font-semibold transition duration-300 hover:bg-slate-800">
                Nous contacter
            </button>

        </div>

        <div class="mt-8 space-y-4">

            <div v-for="quality in qualities" :key="quality" class="flex items-center gap-3">

                <CheckCircle class="h-5 w-5 text-blue-400" />

                <span class="text-slate-300">

                    {{ quality }}

                </span>

            </div>

        </div>
    </div>

</template>