<script setup>
import { company } from "../../data/company"
import { values } from "../../data/values"
import aboutImage from "../../assets/images/about.jpg"
import { CheckCircle } from "lucide-vue-next"
</script>

<template>

    <section class="py-24 bg-white">

        <div class="max-w-7xl mx-auto px-6">

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">

                <div class="relative">
                    <img :src="aboutImage" :alt="company.name"
                        class="rounded-3xl shadow-xl w-full h-[550px] object-cover">

                    <div class="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-2xl">

                        <h3 class="text-3xl font-bold">

                            10+

                        </h3>

                        <p>

                            Années d'expérience

                        </p>

                    </div>

                </div>

                <div>

                    <span class="text-blue-600 font-semibold uppercase tracking-widest">

                        À PROPOS

                    </span>

                    <h2 class="mt-4 text-5xl font-bold text-slate-900">

                        {{ company.about.title }}

                    </h2>

                    <p class="mt-6 text-lg leading-8 text-slate-600">

                        {{ company.about.description }}

                    </p>

                    <div class="mt-10 space-y-5">

                        <div v-for="value in company.values" :key="value" class="flex items-center gap-4">

                            <CheckCircle class="w-6 h-6 text-blue-600" />

                            <span class="text-slate-700">

                                {{ value }}

                            </span>

                        </div>

                    </div>

                    <button
                        class="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">

                        En savoir plus

                    </button>

                </div>

            </div>

        </div>

    </section>

</template>