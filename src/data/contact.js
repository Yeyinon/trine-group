import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-vue-next"

export const contact = {
  title: "Parlons de votre projet",

  description:
    "Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos opérations d'import-export.",

  whatsapp:
    "https://wa.me/22900000000",

  infos: [
    {
      title: "Téléphone",
      value: "+229 00 00 00 00",
      icon: Phone,
    },

    {
      title: "E-mail",
      value: "contact@trinegroup.com",
      icon: Mail,
    },

    {
      title: "Adresse",
      value: "Cotonou, Bénin",
      icon: MapPin,
    },
  ],

  whatsappIcon: MessageCircle,
}