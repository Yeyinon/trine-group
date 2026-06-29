<script setup>
import heroImage from "../../assets/images/hero.jpg"
import { Users, Award } from "lucide-vue-next"
</script>

<template>
    <div class="relative flex justify-center">

        <img :src="heroImage" alt="Dieu Un et Trine Group"
            class="h-[550px] w-full max-w-lg rounded-3xl object-cover shadow-2xl ">

        <div class="absolute -left-6 top-10 rounded-2xl bg-white p-4 shadow-xl">

            <div class="flex items-center gap-3">

                <Users class="h-8 w-8 text-blue-600" />

                <div>

                    <h3 class="text-2xl font-bold text-slate-900">

                        150+

                    </h3>

                    <p class="text-sm text-slate-500">

                        Clients satisfaits

                    </p>

                </div>

            </div>

        </div>

        <!-- Carte Expérience -->
        <div class="absolute -right-6 bottom-10 rounded-2xl bg-white p-4 shadow-xl">

            <div class="flex items-center gap-3">

                <Award class="h-8 w-8 text-blue-600" />

                <div>

                    <h3 class="text-2xl font-bold text-slate-900">

                        10+

                    </h3>

                    <p class="text-sm text-slate-500">

                        Années d'expérience

                    </p>

                </div>

            </div>

        </div>

    </div>
</template>