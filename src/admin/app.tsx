import type { StrapiApp } from "@strapi/strapi/admin";

import logoMB from "./extensions/logo.png";
import faviconMB from "./extensions/favicon.png";

export default {
  config: {
    auth: {
      logo: logoMB,
    },

    menu: {
      logo: logoMB,
    },

    head: {
      title: "Backoffice Mwango Brain",
    },

    tutorials: false,

    notifications: {
      releases: false,
    },

    translations: {
      en: {
        "Auth.form.welcome.title": "Backoffice Mwango Brain",
        "Auth.form.welcome.subtitle": "Iniciar sessão",

        "app.components.LeftMenu.navbrand.title":
          "Backoffice Mwango Brain",

        "app.components.LeftMenu.navbrand.workplace":
          "Mwango Brain",
      },
    },
  },

  bbootstrap(app: StrapiApp) {
    console.log(app);
  },
};