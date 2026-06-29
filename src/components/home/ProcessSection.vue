<script setup>
import { process } from "../../data/process"

import SectionTitle from "../common/SectionTitle.vue"
import ProcessCard from "../common/ProcessCard.vue"
</script>

<template>

<section class="bg-slate-50 py-24">

    <div class="mx-auto max-w-7xl px-6">

        <SectionTitle
            badge="Notre Processus"
            title="Une méthode simple et efficace"
            description="Chaque projet suit une méthodologie claire afin de garantir qualité, transparence et efficacité."
        />

        <div
            class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4"
        >

            <ProcessCard
                v-for="item in process"
                :key="item.step"

                :step="item.step"
                :title="item.title"
                :description="item.description"
            />

        </div>

    </div>

</section>

</template>