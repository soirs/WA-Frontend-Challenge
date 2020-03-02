const PRODUCTS = [
  {
    npkId: "ZB6114BO",
    productId: 398177,
    url:
      "www.whiteaway.com/hus-have/stoevsuger/haand-stoevsuger/product/electrolux-zb6114bo-rapido-14-4v-li-ion",
    name: "Electrolux ZB6114BO",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/haandstoevsugere/zb6114bo.jpg",
    brand: "Electrolux",
    price: 502
  },
  {
    npkId: "HD9650/90",
    productId: 668620,
    url:
      "www.whiteaway.com/koekkenudstyr/madlavning-grill/frituregryde/product/philips-hd9650-90",
    name: "Philips HD9650/90 XXL Air Fry",
    brand: "Philips",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/frituregryde/hd9650-90.jpg",
    price: 653
  },
  {
    npkId: "AD-19130003",
    productId: 1148375,
    url:
      "www.whiteaway.com/koekkenudstyr/kaffe-the/el-kedel/product/moomin-ceramic-0-8l-53163",
    name: "Moomin Ceramic, 0.8L",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/el-kedel/ad-19130003.jpg",
    brand: "Moomin",
    price: 599
  },
  {
    npkId: "HX9392/39",
    productId: 838869,
    url:
      "www.whiteaway.com/personlig-pleje/tandpleje/eltandboerste/product/philips-hx9392-39",
    name: "Philips HX9392/39",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/eltandboerste/hx9392-39.jpg",
    brand: "Philips",
    price: 2699
  },
  {
    npkId: "CC-MINIFRIDGE",
    productId: 852892,
    url:
      "www.whiteaway.com/hvidevarer/koeleskab/mini-koeleskab/product/coca-cola-minifridge",
    name: "Coca-Cola Minifridge",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/mini-koeleskabe/cc-minifridge.jpg",
    brand: "Climadiff",
    price: 1499
  },
  {
    npkId: "FT065",
    productId: 137690,
    url:
      "www.whiteaway.com/personlig-pleje/sundhed/termometer/product/beurer-ft65-testvinder",
    name: "BEURER FT65 ",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/beurer/termometer/ft065.jpg",
    brand: "Beurer",
    price: 249
  },
  {
    npkId: "BF700",
    productId: 266981,
    url:
      "www.whiteaway.com/personlig-pleje/sundhed/badevaegt/product/beurer-bf700-taenk-testvinder-2016",
    name: "BEURER BF700",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/beurer/kropsanalysevagt/bf700.jpg",
    brand: "Beurer",
    price: 378
  },
  {
    npkId: "R-642BKW",
    productId: 687704,
    url:
      "www.whiteaway.com/hvidevarer/mikroboelgeovn/fritstaaende-mikroboelgeovn/product/sharp-r-642bkw",
    name: "Sharp R-642BKW",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/sharp/fritstaaende-mikroovne/r-642bkw.jpg",
    brand: "Sharp",
    price: 711
  },
  {
    npkId: "DUALIT-1392",
    productId: 333819,
    url:
      "www.whiteaway.com/koekkenudstyr/madlavning-grill/broedrister/product/dualit-2-slot-lite-canvas-white",
    name: "Dualit Lite Toaster Canvas",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/dualit/broedristere/dualit-1392.jpg",
    brand: "Dualit",
    price: 840
  },
  {
    npkId: "49980-SC",
    productId: 632107,
    url:
      "www.whiteaway.com/koekkenudstyr/kaffe-the/kaffemaskine/product/2-way-brewer",
    name: "Hamilton Beach 49980-SC",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/hamilton-beach/kaffemaskine/49980-sc.jpg",
    brand: "Hamilton Beach",
    price: 549
  },
  {
    npkId: "MG145",
    productId: 13711,
    url:
      "www.whiteaway.com/personlig-pleje/velvaere/massageapparat/product/beurer-mg145-massagepude",
    name: "BEURER MG145",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod/Beurer/beurer-massagepude-mg145-1.jpg",
    brand: "Beurer",
    price: 499
  },
  {
    npkId: "CS2972",
    productId: 642044,
    url:
      "www.whiteaway.com/hvidevarer/ovn/mini-ovn/product/caso-miniovn-to26-26-l",
    name: "Caso Miniovn TO26, 26 L",
    image: "https://images.wagcdn.com/500/500/fill/p/prod_auto/caso/cs2972.jpg",
    brand: "Caso",
    price: 1799
  },
  {
    npkId: "AGK-12490",
    productId: 1218015,
    url:
      "www.whiteaway.com/hus-have/strygning/haandsteamer/product/royal-pro-steamer",
    name: "Royal Pro Steamer",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/royal/haandsteamer/agk-12490.jpg",
    brand: "Royal",
    price: 699
  },
  {
    npkId: "C454E",
    productId: 1062515,
    url:
      "www.whiteaway.com/personlig-pleje/haarpleje/kroellejern/product/babyliss-c454e",
    name: "Babyliss C454E",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/babyliss/kroellejern/c454e.jpg",
    brand: "Babyliss",
    price: 400
  },
  {
    npkId: "EUO9GREEN",
    productId: 574676,
    url:
      "www.whiteaway.com/hus-have/stoevsuger/stoevsuger/product/electrolux-euo9green-ultraone-green-aaaa",
    name: "Electrolux EUO9GREEN",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/stoevsuger/euo9green.png",
    brand: "Electrolux",
    price: 1190
  },
  {
    npkId: "ROOMBA-S9558+",
    productId: 1062602,
    url:
      "www.whiteaway.com/hus-have/stoevsuger/robot-stoevsuger/product/irobot-roomba-s9558",
    name: "iRobot Roomba S9558+",
    image:
      "https://images.wagcdn.com/500/500/fill/p/prod_auto/robot-stoevsuger/roomba-s9558plus.jpg",
    brand: "iRobot",
    price: 10487
  }
];

export default PRODUCTS;
