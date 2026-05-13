export const content = {
  fr: {
    nav: {
      menu: "Menu",
      location: "Localisation"
    },
    hero: {
      headline: "VOTRE DOSE D'ÉNERGIE",
      subhead: "Le meilleur du healthy shake et du café barista pour booster votre journée.",
      cta: "Commandez"
    },
    menuSection: {
      title: "NOTRE MENU",
      categories: ["SHAKE", "DRINK", "BARISTA"],
      addon: "Booste ton drink (+2.50€) : Créatine, Collagène, Fibres"
    },
    footer: {
      address: "16 av Sidoine Apollinaire, 69009 Vaise",
      hours: "Lun - Ven : 11h - 19h",
      follow: "Suivez-nous"
    }
  },
  en: {
    nav: {
      menu: "Menu",
      location: "Location"
    },
    hero: {
      headline: "YOUR ENERGY DOSE",
      subhead: "The best healthy shakes and barista coffee to fuel your day.",
      cta: "Order Now"
    },
    menuSection: {
      title: "OUR MENU",
      categories: ["SHAKE", "DRINK", "BARISTA"],
      addon: "Boost your drink (+2.50€): Creatine, Collagen, Fiber"
    },
    footer: {
      address: "16 av Sidoine Apollinaire, 69009 Vaise",
      hours: "Mon - Fri : 11am - 7pm",
      follow: "Follow Us"
    }
  }
};

export const menuData = {
  SHAKE: [
    { id: 1, name: "Snikers", description: { fr: "Chocolat, Beurre de Cacahuète", en: "Chocolate, Peanut Butter" }, price: "8.40€" },
    { id: 2, name: "Oreo", description: { fr: "Cookie, Oreo", en: "Cookie, Oreo" }, price: "8.40€" },
    { id: 3, name: "Pina Colada", description: { fr: "Banane, Ananas, Coco", en: "Banana, Pineapple, Coconut" }, price: "8.40€" },
    { id: 4, name: "Banana Fresh", description: { fr: "Banane, Fruits Rouges", en: "Banana, Red Berries" }, price: "8.40€" },
  ],
  DRINK: [
    { id: 5, name: "Summer Bliss", description: { fr: "Coco, Ananas", en: "Coconut, Pineapple" }, price: "L: 4.90€ | XL: 6.90€" },
    { id: 6, name: "Purple Star", description: { fr: "Fruits Rouges, Cassis", en: "Red Berries, Blackcurrant" }, price: "L: 4.90€ | XL: 6.90€" },
    { id: 7, name: "Dark Ruby", description: { fr: "Fraise, Cassis", en: "Strawberry, Blackcurrant" }, price: "L: 4.90€ | XL: 6.90€" },
  ],
  BARISTA: [
    { id: 8, name: "Expresso Protéiné", description: { fr: "", en: "100% Robusta Coffee Latte" }, price: "3.50€" },
    { id: 9, name: "Macchiato Protéiné", description: { fr: "Options: Cookie dough, Pecan Caramel", en: "Options: Cookie dough, Pecan Caramel" }, price: "5.70€" },
  ]
};
