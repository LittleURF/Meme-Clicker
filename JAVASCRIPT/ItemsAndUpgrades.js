var items = [

  item0 = {
    id: 'item0',
    name: 'Feels Bad Man',
    firstPrice: 10, // price of the first bought item
    price: 10,
    pps: 1,
    amount: 0,
    totalPps: 0
  },

  item1 = {
    id: 'item1',
    name: 'MADE YOU LOOK',
    firstPrice: 250,
    price: 250,
    pps: 10,
    amount: 0,
    totalPps: 0
  },

  item2 = {
    id: 'item2',
    name: 'Salt',
    firstPrice: 2000,
    price: 2000,
    pps: 100,
    amount: 0,
    totalPps: 0
  },

  item3 = {
    id: 'item3',
    name: 'Wednesday Frog',
    firstPrice: 50000,
    price: 50000,
    pps: 1000,
    amount: 0,
    totalPps: 0
  },
  
  item4 = {
      id: 'item4',
      name: 'Kermit',
      firstPrice: 300000,
      price: 300000,
      pps: 5500,
      amount: 0,
      totalPps: 0
    },
  
    item5 = {
      id: 'item5',
      name: 'Spongebob',
      firstPrice: 1200000,
      price: 1200000,
      pps: 23000,
      amount: 0,
      totalPps: 0
    },
  
    item6 = {
      id: 'item6',
      name: 'Dat Boi',
      firstPrice: 6500000,
      price: 6500000,
      pps: 113000,
      amount: 0,
      totalPps: 0
    },

    item7 = {
      id: 'item7',
      name: 'Spooky Scary Skeleton',
      firstPrice: 36000000,
      price: 36000000,
      pps: 550000,
      amount: 0,
      totalPps: 0
    },

    item8 = {
      id: 'item8',
      name: 'Distracted Boyfriend',
      firstPrice: 215000000,
      price: 215000000,
      pps: 2400000,
      amount: 0,
      totalPps: 0
    },

    item9 = {
      id: 'item9',
      name: 'Feels Amazing Man',
      firstPrice: 1200000000,
      price: 1200000000,
      pps: 11400000,
      amount: 0,
      totalPps: 0
    },

    item10 = {
      id: 'item10',
      name: 'Gachi',
      firstPrice: 7700000000,
      price: 7700000000,
      pps: 51000000,
      amount: 0,
      totalPps: 0
    },

    item11 = {
      id: 'item11',
      name: 'Grey Face',
      firstPrice: 85500000000,
      price: 85500000000,
      pps: 231400000,
      amount: 0,
      totalPps: 0
    },
]

var upgrades = [
  
  upgrade0 =  {
    upgradedItem: item0,
    effectivness: 50,
    price: 250,
    bought: false,
  },
  upgrade1 =  {
    upgradedItem: item0,
    effectivness: 100,
    price: 1500,
    bought: false,
  },

  upgrade2 =  {
    upgradedItem: item1,
    effectivness: 50,
    price: 10000,
    bought: false,
  },

  upgrade3 =  {
    upgradedItem: item1,
    effectivness: 100,
    price: 100000,
    bought: false,
  },

  upgrade4 =  {
    upgradedItem: item2,
    effectivness: 50,
    price: 2500,
    bought: false,
  },

  upgrade5 =  {
    upgradedItem: item2,
    effectivness: 100,
    price: 10000,
    bought: false,
  },

  upgrade6 =  {
    upgradedItem: item3,
    effectivness: 50,
    price: 55000,
    bought: false,
  },

  upgrade7 =  {
    upgradedItem: item3,
    effectivness: 100,
    price: 200000,
    bought: false,
  },

  upgrade8 =  {
    upgradedItem: item4,
    effectivness: 50,
    price: 15000,
    bought: false,
  },

  upgrade9 =  {
    upgradedItem: item4,
    effectivness: 100,
    price: 100500,
    bought: false,
  },

  upgrade10 =  {
    upgradedItem: item5,
    effectivness: 50,
    price: 2000000,
    bought: false,
  },

  upgrade11 =  {
    upgradedItem: item5,
    effectivness: 100,
    price: 50000000,
    bought: false,
  },
  
  upgrade12 =  {
    upgradedItem: item6,
    effectivness: 50,
    price: 50000000,
    bought: false,
  },

  upgrade13 =  {
    upgradedItem: item6,
    effectivness: 100,
    price: 50000000,
    bought: false,
  },

  upgrade14 =  {
    upgradedItem: item7,
    effectivness: 50,
    price: 50000000,
    bought: false,
  },

  upgrade15 =  {
    upgradedItem: item7,
    effectivness: 100,
    price: 50000000,
    bought: false,
  },

  upgrade16 =  {
    upgradedItem: item8,
    effectivness: 50,
    price: 50000000,
    bought: false,
  },

  upgrade17 =  {
    upgradedItem: item8,
    effectivness: 100,
    price: 50000000,
    bought: false,
  },

  upgrade18 =  {
    upgradedItem: item9,
    effectivness: 50,
    price: 50000000,
    bought: false,
  },

  upgrade19 =  {
    upgradedItem: item9,
    effectivness: 100,
    price: 50000000,
    bought: false,
  },

  upgrade20 =  {
    upgradedItem: item10,
    effectivness: 50,
    price: 50000000,
    bought: false,
  },

  upgrade21 =  {
    upgradedItem: item10,
    effectivness: 100,
    price: 50000000,
    bought: false,
  },

  upgrade22 =  {
    upgradedItem: item11,
    effectivness: 50,
    price: 50000000,
    bought: false,
  },

  upgrade23 =  {
    upgradedItem: item11,
    effectivness: 100,
    price: 50000000,
    bought: false,
  },

  
];

var itemDOM =  document.getElementsByClassName('shop-item'); // array of every item UI element
var upgradesDOM = document.getElementsByClassName('upgrade-image'); // array of every upgrade UI element