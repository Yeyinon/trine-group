<script setup>
const year = new Date().getFullYear()

const links = [
  "Accueil",
  "À propos",
  "Services",
  "Contact",
]

const services = [
  "Importation",
  "Exportation",
  "Logistique",
  "Transit Douanier",
]
</script>

<template>

<footer class="bg-slate-950 text-white">

    <div class="mx-auto max-w-7xl px-6 py-16">

        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <!-- Logo -->

            <div>

                <h2 class="text-2xl font-bold text-blue-400">

                    Dieu Un et Trine Group

                </h2>

                <p class="mt-6 leading-7 text-slate-400">

                    Votre partenaire de confiance
                    dans l'import-export,
                    la logistique
                    et les échanges internationaux.

                </p>

            </div>

            <!-- Navigation -->

            <div>

                <h3 class="font-bold">

                    Navigation

                </h3>

                <ul class="mt-6 space-y-3">

                    <li
                        v-for="link in links"
                        :key="link"
                    >

                        <a
                            href="#"
                            class="text-slate-400 transition hover:text-blue-400"
                        >

                            {{ link }}

                        </a>

                    </li>

                </ul>

            </div>

            <!-- Services -->

            <div>

                <h3 class="font-bold">

                    Services

                </h3>

                <ul class="mt-6 space-y-3">

                    <li
                        v-for="service in services"
                        :key="service"
                        class="text-slate-400"
                    >

                        {{ service }}

                    </li>

                </ul>

            </div>

            <!-- Contact -->

            <div>

                <h3 class="font-bold">

                    Contact

                </h3>

                <div class="mt-6 space-y-4 text-slate-400">

                    <p>

                        📍 Cotonou, Bénin

                    </p>

                    <p>

                        📧 contact@trinegroup.com

                    </p>

                    <p>

                        📞 +229 00 00 00 00

                    </p>

                </div>

            </div>

        </div>

        <div
            class="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500"
        >

            © {{ year }}

            Dieu Un et Trine Group SARL.

            Tous droits réservés.

        </div>

    </div>

</footer>

</template>