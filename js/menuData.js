// Menu data structure containing categorized items for the restaurant/bar website
// Organized by main categories (e.g., starters, mains) with subcategories and item details
const menuData = {
  //=====FOOD======//
  starters: {
    "salads-starters": [
      {
        name: "Smoked Plantain Carpaccio",
        description:
          "Thin-sliced caramelized plantain with citrus dressing and chili flakes.",
        price: "₦4,500",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "Coconut Pepper Soup",
        description:
          "A rich West-African broth with seafood essence, infused with coconut cream.",
        price: "₦5,200",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "Crab & Avocado Tartine",
        description:
          "Fresh crab salad on toasted brioche with avocado puree and lemon zest.",
        price: "₦6,000",
        image: "assets/Skybar shrimp blast.png",
      },
    ],
  },
  //====MAINS====//
  mains: {
    all: [
      {
        name: "Concave Jollof Risotto",
        description:
          "Smoky rice cooked in roasted pepper base with grilled prawns and basil oil.",
        price: "₦9,800",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
      {
        name: "Herb-Seared Chicken Supreme",
        description:
          "Served with yam croquettes, green peppercorn sauce, and charred vegetables.",
        price: "₦11,500",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
      {
        name: "Lankafushi Pasta",
        description:
          "Tagliatelle tossed in creamy coconut sauce, chili oil, and spiced seafood.",
        price: "₦10,700",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
    ],
  },

  //====PASTA====//
  grill: {
    all: [
      {
        name: "Smoked Beef Fillet",
        description:
          "Locally sourced beef with black pepper jus and truffle mash.",
        price: "₦14,800",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
      {
        name: "Lamb Chops à la Concave",
        description:
          "Rosemary-grilled lamb with roasted plantain mash and red wine glaze.",
        price: "₦15,200",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
    ],
  },

  //====SIDES====//
  // sides: {
  //   all: [
  //     {
  //       name: "Seafood Rice",
  //       price: 8000,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //     {
  //       name: "Asun Rice",
  //       price: 5000,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //     {
  //       name: "Spicy Hot Lamb Rice",
  //       price: null,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //     {
  //       name: "Special Meat Fried Rice",
  //       price: 4000,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //     {
  //       name: "Coconut Rice",
  //       price: 4000,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //     {
  //       name: "Plain Garlic & Vegetable Rice",
  //       price: 4000,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //     {
  //       name: "Vegetable Fried Rice",
  //       price: 4000,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //     {
  //       name: "Garlic Fried Rice",
  //       price: 4000,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //     {
  //       name: "White Rice",
  //       price: 3500,
  //       description: "",
  //       image: "assets/dish.jpeg",
  //     },
  //   ],
  // },

  seafoods: {
    all: [
      {
        name: "Butter-Poached Lobster Tail",
        description:
          "Served with saffron puree, asparagus tips, and garlic-lime foam.",
        price: "₦16,000",
        image: "assets/Skybar shrimp blast.png",
      },

      {
        name: "Grilled Tiger Prawns",
        description:
          "Charred over open flame, brushed with tamarind glaze and sea salt.",
        price: "₦13,500",
        image: "assets/Skybar shrimp blast.png",
      },
    ],
  },

  //====DESERTS====//
  desserts: {
    cakes: [
      {
        name: "Coconut Cloud",
        description:
          "Velvety coconut mousse with caramelized sugar crust and mango coulis.",
        price: "₦4,200",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
      {
        name: "Dark Chocolate Lava",
        description:
          "Molten chocolate cake served with vanilla-bean ice cream.",
        price: "₦4,800",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
    ],
  },

  //====DRINKS====//
  drinks: {
    cognac: [
      {
        name: "Hennessy XO",
        price: "₦950,000",
        description: "",
        image: "assets/Spectrum of Refreshing Cocktails.png",
      },
      {
        name: "Hennessy VSOP",
        price: "₦200,000",
        description: "",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "Martell Blue Swift",
        price: "₦195,000",
        description: "",
        image: "assets/dish.jpeg",
      },
      {
        name: "Bisquit & Dubouché VSOP",
        price: "₦195,000",
        description: "VSOP luxury Cognac, France",
        image: "assets/remove bg dish.png",
      },
      {
        name: "Rémy Martin VSOP",
        price: "₦190,000",
        description: "",
        image: "assets/Elegant Craft Cocktail Preparation.png",
      },
      {
        name: "Hennessy VS",
        price: "₦135,000",
        description: "",
        image: "assets/Spectrum of Refreshing Cocktails.png",
      },
      {
        name: "Martell VS",
        price: "₦125,000",
        description: "",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
      {
        name: "A. de Fussigny Cognac",
        price: "₦110,000",
        description: "",
        image: "assets/dish.jpeg",
      },
      {
        name: "KWV Barrel 12 Years Old Brandy",
        price: "₦110,000",
        description: "Pot-still distilled, 12 years",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "KWV Barrel 10 Year Pot Still Brandy",
        price: "₦80,000",
        description: "Pot-still distilled, 10 years",
        image: "assets/remove bg dish.png",
      },
    ],

    whiskey: [
      {
        name: "Glenfiddich 26 Years",
        price: "₦2,000,000",
        description: "Rare single malt, Speyside",
        image: "assets/dish.jpeg",
      },
      {
        name: "Glenfiddich 21 Years",
        price: "₦700,000",
        description: "",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
      {
        name: "Teeling 21 Years Old",
        price: "₦700,000",
        description: "Premium Irish 21-year-old",
        image: "assets/Spectrum of Refreshing Cocktails.png",
      },
      {
        name: "Johnnie Walker Blue Label",
        price: "₦650,000",
        description: "Rare blended scotch",
        image: "assets/Elegant Craft Cocktail Preparation.png",
      },
      {
        name: "Glenmorangie Signet",
        price: "₦600,000",
        description: "",
        image: "assets/dish.jpeg",
      },
    ],

    "other-spirits": [
      {
        name: "Avión Cristalino Tequila",
        price: "₦550,000",
        description: "",
        image: "assets/Spectrum of Refreshing Cocktails.png",
      },
      {
        name: "Casa Amigo Agave Azul Gold",
        price: "₦375,000",
        description: "",
        image: "assets/dish.jpeg",
      },
      {
        name: "Aman Rosa Blanco Tequila",
        price: "₦350,000",
        description: "",
        image: "assets/remove bg dish.png",
      },
      {
        name: "Aman Silver Tequila",
        price: "₦340,000",
        description: "Luxury silver tequila",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "Grey Goose",
        price: "₦125,000",
        description: "40% ABV, France",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
    ],

    "red-wine": [
      {
        name: "Escudo Rojo Magnum 1.5L (Luminous VIP)",
        price: "₦155,000",
        description: "Luxury 1.5L magnum",
        image: "assets/dish.jpeg",
      },
      {
        name: "Cooper & Thief Reserve Red Wine",
        price: "₦120,000",
        description: "Aged in bourbon casks, 16% ABV, 2021",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "Cloudy Bay Pinot Noir",
        price: "₦110,000",
        description: "New World, 2018 vintage",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
      {
        name: "Châteauneuf-du-Pape",
        price: "₦95,000",
        description: "AOC, 14.5% ABV, France",
        image: "assets/dish.jpeg",
      },
      {
        name: "Masi Toar Valpolicella",
        price: "₦95,000",
        description: "Classic Italian wine",
        image: "assets/remove bg dish.png",
      },
    ],

    "rose-wines": [
      {
        name: "Grünberger Rosenlese (Sweet)",
        price: "₦35,000",
        description: "7.5% ABV, South Africa",
        image: "assets/dish.jpeg",
      },
      {
        name: "Sweet Lips Rosé (Sweet)",
        price: "₦28,000",
        description: "8.5% ABV, South Africa",
        image: "assets/remove bg dish.png",
      },
      {
        name: "Mateus",
        price: "₦28,000",
        description: "11% ABV, Portugal",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "Four Cousins (Sweet)",
        price: "₦27,000",
        description: "8% ABV, South Africa",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
      {
        name: "4th Street (Sweet)",
        price: "₦22,000",
        description: "8% ABV, Nigeria",
        image: "assets/dish.jpeg",
      },
    ],

    "white-wine": [
      {
        name: "Cloudy Bay Sauvignon Blanc",
        price: "₦115,000",
        description: "Award-winning, 13.5% ABV",
        image: "assets/dish.jpeg",
      },
      {
        name: "Clos Henry Sauvignon Blanc 2021",
        price: "₦65,000",
        description: "Vintage French semi-dry",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "Santa Christina Vermentino (White)",
        price: "₦50,000",
        description: "",
        image: "assets/remove bg dish.png",
      },
      {
        name: "Terrazas Chardonnay",
        price: "₦48,000",
        description: "14% ABV, Argentina",
        image: "assets/dish.jpeg",
      },
      {
        name: "Nederburg Chardonnay",
        price: "₦45,000",
        description: "14% ABV, South Africa",
        image: "assets/Spectrum of Refreshing Cocktails.png",
      },
      {
        name: "Barton & Guestier Sancerre",
        price: "₦45,000",
        description: "Top white from France, dry",
        image: "assets/grilled pan sauteed potato wedges.png",
      },
    ],

    "sparkling-champagne": [
      {
        name: "Dom Pérignon Brut",
        price: "₦900,000",
        description: "Vintage champagne, 12.5% ABV, France",
        image: "assets/dish.jpeg",
      },
      {
        name: "Moët & Chandon Ice",
        price: "₦365,000",
        description: "Imperial demi-sec, 12% ABV",
        image: "assets/Spectrum of Refreshing Cocktails.png",
      },
      {
        name: "Veuve Clicquot Rich",
        price: "₦365,000",
        description: "For luxury lovers",
        image: "assets/remove bg dish.png",
      },
      {
        name: "Veuve Clicquot Brut",
        price: "₦300,000",
        description: "Champagne, brut",
        image: "assets/dish.jpeg",
      },
      {
        name: "Moët & Chandon Nectar",
        price: "₦300,000",
        description: "Imperial demi-sec",
        image: "assets/Skybar shrimp blast.png",
      },
    ],

    cocktails: [
      {
        name: "Concave Signature",
        description:
          "Gin, lime, passionfruit, and smoked cinnamon — the taste of sophistication.",
        price: "₦3,500",
      },
      {
        name: "Lankafushi Breeze",
        description: "Rum, pineapple, coconut water, and a hint of basil mist.",
        price: "₦3,200",
      },
      {
        name: "Midnight Lagoon",
        description:
          "Vodka, blue curaçao, lemon bitters, and activated charcoal ice.",
        price: "₦3,800",
      },
    ],

    "beers-shots": [
      {
        name: "Hennessy VS (Shot)",
        price: "₦6,500",
        description: "30ml",
        image: "assets/dish.jpeg",
      },
      {
        name: "Glenmorangie 10 (Shot)",
        price: "₦5,000",
        description: "30ml",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "JW Black Label (Shot)",
        price: "₦5,000",
        description: "30ml",
        image: "assets/remove bg dish.png",
      },
    ],

    buzzfree: [
      {
        name: "Baileys Milkshake",
        price: "₦9,000",
        description: "Milkshake",
        image: "assets/dish.jpeg",
      },
      {
        name: "Caramel Milkshake",
        price: "₦8,000",
        description: "Full cream caramel",
        image: "assets/remove bg dish.png",
      },
      {
        name: "Oreos Milkshake",
        price: "₦8,000",
        description: "Full cream",
        image: "assets/Skybar shrimp blast.png",
      },
      {
        name: "Strawberry Milkshake",
        price: "₦8,000",
        description: "Milkshake",
        image: "assets/dish.jpeg",
      },
      {
        name: "Apple Milkshake",
        price: "₦8,000",
        description: "Milkshake",
        image: "assets/Spectrum of Refreshing Cocktails.png",
      },
    ],

    "extras-hukkah": [
      {
        name: "Cognac (extra)",
        price: "₦2,500",
        description: "",
        image: "assets/dish.jpeg",
      },
      {
        name: "Gin (extra)",
        price: "₦1,000",
        description: "",
        image: "assets/remove bg dish.png",
      },
    ],

    flavours: [
      {
        name: "Strawberry",
        price: "",
        description: "",
        image: "assets/dish.jpeg",
      },
      {
        name: "Grape",
        price: "",
        description: "",
        image: "assets/remove bg dish.png",
      },
      {
        name: "Blueberry",
        price: "",
        description: "",
        image: "assets/Skybar shrimp blast.png",
      },
    ],
  },

  //====SMOKE====//
  smoke: {
    all: [
      {
        name: "Double Shisha",
        price: 10000,
        description: "",
        image: "assets/dish.jpeg",
      },
      {
        name: "Vip Led Sky Rocket Sheesha",
        price: 8000,
        description:
          "Exclusive with double pipe Puff puff pass. Any choice of Ice/Vodka/Gin",
        image: "assets/dish.jpeg",
      },
      {
        name: "Regular Sheesha",
        price: 7000,
        description: "Any choice of Ice/Vodka/Gin",
        image: "assets/dish.jpeg",
      },
      {
        name: "Rothmans Switch",
        price: 4000,
        description: "Per pack",
        image: "assets/dish.jpeg",
      },
      {
        name: "Esse Exchange Black",
        price: 4000,
        description: "Per pack",
        image: "assets/dish.jpeg",
      },
    ],
  },

  //====HAPPY HOURS====//
  "happy-hours": {
    all: [
      {
        name: "Buy 1 Get 1 Free Cocktails",
        price: null,
        description: "Available during Happy Hours only",
        image: "assets/dish.jpeg",
      },
      {
        name: "Discounted Beers",
        price: null,
        description: "Special offers on selected beers",
        image: "assets/dish.jpeg",
      },
      {
        name: "Half-Price Shots",
        price: null,
        description: "Selected shots at 50% off",
        image: "assets/dish.jpeg",
      },
      {
        name: "Wine Specials",
        price: null,
        description: "Exclusive wine deals during Happy Hours",
        image: "assets/dish.jpeg",
      },
    ],
  },
};

export default menuData;
