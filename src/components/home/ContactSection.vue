<script setup>
import { contact } from "../../data/contact"

import SectionTitle from "../common/SectionTitle.vue"
import ContactCard from "../common/ContactCard.vue"
</script>

<template>

<section class="bg-white py-24">

    <div class="mx-auto max-w-7xl px-6">

        <SectionTitle
            badge="Contact"
            :title="contact.title"
            :description="contact.description"
        />

        <div
            class="grid gap-8 md:grid-cols-3"
        >

            <ContactCard
                v-for="info in contact.infos"
                :key="info.title"

                :icon="info.icon"
                :title="info.title"
                :value="info.value"
            />

        </div>

        <div class="mt-16 text-center">

            <a
                :href="contact.whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >

                <component
                    :is="contact.whatsappIcon"
                    class="h-6 w-6"
                />

                Discuter sur WhatsApp

            </a>

        </div>

    </div>

</section>

</template>