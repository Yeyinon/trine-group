<script setup>
import { services } from "../../data/services"

import SectionTitle from "../common/SectionTitle.vue"
import ServiceCard from "../common/ServiceCard.vue"
</script>

<template>

<section class="bg-slate-50 py-24">

    <div class="mx-auto max-w-7xl px-6">

        <SectionTitle
            badge="Nos Services"
            title="Des solutions complètes d'import-export"
            description="Nous accompagnons nos clients avec des solutions fiables, rapides et adaptées à leurs besoins internationaux."
        />

        <div
            class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >

            <ServiceCard
                v-for="service in services"
                :key="service.title"

                :icon="service.icon"
                :title="service.title"
                :description="service.description"
            />

        </div>

    </div>

</section>

</template>