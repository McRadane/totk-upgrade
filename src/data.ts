import type { IntlShape } from "react-intl";

export type ArmorsIds =
  | "Amber Earrings"
  | "Ancient Hero's Aspect"
  | "Archaic Legwear"
  | "Archaic Tunic"
  | "Archaic Warm Greaves"
  | "Barbarian Armor"
  | "Barbarian Helm"
  | "Barbarian Leg Wraps"
  | "Bokoblin Mask"
  | "Cap of Time"
  | "Cap of Twilight"
  | "Cap of the Hero"
  | "Cap of the Sky"
  | "Cap of the Wild"
  | "Cap of the Wind"
  | "Cece Hat"
  | "Champion's Leathers"
  | "Charged Headdress"
  | "Charged Shirt"
  | "Charged Trousers"
  | "Climber's Bandana"
  | "Climbing Boots"
  | "Climbing Gear"
  | "Dark Hood"
  | "Dark Trousers"
  | "Dark Tunic"
  | "Desert Voe Headband"
  | "Desert Voe Spaulder"
  | "Desert Voe Trousers"
  | "Diamond Circlet"
  | "Ember Headdress"
  | "Ember Shirt"
  | "Ember Trousers"
  | "Evil Spirit Armor"
  | "Evil Spirit Greaves"
  | "Evil Spirit Mask"
  | "Fierce Deity Armor"
  | "Fierce Deity Boots"
  | "Fierce Deity Mask"
  | "Flamebreaker Armor"
  | "Flamebreaker Boots"
  | "Flamebreaker Helm"
  | "Froggy Hood"
  | "Froggy Leggings"
  | "Froggy Sleeve"
  | "Frostbite Headdress"
  | "Frostbite Shirt"
  | "Frostbite Trousers"
  | "Gaiters of the Depths"
  | "Glide Mask"
  | "Glide Shirt"
  | "Glide Tights"
  | "Hood of the Depths"
  | "Horriblin Mask"
  | "Hylian Hood"
  | "Hylian Trousers"
  | "Hylian Tunic"
  | "Korok Mask"
  | "Lizalfos Mask"
  | "Lobster Shirt"
  | "Lynel Mask"
  | "Majora's Mask"
  | "Mask of Awakening"
  | "Midna's Helmet"
  | "Miner's Mask"
  | "Miner's Top"
  | "Miner's Trousers"
  | "Moblin Mask"
  | "Mystic Mask"
  | "Mystic Robe"
  | "Mystic Trousers"
  | "Opal Earrings"
  | "Phantom Armor"
  | "Phantom Greaves"
  | "Phantom Helm"
  | "Radiant Mask"
  | "Radiant Shirt"
  | "Radiant Tights"
  | "Ravio Hood"
  | "Royal Guard Boots"
  | "Royal Guard Cap"
  | "Royal Guard Uniform"
  | "Rubber Armor"
  | "Rubber Helm"
  | "Rubber Tights"
  | "Ruby Circlet"
  | "Sand Boots"
  | "Sapphire Circlet"
  | "Sheik's Mask"
  | "Snow Boots"
  | "Snowquill Headdress"
  | "Snowquill Trousers"
  | "Snowquill Tunic"
  | "Soldier's Armor"
  | "Soldier's Greaves"
  | "Soldier's Helm"
  | "Stealth Chest Guard"
  | "Stealth Mask"
  | "Stealth Tights"
  | "Thunder Helm"
  | "Tingle's Hood"
  | "Tingle's Shirt"
  | "Tingle's Tights"
  | "Topaz Earrings"
  | "Trousers of Awakening"
  | "Trousers of Time"
  | "Trousers of Twilight"
  | "Trousers of the Hero"
  | "Trousers of the Sky"
  | "Trousers of the Wild"
  | "Trousers of the Wind"
  | "Tunic of Awakening"
  | "Tunic of Memories"
  | "Tunic of Time"
  | "Tunic of Twilight"
  | "Tunic of the Depths"
  | "Tunic of the Hero"
  | "Tunic of the Sky"
  | "Tunic of the Wild"
  | "Tunic of the Wind"
  | "Vah Medoh Divine Helm"
  | "Vah Naboris Divine Helm"
  | "Vah Rudania Divine Helm"
  | "Vah Ruta Divine Helm"
  | "Well-Worn Hair Band"
  | "Yiga Armor"
  | "Yiga Mask"
  | "Yiga Tights"
  | "Zant's Helmet"
  | "Zonaite Helm"
  | "Zonaite Shin Guards"
  | "Zonaite Waistguard"
  | "Zora Armor"
  | "Zora Greaves"
  | "Zora Helm";

export type MaterialsIds =
  | "Acorn"
  | "Aerocuda Eyeball"
  | "Aerocuda Wing"
  | "Amber"
  | "Black Bokoblin Horn"
  | "Black Boss Bokoblin Horn"
  | "Black Hinox Horn"
  | "Black Horriblin Horn"
  | "Black Lizalfos Horn"
  | "Black Moblin Horn"
  | "Bladed Rhino Beetle"
  | "Blue Bokoblin Horn"
  | "Blue Boss Bokoblin Horn"
  | "Blue Horriblin Horn"
  | "Blue Lizalfos Horn"
  | "Blue Lizalfos Tail"
  | "Blue Moblin Horn"
  | "Blue Nightshade"
  | "Blue-Maned Lynel Mace Horn"
  | "Blue-Maned Lynel Saber Horn"
  | "Blue-White Frox Fang"
  | "Bokoblin Fang"
  | "Bokoblin Guts"
  | "Bokoblin Horn"
  | "Boss Bokoblin Guts"
  | "Boss Bokoblin Horn"
  | "Bright Caps"
  | "Brightbloom Seeds"
  | "Captain Construct I Horn"
  | "Captain Construct II Horn"
  | "Captain Construct III Horn"
  | "Chillfin Trout"
  | "Chillshroom"
  | "Chuchu Jelly"
  | "Cold Darner"
  | "Cool Safflina"
  | "Courser Bee Honey"
  | "Dark Clump"
  | "Dazzlefruit"
  | "Deep Firefly"
  | "Diamond"
  | "Dinraal's Claw"
  | "Dinraal's Fang"
  | "Dinraal's Horn"
  | "Dinraal's Scale"
  | "Dinraal's Spike"
  | "Electric Darner"
  | "Electric Keese Wing"
  | "Electric Lizalfos Horn"
  | "Electric Lizalfos Tail"
  | "Electric Safflina"
  | "Energetic Rhino Beetle"
  | "Farosh's Claw"
  | "Farosh's Fang"
  | "Farosh's Horn"
  | "Farosh's Scale"
  | "Farosh's Spike"
  | "Fire Fruit"
  | "Fire Keese Wing"
  | "Fire Like Stone"
  | "Fire-Breath Lizalfos Horn"
  | "Fire-Breath Lizalfos Tail"
  | "Fireproof Lizard"
  | "Flint"
  | "Frox Fang"
  | "Frox Fingernail"
  | "Frox Guts"
  | "Giant Brightbloom Seed"
  | "Gibdo Bone"
  | "Gibdo Guts"
  | "Gibdo Wing"
  | "Gleeok Flame Horn"
  | "Gleeok Frost Horn"
  | "Gleeok Guts"
  | "Gleeok Thunder Horn"
  | "Gleeok Wing"
  | "Glowing Cave Fish"
  | "Hearty Bass"
  | "Hearty Lizard"
  | "Hightail Lizard"
  | "Hinox Guts"
  | "Hinox Toenail"
  | "Hinox Tooth"
  | "Horriblin Guts"
  | "Horriblin Horn"
  | "Hot-Footed Frog"
  | "Hyrule Bass"
  | "Ice Fruit"
  | "Ice Keese Wing"
  | "Ice Like Stone"
  | "Ice-Breath Lizalfos Horn"
  | "Ice-Breath Lizalfos Tail"
  | "Keese Eyeball"
  | "Keese Wing"
  | "Large Zonai Charge"
  | "Large Zonaite"
  | "Light Dragon's Claw"
  | "Light Dragon's Fang"
  | "Light Dragon's Horn"
  | "Light Dragon's Scale"
  | "Lizalfos Horn"
  | "Lizalfos Tail"
  | "Lizalfos Talon"
  | "Luminous Stone"
  | "Lynel Guts"
  | "Lynel Hoof"
  | "Lynel Mace Horn"
  | "Lynel Saber Horn"
  | "Mighty Banana"
  | "Mighty Thistle"
  | "Moblin Fang"
  | "Moblin Guts"
  | "Moblin Horn"
  | "Molduga Fin"
  | "Molduga Guts"
  | "Molduga Jaw"
  | "Naydra's Claw"
  | "Naydra's Fang"
  | "Naydra's Horn"
  | "Naydra's Scale"
  | "Naydra's Spike"
  | "Obsidian Frox Fang"
  | "Octo Balloon"
  | "Octorok Eyeball"
  | "Octorok Tentacle"
  | "Opal"
  | "Puffshroom"
  | "Razorclaw Crab"
  | "Razorshroom"
  | "Red Chuchu Jelly"
  | "Ruby"
  | "Rushroom"
  | "Sapphire"
  | "Shock Fruit"
  | "Shock Like Stone"
  | "Silent Princess"
  | "Silent Shroom"
  | "Silver Bokoblin Horn"
  | "Silver Boss Bokoblin Horn"
  | "Silver Lizalfos Horn"
  | "Silver Lynel Mace Horn"
  | "Silver Lynel Saber Horn"
  | "Silver Moblin Horn"
  | "Sizzlefin Trout"
  | "Smotherwing Butterfly"
  | "Sneaky River Snail"
  | "Soldier Construct Horn"
  | "Soldier Construct II Horn"
  | "Soldier Construct III Horn"
  | "Soldier Construct IV Horn"
  | "Star Fragment"
  | "Stealthfin Trout"
  | "Sticky Frog"
  | "Sticky Lizard"
  | "Summerwing Butterfly"
  | "Sundelion"
  | "Sunset Firefly"
  | "Sunshroom"
  | "Swift Carrot"
  | "Swift Violet"
  | "Thunderwing Butterfly"
  | "Topaz"
  | "Voltfin Trout"
  | "Voltfruit"
  | "Warm Darner"
  | "Warm Safflina"
  | "White Chuchu Jelly"
  | "White-Maned Lynel Mace Horn"
  | "White-Maned Lynel Saber Horn"
  | "Winterwing Butterfly"
  | "Yellow Chuchu Jelly"
  | "Zapshroom"
  | "Zonaite";

export interface IDataArmor {
  buyPrice?: number;
  category: "non-upgradable-non-set" | "non-upgradable-set" | "upgradable-non-set" | "upgradable-set";
  id: ArmorsIds;
  name: string;
  order: number;
  rank1?: [MaterialsIds, number][];
  rank2?: [MaterialsIds, number][];
  rank3?: [MaterialsIds, number][];
  rank4?: [MaterialsIds, number][];
  set?: string;
}

export interface IDataMaterial {
  id: MaterialsIds;
  name: string;
  order: number;
}

export const armorsStatic: ArmorsIds[] = [
  "Mask of Awakening",
  "Trousers of Awakening",
  "Tunic of Awakening",
  "Barbarian Armor",
  "Barbarian Helm",
  "Barbarian Leg Wraps",
  "Charged Headdress",
  "Charged Shirt",
  "Charged Trousers",
  "Climber's Bandana",
  "Climbing Boots",
  "Climbing Gear",
  "Gaiters of the Depths",
  "Hood of the Depths",
  "Tunic of the Depths",
  "Desert Voe Headband",
  "Desert Voe Spaulder",
  "Desert Voe Trousers",
  "Ember Headdress",
  "Ember Shirt",
  "Ember Trousers",
  "Fierce Deity Armor",
  "Fierce Deity Boots",
  "Fierce Deity Mask",
  "Flamebreaker Armor",
  "Flamebreaker Boots",
  "Flamebreaker Helm",
  "Froggy Hood",
  "Froggy Leggings",
  "Froggy Sleeve",
  "Frostbite Headdress",
  "Frostbite Shirt",
  "Frostbite Trousers",
  "Glide Mask",
  "Glide Shirt",
  "Glide Tights",
  "Cap of the Hero",
  "Trousers of the Hero",
  "Tunic of the Hero",
  "Hylian Hood",
  "Hylian Trousers",
  "Hylian Tunic",
  "Miner's Mask",
  "Miner's Top",
  "Miner's Trousers",
  "Radiant Mask",
  "Radiant Shirt",
  "Radiant Tights",
  "Royal Guard Boots",
  "Royal Guard Cap",
  "Royal Guard Uniform",
  "Rubber Armor",
  "Rubber Helm",
  "Rubber Tights",
  "Cap of the Sky",
  "Tunic of the Sky",
  "Trousers of the Sky",
  "Snowquill Headdress",
  "Snowquill Trousers",
  "Snowquill Tunic",
  "Soldier's Armor",
  "Soldier's Greaves",
  "Soldier's Helm",
  "Stealth Chest Guard",
  "Stealth Mask",
  "Stealth Tights",
  "Cap of Time",
  "Trousers of Time",
  "Tunic of Time",
  "Cap of Twilight",
  "Trousers of Twilight",
  "Tunic of Twilight",
  "Cap of the Wild",
  "Trousers of the Wild",
  "Tunic of the Wild",
  "Cap of the Wind",
  "Trousers of the Wind",
  "Tunic of the Wind",
  "Yiga Armor",
  "Yiga Mask",
  "Yiga Tights",
  "Zonaite Helm",
  "Zonaite Shin Guards",
  "Zonaite Waistguard",
  "Zora Armor",
  "Zora Greaves",
  "Zora Helm",
  "Ancient Hero's Aspect",
  "Amber Earrings",
  "Champion's Leathers",
  "Diamond Circlet",
  "Opal Earrings",
  "Ruby Circlet",
  "Sand Boots",
  "Sapphire Circlet",
  "Sheik's Mask",
  "Snow Boots",
  "Topaz Earrings",
  "Vah Medoh Divine Helm",
  "Vah Naboris Divine Helm",
  "Vah Rudania Divine Helm",
  "Vah Ruta Divine Helm",
  "Tunic of Memories"
];

export const armorsNonUpgradableStatic: ArmorsIds[] = [
  "Archaic Legwear",
  "Archaic Tunic",
  "Dark Hood",
  "Dark Trousers",
  "Dark Tunic",
  "Evil Spirit Armor",
  "Evil Spirit Greaves",
  "Evil Spirit Mask",
  "Mystic Robe",
  "Mystic Trousers",
  "Mystic Mask",
  "Phantom Armor",
  "Phantom Greaves",
  "Phantom Helm",
  "Tingle's Hood",
  "Tingle's Shirt",
  "Tingle's Tights",
  "Archaic Warm Greaves",
  "Bokoblin Mask",
  "Cece Hat",
  "Horriblin Mask",
  "Korok Mask",
  "Lizalfos Mask",
  "Lynel Mask",
  "Majora's Mask",
  "Midna's Helmet",
  "Moblin Mask",
  "Ravio Hood",
  "Thunder Helm",
  "Well-Worn Hair Band",
  "Zant's Helmet",
  "Lobster Shirt"
];

export const getArmors = (intl: IntlShape): IDataArmor[] => [
  {
    category: "upgradable-set",
    id: "Mask of Awakening",
    name: intl.formatMessage({
      defaultMessage: "Mask of Awakening",
      id: "armor-Mask of Awakening"
    }),
    order: 112,
    rank1: [
      ["Luminous Stone", 10],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Awakening",
      id: "set-Awakening"
    })
  },
  {
    category: "upgradable-set",
    id: "Trousers of Awakening",
    name: intl.formatMessage({
      defaultMessage: "Trousers of Awakening",
      id: "armor-Trousers of Awakening"
    }),
    order: 114,
    rank1: [
      ["Luminous Stone", 10],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Awakening",
      id: "set-Awakening"
    })
  },
  {
    category: "upgradable-set",
    id: "Tunic of Awakening",
    name: intl.formatMessage({
      defaultMessage: "Tunic of Awakening",
      id: "armor-Tunic of Awakening"
    }),
    order: 113,
    rank1: [
      ["Luminous Stone", 10],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Awakening",
      id: "set-Awakening"
    })
  },
  {
    category: "upgradable-set",
    id: "Barbarian Armor",
    name: intl.formatMessage({
      defaultMessage: "Barbarian Armor",
      id: "armor-Barbarian Armor"
    }),
    order: 32,
    rank1: [["Mighty Thistle", 3]],
    rank2: [
      ["Lynel Saber Horn", 2],
      ["Lynel Mace Horn", 2],
      ["Razorshroom", 5]
    ],
    rank3: [
      ["Blue-Maned Lynel Saber Horn", 3],
      ["Blue-Maned Lynel Mace Horn", 3],
      ["Razorclaw Crab", 3]
    ],
    rank4: [
      ["White-Maned Lynel Saber Horn", 3],
      ["White-Maned Lynel Mace Horn", 3],
      ["Bladed Rhino Beetle", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Barbarian",
      id: "set-Barbarian"
    })
  },
  {
    category: "upgradable-set",
    id: "Barbarian Helm",
    name: intl.formatMessage({
      defaultMessage: "Barbarian Helm",
      id: "armor-Barbarian Helm"
    }),
    order: 31,
    rank1: [["Mighty Thistle", 3]],
    rank2: [
      ["Lynel Saber Horn", 2],
      ["Lynel Mace Horn", 2],
      ["Razorshroom", 5]
    ],
    rank3: [
      ["Blue-Maned Lynel Saber Horn", 3],
      ["Blue-Maned Lynel Mace Horn", 3],
      ["Razorclaw Crab", 3]
    ],
    rank4: [
      ["White-Maned Lynel Saber Horn", 3],
      ["White-Maned Lynel Mace Horn", 3],
      ["Bladed Rhino Beetle", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Barbarian",
      id: "set-Barbarian"
    })
  },
  {
    category: "upgradable-set",
    id: "Barbarian Leg Wraps",
    name: intl.formatMessage({
      defaultMessage: "Barbarian Leg Wraps",
      id: "armor-Barbarian Leg Wraps"
    }),
    order: 33,
    rank1: [["Mighty Thistle", 3]],
    rank2: [
      ["Lynel Saber Horn", 2],
      ["Lynel Mace Horn", 2],
      ["Razorshroom", 5]
    ],
    rank3: [
      ["Blue-Maned Lynel Saber Horn", 3],
      ["Blue-Maned Lynel Mace Horn", 3],
      ["Razorclaw Crab", 3]
    ],
    rank4: [
      ["White-Maned Lynel Saber Horn", 3],
      ["White-Maned Lynel Mace Horn", 3],
      ["Bladed Rhino Beetle", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Barbarian",
      id: "set-Barbarian"
    })
  },
  {
    category: "upgradable-set",
    id: "Charged Headdress",
    name: intl.formatMessage({
      defaultMessage: "Charged Headdress",
      id: "armor-Charged Headdress"
    }),
    order: 58,
    rank1: [["Shock Fruit", 3]],
    rank2: [
      ["Electric Lizalfos Horn", 5],
      ["Thunderwing Butterfly", 3]
    ],
    rank3: [
      ["Large Zonai Charge", 3],
      ["Shock Like Stone", 5],
      ["Electric Darner", 5]
    ],
    rank4: [
      ["Gleeok Thunder Horn", 5],
      ["Voltfin Trout", 10],
      ["Large Zonai Charge", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Charged",
      id: "set-Charged"
    })
  },
  {
    category: "upgradable-set",
    id: "Charged Shirt",
    name: intl.formatMessage({
      defaultMessage: "Charged Shirt",
      id: "armor-Charged Shirt"
    }),
    order: 59,
    rank1: [["Shock Fruit", 3]],
    rank2: [
      ["Electric Lizalfos Horn", 5],
      ["Thunderwing Butterfly", 3]
    ],
    rank3: [
      ["Large Zonai Charge", 3],
      ["Shock Like Stone", 5],
      ["Electric Darner", 5]
    ],
    rank4: [
      ["Gleeok Thunder Horn", 5],
      ["Voltfin Trout", 10],
      ["Large Zonai Charge", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Charged",
      id: "set-Charged"
    })
  },
  {
    category: "upgradable-set",
    id: "Charged Trousers",
    name: intl.formatMessage({
      defaultMessage: "Charged Trousers",
      id: "armor-Charged Trousers"
    }),
    order: 60,
    rank1: [["Shock Fruit", 3]],
    rank2: [
      ["Electric Lizalfos Horn", 5],
      ["Thunderwing Butterfly", 3]
    ],
    rank3: [
      ["Large Zonai Charge", 3],
      ["Shock Like Stone", 5],
      ["Electric Darner", 5]
    ],
    rank4: [
      ["Gleeok Thunder Horn", 5],
      ["Voltfin Trout", 10],
      ["Large Zonai Charge", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Charged",
      id: "set-Charged"
    })
  },
  {
    category: "upgradable-set",
    id: "Climber's Bandana",
    name: intl.formatMessage({
      defaultMessage: "Climber's Bandana",
      id: "armor-Climber's Bandana"
    }),
    order: 28,
    rank1: [
      ["Keese Wing", 3],
      ["Rushroom", 3]
    ],
    rank2: [
      ["Electric Keese Wing", 5],
      ["Hightail Lizard", 5]
    ],
    rank3: [
      ["Ice Keese Wing", 8],
      ["Hot-Footed Frog", 10]
    ],
    rank4: [
      ["Fire Keese Wing", 10],
      ["Swift Violet", 20]
    ],
    set: intl.formatMessage({
      defaultMessage: "Climbing",
      id: "set-Climbing"
    })
  },
  {
    category: "upgradable-set",
    id: "Climbing Boots",
    name: intl.formatMessage({
      defaultMessage: "Climbing Boots",
      id: "armor-Climbing Boots"
    }),
    order: 30,
    rank1: [
      ["Keese Wing", 3],
      ["Rushroom", 3]
    ],
    rank2: [
      ["Electric Keese Wing", 5],
      ["Hightail Lizard", 5]
    ],
    rank3: [
      ["Ice Keese Wing", 8],
      ["Hot-Footed Frog", 10]
    ],
    rank4: [
      ["Fire Keese Wing", 10],
      ["Swift Violet", 20]
    ],
    set: intl.formatMessage({
      defaultMessage: "Climbing",
      id: "set-Climbing"
    })
  },
  {
    category: "upgradable-set",
    id: "Climbing Gear",
    name: intl.formatMessage({
      defaultMessage: "Climbing Gear",
      id: "armor-Climbing Gear"
    }),
    order: 29,
    rank1: [
      ["Keese Wing", 3],
      ["Rushroom", 3]
    ],
    rank2: [
      ["Electric Keese Wing", 5],
      ["Hightail Lizard", 5]
    ],
    rank3: [
      ["Ice Keese Wing", 8],
      ["Hot-Footed Frog", 10]
    ],
    rank4: [
      ["Fire Keese Wing", 10],
      ["Swift Violet", 20]
    ],
    set: intl.formatMessage({
      defaultMessage: "Climbing",
      id: "set-Climbing"
    })
  },
  {
    category: "upgradable-set",
    id: "Gaiters of the Depths",
    name: intl.formatMessage({
      defaultMessage: "Gaiters of the Depths",
      id: "armor-Gaiters of the Depths"
    }),
    order: 48,
    rank1: [["Deep Firefly", 3]],
    rank2: [
      ["Dark Clump", 5],
      ["Frox Fang", 3]
    ],
    rank3: [
      ["Frox Fingernail", 3],
      ["Obsidian Frox Fang", 3],
      ["Zonaite", 20]
    ],
    rank4: [
      ["Blue-White Frox Fang", 5],
      ["Large Zonaite", 10],
      ["Frox Guts", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Depths",
      id: "set-Depths"
    })
  },
  {
    category: "upgradable-set",
    id: "Hood of the Depths",
    name: intl.formatMessage({
      defaultMessage: "Hood of the Depths",
      id: "armor-Hood of the Depths"
    }),
    order: 46,
    rank1: [["Deep Firefly", 3]],
    rank2: [
      ["Dark Clump", 5],
      ["Frox Fang", 3]
    ],
    rank3: [
      ["Frox Fingernail", 3],
      ["Obsidian Frox Fang", 3],
      ["Zonaite", 20]
    ],
    rank4: [
      ["Blue-White Frox Fang", 5],
      ["Large Zonaite", 10],
      ["Frox Guts", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Depths",
      id: "set-Depths"
    })
  },
  {
    category: "upgradable-set",
    id: "Tunic of the Depths",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Depths",
      id: "armor-Tunic of the Depths"
    }),
    order: 47,
    rank1: [["Deep Firefly", 3]],
    rank2: [
      ["Dark Clump", 5],
      ["Frox Fang", 3]
    ],
    rank3: [
      ["Frox Fingernail", 3],
      ["Obsidian Frox Fang", 3],
      ["Zonaite", 20]
    ],
    rank4: [
      ["Blue-White Frox Fang", 5],
      ["Large Zonaite", 10],
      ["Frox Guts", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Depths",
      id: "set-Depths"
    })
  },
  {
    buyPrice: 450,
    category: "upgradable-set",
    id: "Desert Voe Headband",
    name: intl.formatMessage({
      defaultMessage: "Desert Voe Headband",
      id: "armor-Desert Voe Headband"
    }),
    order: 19,
    rank1: [["White Chuchu Jelly", 3]],
    rank2: [
      ["White Chuchu Jelly", 5],
      ["Cool Safflina", 3]
    ],
    rank3: [
      ["Ice Keese Wing", 5],
      ["Ice-Breath Lizalfos Tail", 3],
      ["Chillshroom", 5]
    ],
    rank4: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Ice-Breath Lizalfos Tail", 10],
      ["Sapphire", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Desert Voe",
      id: "set-Desert Voe"
    })
  },
  {
    buyPrice: 1300,
    category: "upgradable-set",
    id: "Desert Voe Spaulder",
    name: intl.formatMessage({
      defaultMessage: "Desert Voe Spaulder",
      id: "armor-Desert Voe Spaulder"
    }),
    order: 20,
    rank1: [["White Chuchu Jelly", 3]],
    rank2: [
      ["White Chuchu Jelly", 5],
      ["Cool Safflina", 3]
    ],
    rank3: [
      ["Ice Keese Wing", 5],
      ["Ice-Breath Lizalfos Tail", 3],
      ["Chillshroom", 5]
    ],
    rank4: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Ice-Breath Lizalfos Tail", 10],
      ["Sapphire", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Desert Voe",
      id: "set-Desert Voe"
    })
  },
  {
    buyPrice: 650,
    category: "upgradable-set",
    id: "Desert Voe Trousers",
    name: intl.formatMessage({
      defaultMessage: "Desert Voe Trousers",
      id: "armor-Desert Voe Trousers"
    }),
    order: 21,
    rank1: [["White Chuchu Jelly", 3]],
    rank2: [
      ["White Chuchu Jelly", 5],
      ["Cool Safflina", 3]
    ],
    rank3: [
      ["Ice Keese Wing", 5],
      ["Ice-Breath Lizalfos Tail", 3],
      ["Chillshroom", 5]
    ],
    rank4: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Ice-Breath Lizalfos Tail", 10],
      ["Sapphire", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Desert Voe",
      id: "set-Desert Voe"
    })
  },
  {
    category: "upgradable-set",
    id: "Ember Headdress",
    name: intl.formatMessage({
      defaultMessage: "Ember Headdress",
      id: "armor-Ember Headdress"
    }),
    order: 55,
    rank1: [["Fire Fruit", 3]],
    rank2: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Summerwing Butterfly", 5]
    ],
    rank3: [
      ["Fire Like Stone", 5],
      ["Warm Darner", 7],
      ["Large Zonai Charge", 5]
    ],
    rank4: [
      ["Gleeok Flame Horn", 5],
      ["Sizzlefin Trout", 10],
      ["Large Zonai Charge", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Ember",
      id: "set-Ember"
    })
  },
  {
    category: "upgradable-set",
    id: "Ember Shirt",
    name: intl.formatMessage({
      defaultMessage: "Ember Shirt",
      id: "armor-Ember Shirt"
    }),
    order: 56,
    rank1: [["Fire Fruit", 3]],
    rank2: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Summerwing Butterfly", 5]
    ],
    rank3: [
      ["Fire Like Stone", 5],
      ["Warm Darner", 7],
      ["Large Zonai Charge", 5]
    ],
    rank4: [
      ["Gleeok Flame Horn", 5],
      ["Sizzlefin Trout", 10],
      ["Large Zonai Charge", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Ember",
      id: "set-Ember"
    })
  },
  {
    category: "upgradable-set",
    id: "Ember Trousers",
    name: intl.formatMessage({
      defaultMessage: "Ember Trousers",
      id: "armor-Ember Trousers"
    }),
    order: 57,
    rank1: [["Fire Fruit", 3]],
    rank2: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Summerwing Butterfly", 5]
    ],
    rank3: [
      ["Fire Like Stone", 5],
      ["Warm Darner", 7],
      ["Large Zonai Charge", 5]
    ],
    rank4: [
      ["Gleeok Flame Horn", 5],
      ["Sizzlefin Trout", 10],
      ["Large Zonai Charge", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Ember",
      id: "set-Ember"
    })
  },
  {
    category: "upgradable-set",
    id: "Fierce Deity Armor",
    name: intl.formatMessage({
      defaultMessage: "Fierce Deity Armor",
      id: "armor-Fierce Deity Armor"
    }),
    order: 110,
    rank1: [
      ["Hinox Toenail", 5],
      ["Naydra's Scale", 1]
    ],
    rank2: [
      ["Hinox Tooth", 5],
      ["Naydra's Claw", 1]
    ],
    rank3: [
      ["Hinox Guts", 2],
      ["Naydra's Fang", 1]
    ],
    rank4: [
      ["Lynel Guts", 2],
      ["Naydra's Horn", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Fierce Deity",
      id: "set-Fierce Deity"
    })
  },
  {
    category: "upgradable-set",
    id: "Fierce Deity Boots",
    name: intl.formatMessage({
      defaultMessage: "Fierce Deity Boots",
      id: "armor-Fierce Deity Boots"
    }),
    order: 111,
    rank1: [
      ["Hinox Toenail", 5],
      ["Farosh's Scale", 1]
    ],
    rank2: [
      ["Hinox Tooth", 5],
      ["Farosh's Claw", 1]
    ],
    rank3: [
      ["Hinox Guts", 2],
      ["Farosh's Fang", 1]
    ],
    rank4: [
      ["Lynel Guts", 2],
      ["Farosh's Horn", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Fierce Deity",
      id: "set-Fierce Deity"
    })
  },
  {
    category: "upgradable-set",
    id: "Fierce Deity Mask",
    name: intl.formatMessage({
      defaultMessage: "Fierce Deity Mask",
      id: "armor-Fierce Deity Mask"
    }),
    order: 109,
    rank1: [
      ["Hinox Toenail", 5],
      ["Dinraal's Scale", 1]
    ],
    rank2: [
      ["Hinox Tooth", 5],
      ["Dinraal's Claw", 1]
    ],
    rank3: [
      ["Hinox Guts", 2],
      ["Dinraal's Fang", 1]
    ],
    rank4: [
      ["Lynel Guts", 2],
      ["Dinraal's Horn", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Fierce Deity",
      id: "set-Fierce Deity"
    })
  },
  {
    buyPrice: 700,
    category: "upgradable-set",
    id: "Flamebreaker Armor",
    name: intl.formatMessage({
      defaultMessage: "Flamebreaker Armor",
      id: "armor-Flamebreaker Armor"
    }),
    order: 14,
    rank1: [["Moblin Horn", 3]],
    rank2: [
      ["Moblin Fang", 5],
      ["Fireproof Lizard", 5]
    ],
    rank3: [
      ["Blue Moblin Horn", 5],
      ["Smotherwing Butterfly", 3],
      ["Flint", 15]
    ],
    rank4: [
      ["Black Moblin Horn", 5],
      ["Smotherwing Butterfly", 5],
      ["Flint", 30]
    ],
    set: intl.formatMessage({
      defaultMessage: "Flamebreaker",
      id: "set-Flamebreaker"
    })
  },
  {
    buyPrice: 1200,
    category: "upgradable-set",
    id: "Flamebreaker Boots",
    name: intl.formatMessage({
      defaultMessage: "Flamebreaker Boots",
      id: "armor-Flamebreaker Boots"
    }),
    order: 15,
    rank1: [["Moblin Horn", 3]],
    rank2: [
      ["Moblin Fang", 5],
      ["Fireproof Lizard", 5]
    ],
    rank3: [
      ["Blue Moblin Horn", 5],
      ["Smotherwing Butterfly", 3],
      ["Flint", 15]
    ],
    rank4: [
      ["Black Moblin Horn", 5],
      ["Smotherwing Butterfly", 5],
      ["Flint", 30]
    ],
    set: intl.formatMessage({
      defaultMessage: "Flamebreaker",
      id: "set-Flamebreaker"
    })
  },
  {
    buyPrice: 1400,
    category: "upgradable-set",
    id: "Flamebreaker Helm",
    name: intl.formatMessage({
      defaultMessage: "Flamebreaker Helm",
      id: "armor-Flamebreaker Helm"
    }),
    order: 13,
    rank1: [["Moblin Horn", 3]],
    rank2: [
      ["Moblin Fang", 5],
      ["Fireproof Lizard", 5]
    ],
    rank3: [
      ["Blue Moblin Horn", 5],
      ["Smotherwing Butterfly", 3],
      ["Flint", 15]
    ],
    rank4: [
      ["Black Moblin Horn", 5],
      ["Smotherwing Butterfly", 5],
      ["Flint", 30]
    ],
    set: intl.formatMessage({
      defaultMessage: "Flamebreaker",
      id: "set-Flamebreaker"
    })
  },
  {
    category: "upgradable-set",
    id: "Froggy Hood",
    name: intl.formatMessage({
      defaultMessage: "Froggy Hood",
      id: "armor-Froggy Hood"
    }),
    order: 40,
    rank1: [["Sticky Lizard", 3]],
    rank2: [
      ["Sticky Lizard", 5],
      ["Horriblin Horn", 5]
    ],
    rank3: [
      ["Blue Horriblin Horn", 5],
      ["Sticky Frog", 5]
    ],
    rank4: [
      ["Black Horriblin Horn", 5],
      ["Horriblin Guts", 10],
      ["Opal", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Froggy",
      id: "set-Froggy"
    })
  },
  {
    category: "upgradable-set",
    id: "Froggy Leggings",
    name: intl.formatMessage({
      defaultMessage: "Froggy Leggings",
      id: "armor-Froggy Leggings"
    }),
    order: 42,
    rank1: [["Sticky Lizard", 3]],
    rank2: [
      ["Sticky Lizard", 5],
      ["Horriblin Horn", 5]
    ],
    rank3: [
      ["Blue Horriblin Horn", 5],
      ["Sticky Frog", 5]
    ],
    rank4: [
      ["Black Horriblin Horn", 5],
      ["Horriblin Guts", 10],
      ["Opal", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Froggy",
      id: "set-Froggy"
    })
  },
  {
    category: "upgradable-set",
    id: "Froggy Sleeve",
    name: intl.formatMessage({
      defaultMessage: "Froggy Sleeve",
      id: "armor-Froggy Sleeve"
    }),
    order: 41,
    rank1: [["Sticky Lizard", 3]],
    rank2: [
      ["Sticky Lizard", 5],
      ["Horriblin Horn", 5]
    ],
    rank3: [
      ["Blue Horriblin Horn", 5],
      ["Sticky Frog", 5]
    ],
    rank4: [
      ["Black Horriblin Horn", 5],
      ["Horriblin Guts", 10],
      ["Opal", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Froggy",
      id: "set-Froggy"
    })
  },
  {
    category: "upgradable-set",
    id: "Frostbite Headdress",
    name: intl.formatMessage({
      defaultMessage: "Frostbite Headdress",
      id: "armor-Frostbite Headdress"
    }),
    order: 61,
    rank1: [["Ice Fruit", 3]],
    rank2: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Winterwing Butterfly", 5]
    ],
    rank3: [
      ["Ice Like Stone", 5],
      ["Cold Darner", 5],
      ["Large Zonai Charge", 5]
    ],
    rank4: [
      ["Gleeok Frost Horn", 5],
      ["Chillfin Trout", 10],
      ["Large Zonai Charge", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Frostbite",
      id: "set-Frostbite"
    })
  },
  {
    category: "upgradable-set",
    id: "Frostbite Shirt",
    name: intl.formatMessage({
      defaultMessage: "Frostbite Shirt",
      id: "armor-Frostbite Shirt"
    }),
    order: 62,
    rank1: [["Ice Fruit", 3]],
    rank2: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Winterwing Butterfly", 5]
    ],
    rank3: [
      ["Ice Like Stone", 5],
      ["Cold Darner", 5],
      ["Large Zonai Charge", 5]
    ],
    rank4: [
      ["Gleeok Frost Horn", 5],
      ["Chillfin Trout", 10],
      ["Large Zonai Charge", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Frostbite",
      id: "set-Frostbite"
    })
  },
  {
    category: "upgradable-set",
    id: "Frostbite Trousers",
    name: intl.formatMessage({
      defaultMessage: "Frostbite Trousers",
      id: "armor-Frostbite Trousers"
    }),
    order: 63,
    rank1: [["Ice Fruit", 3]],
    rank2: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Winterwing Butterfly", 5]
    ],
    rank3: [
      ["Ice Like Stone", 5],
      ["Cold Darner", 5],
      ["Large Zonai Charge", 5]
    ],
    rank4: [
      ["Gleeok Frost Horn", 5],
      ["Chillfin Trout", 10],
      ["Large Zonai Charge", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Frostbite",
      id: "set-Frostbite"
    })
  },
  {
    category: "upgradable-set",
    id: "Glide Mask",
    name: intl.formatMessage({
      defaultMessage: "Glide Mask",
      id: "armor-Glide Mask"
    }),
    order: 43,
    rank1: [["Keese Wing", 3]],
    rank2: [
      ["Aerocuda Eyeball", 6],
      ["Keese Wing", 5]
    ],
    rank3: [
      ["Aerocuda Eyeball", 8],
      ["Aerocuda Wing", 6]
    ],
    rank4: [
      ["Gleeok Wing", 12],
      ["Aerocuda Wing", 10],
      ["Gibdo Wing", 8]
    ],
    set: intl.formatMessage({
      defaultMessage: "Glide",
      id: "set-Glide"
    })
  },
  {
    category: "upgradable-set",
    id: "Glide Shirt",
    name: intl.formatMessage({
      defaultMessage: "Glide Shirt",
      id: "armor-Glide Shirt"
    }),
    order: 44,
    rank1: [["Keese Wing", 3]],
    rank2: [
      ["Aerocuda Eyeball", 6],
      ["Keese Wing", 5]
    ],
    rank3: [
      ["Aerocuda Eyeball", 8],
      ["Aerocuda Wing", 6]
    ],
    rank4: [
      ["Gleeok Wing", 12],
      ["Aerocuda Wing", 10],
      ["Gibdo Wing", 8]
    ],
    set: intl.formatMessage({
      defaultMessage: "Glide",
      id: "set-Glide"
    })
  },
  {
    category: "upgradable-set",
    id: "Glide Tights",
    name: intl.formatMessage({
      defaultMessage: "Glide Tights",
      id: "armor-Glide Tights"
    }),
    order: 45,
    rank1: [["Keese Wing", 3]],
    rank2: [
      ["Aerocuda Eyeball", 6],
      ["Keese Wing", 5]
    ],
    rank3: [
      ["Aerocuda Eyeball", 8],
      ["Aerocuda Wing", 6]
    ],
    rank4: [
      ["Gleeok Wing", 12],
      ["Aerocuda Wing", 10],
      ["Gibdo Wing", 8]
    ],
    set: intl.formatMessage({
      defaultMessage: "Glide",
      id: "set-Glide"
    })
  },
  {
    category: "upgradable-set",
    id: "Cap of the Hero",
    name: intl.formatMessage({
      defaultMessage: "Cap of the Hero",
      id: "armor-Cap of the Hero"
    }),
    order: 118,
    rank1: [
      ["Ruby", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Ruby", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Ruby", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Ruby", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Hero",
      id: "set-Hero"
    })
  },
  {
    category: "upgradable-set",
    id: "Trousers of the Hero",
    name: intl.formatMessage({
      defaultMessage: "Trousers of the Hero",
      id: "armor-Trousers of the Hero"
    }),
    order: 120,
    rank1: [
      ["Ruby", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Ruby", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Ruby", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Ruby", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Hero",
      id: "set-Hero"
    })
  },
  {
    category: "upgradable-set",
    id: "Tunic of the Hero",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Hero",
      id: "armor-Tunic of the Hero"
    }),
    order: 119,
    rank1: [
      ["Ruby", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Ruby", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Ruby", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Ruby", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Hero",
      id: "set-Hero"
    })
  },
  {
    buyPrice: 70,
    category: "upgradable-set",
    id: "Hylian Hood",
    name: intl.formatMessage({
      defaultMessage: "Hylian Hood",
      id: "armor-Hylian Hood"
    }),
    order: 4,
    rank1: [["Bokoblin Horn", 5]],
    rank2: [
      ["Blue Bokoblin Horn", 5],
      ["Bokoblin Fang", 3]
    ],
    rank3: [
      ["Black Bokoblin Horn", 5],
      ["Bokoblin Guts", 3],
      ["Amber", 20]
    ],
    rank4: [
      ["Silver Bokoblin Horn", 5],
      ["Bokoblin Guts", 5],
      ["Amber", 30]
    ],
    set: intl.formatMessage({
      defaultMessage: "Hylian",
      id: "set-Hylian"
    })
  },
  {
    buyPrice: 120,
    category: "upgradable-set",
    id: "Hylian Trousers",
    name: intl.formatMessage({
      defaultMessage: "Hylian Trousers",
      id: "armor-Hylian Trousers"
    }),
    order: 6,
    rank1: [["Bokoblin Horn", 5]],
    rank2: [
      ["Blue Bokoblin Horn", 5],
      ["Bokoblin Fang", 3]
    ],
    rank3: [
      ["Black Bokoblin Horn", 5],
      ["Bokoblin Guts", 3],
      ["Amber", 20]
    ],
    rank4: [
      ["Silver Bokoblin Horn", 5],
      ["Bokoblin Guts", 5],
      ["Amber", 30]
    ],
    set: intl.formatMessage({
      defaultMessage: "Hylian",
      id: "set-Hylian"
    })
  },
  {
    buyPrice: 130,
    category: "upgradable-set",
    id: "Hylian Tunic",
    name: intl.formatMessage({
      defaultMessage: "Hylian Tunic",
      id: "armor-Hylian Tunic"
    }),
    order: 5,
    rank1: [["Bokoblin Horn", 5]],
    rank2: [
      ["Blue Bokoblin Horn", 5],
      ["Bokoblin Fang", 3]
    ],
    rank3: [
      ["Black Bokoblin Horn", 5],
      ["Bokoblin Guts", 3],
      ["Amber", 20]
    ],
    rank4: [
      ["Silver Bokoblin Horn", 5],
      ["Bokoblin Guts", 5],
      ["Amber", 30]
    ],
    set: intl.formatMessage({
      defaultMessage: "Hylian",
      id: "set-Hylian"
    })
  },
  {
    category: "upgradable-set",
    id: "Miner's Mask",
    name: intl.formatMessage({
      defaultMessage: "Miner's Mask",
      id: "armor-Miner's Mask"
    }),
    order: 49,
    rank1: [["Brightbloom Seeds", 10]],
    rank2: [
      ["Brightbloom Seeds", 20],
      ["Bright Caps", 5]
    ],
    rank3: [
      ["Giant Brightbloom Seed", 15],
      ["Glowing Cave Fish", 5],
      ["Deep Firefly", 10]
    ],
    rank4: [
      ["Giant Brightbloom Seed", 20],
      ["Diamond", 3],
      ["Large Zonaite", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Miner's",
      id: "set-Miner's"
    })
  },
  {
    category: "upgradable-set",
    id: "Miner's Top",
    name: intl.formatMessage({
      defaultMessage: "Miner's Top",
      id: "armor-Miner's Top"
    }),
    order: 50,
    rank1: [["Brightbloom Seeds", 10]],
    rank2: [
      ["Brightbloom Seeds", 20],
      ["Bright Caps", 5]
    ],
    rank3: [
      ["Giant Brightbloom Seed", 15],
      ["Glowing Cave Fish", 5],
      ["Deep Firefly", 10]
    ],
    rank4: [
      ["Giant Brightbloom Seed", 20],
      ["Diamond", 3],
      ["Large Zonaite", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Miner's",
      id: "set-Miner's"
    })
  },
  {
    category: "upgradable-set",
    id: "Miner's Trousers",
    name: intl.formatMessage({
      defaultMessage: "Miner's Trousers",
      id: "armor-Miner's Trousers"
    }),
    order: 51,
    rank1: [["Brightbloom Seeds", 10]],
    rank2: [
      ["Brightbloom Seeds", 20],
      ["Bright Caps", 5]
    ],
    rank3: [
      ["Giant Brightbloom Seed", 15],
      ["Glowing Cave Fish", 5],
      ["Deep Firefly", 10]
    ],
    rank4: [
      ["Giant Brightbloom Seed", 20],
      ["Diamond", 3],
      ["Large Zonaite", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Miner's",
      id: "set-Miner's"
    })
  },
  {
    buyPrice: 800,
    category: "upgradable-set",
    id: "Radiant Mask",
    name: intl.formatMessage({
      defaultMessage: "Radiant Mask",
      id: "armor-Radiant Mask"
    }),
    order: 34,
    rank1: [
      ["Luminous Stone", 10],
      ["Moblin Guts", 1]
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Moblin Guts", 2]
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Horriblin Guts", 3],
      ["Gibdo Bone", 10]
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Lynel Guts", 3],
      ["Molduga Jaw", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Radiant",
      id: "set-Radiant"
    })
  },
  {
    buyPrice: 800,
    category: "upgradable-set",
    id: "Radiant Shirt",
    name: intl.formatMessage({
      defaultMessage: "Radiant Shirt",
      id: "armor-Radiant Shirt"
    }),
    order: 35,
    rank1: [
      ["Luminous Stone", 10],
      ["Moblin Guts", 1]
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Moblin Guts", 2]
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Horriblin Guts", 3],
      ["Gibdo Bone", 10]
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Lynel Guts", 3],
      ["Molduga Jaw", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Radiant",
      id: "set-Radiant"
    })
  },
  {
    buyPrice: 800,
    category: "upgradable-set",
    id: "Radiant Tights",
    name: intl.formatMessage({
      defaultMessage: "Radiant Tights",
      id: "armor-Radiant Tights"
    }),
    order: 36,
    rank1: [
      ["Luminous Stone", 10],
      ["Moblin Guts", 1]
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Moblin Guts", 2]
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Horriblin Guts", 3],
      ["Gibdo Bone", 10]
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Lynel Guts", 3],
      ["Molduga Jaw", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Radiant",
      id: "set-Radiant"
    })
  },
  {
    category: "upgradable-set",
    id: "Royal Guard Boots",
    name: intl.formatMessage({
      defaultMessage: "Royal Guard Boots",
      id: "armor-Royal Guard Boots"
    }),
    order: 39,
    rank1: [
      ["Boss Bokoblin Horn", 3],
      ["Bokoblin Guts", 3]
    ],
    rank2: [
      ["Blue Boss Bokoblin Horn", 3],
      ["Boss Bokoblin Guts", 3]
    ],
    rank3: [
      ["Black Boss Bokoblin Horn", 3],
      ["Hinox Guts", 3]
    ],
    rank4: [
      ["Silver Boss Bokoblin Horn", 3],
      ["Molduga Guts", 3],
      ["Gleeok Guts", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Royal Guard",
      id: "set-Royal Guard"
    })
  },
  {
    category: "upgradable-set",
    id: "Royal Guard Cap",
    name: intl.formatMessage({
      defaultMessage: "Royal Guard Cap",
      id: "armor-Royal Guard Cap"
    }),
    order: 37,
    rank1: [
      ["Boss Bokoblin Horn", 3],
      ["Bokoblin Guts", 3]
    ],
    rank2: [
      ["Blue Boss Bokoblin Horn", 3],
      ["Boss Bokoblin Guts", 3]
    ],
    rank3: [
      ["Black Boss Bokoblin Horn", 3],
      ["Hinox Guts", 3]
    ],
    rank4: [
      ["Silver Boss Bokoblin Horn", 3],
      ["Molduga Guts", 3],
      ["Gleeok Guts", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Royal Guard",
      id: "set-Royal Guard"
    })
  },
  {
    category: "upgradable-set",
    id: "Royal Guard Uniform",
    name: intl.formatMessage({
      defaultMessage: "Royal Guard Uniform",
      id: "armor-Royal Guard Uniform"
    }),
    order: 38,
    rank1: [
      ["Boss Bokoblin Horn", 3],
      ["Bokoblin Guts", 3]
    ],
    rank2: [
      ["Blue Boss Bokoblin Horn", 3],
      ["Boss Bokoblin Guts", 3]
    ],
    rank3: [
      ["Black Boss Bokoblin Horn", 3],
      ["Hinox Guts", 3]
    ],
    rank4: [
      ["Silver Boss Bokoblin Horn", 3],
      ["Molduga Guts", 3],
      ["Gleeok Guts", 3]
    ],
    set: intl.formatMessage({
      defaultMessage: "Royal Guard",
      id: "set-Royal Guard"
    })
  },
  {
    category: "upgradable-set",
    id: "Rubber Armor",
    name: intl.formatMessage({
      defaultMessage: "Rubber Armor",
      id: "armor-Rubber Armor"
    }),
    order: 23,
    rank1: [
      ["Electric Lizalfos Horn", 1],
      ["Yellow Chuchu Jelly", 3]
    ],
    rank2: [
      ["Yellow Chuchu Jelly", 8],
      ["Voltfruit", 5]
    ],
    rank3: [
      ["Zapshroom", 5],
      ["Electric Lizalfos Tail", 5],
      ["Electric Safflina", 8]
    ],
    rank4: [
      ["Electric Lizalfos Horn", 5],
      ["Topaz", 5],
      ["Electric Lizalfos Tail", 8]
    ],
    set: intl.formatMessage({
      defaultMessage: "Rubber",
      id: "set-Rubber"
    })
  },
  {
    category: "upgradable-set",
    id: "Rubber Helm",
    name: intl.formatMessage({
      defaultMessage: "Rubber Helm",
      id: "armor-Rubber Helm"
    }),
    order: 22,
    rank1: [
      ["Electric Lizalfos Horn", 1],
      ["Yellow Chuchu Jelly", 3]
    ],
    rank2: [
      ["Yellow Chuchu Jelly", 8],
      ["Voltfruit", 5]
    ],
    rank3: [
      ["Zapshroom", 5],
      ["Electric Lizalfos Tail", 5],
      ["Electric Safflina", 8]
    ],
    rank4: [
      ["Electric Lizalfos Horn", 5],
      ["Topaz", 5],
      ["Electric Lizalfos Tail", 8]
    ],
    set: intl.formatMessage({
      defaultMessage: "Rubber",
      id: "set-Rubber"
    })
  },
  {
    category: "upgradable-set",
    id: "Rubber Tights",
    name: intl.formatMessage({
      defaultMessage: "Rubber Tights",
      id: "armor-Rubber Tights"
    }),
    order: 24,
    rank1: [
      ["Electric Lizalfos Horn", 1],
      ["Yellow Chuchu Jelly", 3]
    ],
    rank2: [
      ["Yellow Chuchu Jelly", 8],
      ["Voltfruit", 5]
    ],
    rank3: [
      ["Zapshroom", 5],
      ["Electric Lizalfos Tail", 5],
      ["Electric Safflina", 8]
    ],
    rank4: [
      ["Electric Lizalfos Horn", 5],
      ["Topaz", 5],
      ["Electric Lizalfos Tail", 8]
    ],
    set: intl.formatMessage({
      defaultMessage: "Rubber",
      id: "set-Rubber"
    })
  },
  {
    category: "upgradable-set",
    id: "Cap of the Sky",
    name: intl.formatMessage({
      defaultMessage: "Cap of the Sky",
      id: "armor-Cap of the Sky"
    }),
    order: 130,
    rank1: [
      ["Sapphire", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Sapphire", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Sapphire", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Sapphire", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Sky",
      id: "set-Sky"
    })
  },
  {
    category: "upgradable-set",
    id: "Tunic of the Sky",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Sky",
      id: "armor-Tunic of the Sky"
    }),
    order: 131,
    rank1: [
      ["Sapphire", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Sapphire", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Sapphire", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Sapphire", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Sky",
      id: "set-Sky"
    })
  },
  {
    category: "upgradable-set",
    id: "Trousers of the Sky",
    name: intl.formatMessage({
      defaultMessage: "Trousers of the Sky",
      id: "armor-Trousers of the Sky"
    }),
    order: 132,
    rank1: [
      ["Sapphire", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Sapphire", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Sapphire", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Sapphire", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Sky",
      id: "set-Sky"
    })
  },
  {
    buyPrice: 650,
    category: "upgradable-set",
    id: "Snowquill Headdress",
    name: intl.formatMessage({
      defaultMessage: "Snowquill Headdress",
      id: "armor-Snowquill Headdress"
    }),
    order: 10,
    rank1: [["Red Chuchu Jelly", 3]],
    rank2: [
      ["Red Chuchu Jelly", 5],
      ["Warm Safflina", 3]
    ],
    rank3: [
      ["Fire Keese Wing", 5],
      ["Fire-Breath Lizalfos Tail", 3],
      ["Sunshroom", 5]
    ],
    rank4: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Fire-Breath Lizalfos Tail", 10],
      ["Ruby", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Snowquill",
      id: "set-Snowquill"
    })
  },
  {
    buyPrice: 1000,
    category: "upgradable-set",
    id: "Snowquill Trousers",
    name: intl.formatMessage({
      defaultMessage: "Snowquill Trousers",
      id: "armor-Snowquill Trousers"
    }),
    order: 12,
    rank1: [["Red Chuchu Jelly", 3]],
    rank2: [
      ["Red Chuchu Jelly", 5],
      ["Warm Safflina", 3]
    ],
    rank3: [
      ["Fire Keese Wing", 5],
      ["Fire-Breath Lizalfos Tail", 3],
      ["Sunshroom", 5]
    ],
    rank4: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Fire-Breath Lizalfos Tail", 10],
      ["Ruby", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Snowquill",
      id: "set-Snowquill"
    })
  },
  {
    buyPrice: 500,
    category: "upgradable-set",
    id: "Snowquill Tunic",
    name: intl.formatMessage({
      defaultMessage: "Snowquill Tunic",
      id: "armor-Snowquill Tunic"
    }),
    order: 11,
    rank1: [["Red Chuchu Jelly", 3]],
    rank2: [
      ["Red Chuchu Jelly", 5],
      ["Warm Safflina", 3]
    ],
    rank3: [
      ["Fire Keese Wing", 5],
      ["Fire-Breath Lizalfos Tail", 3],
      ["Sunshroom", 5]
    ],
    rank4: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Fire-Breath Lizalfos Tail", 10],
      ["Ruby", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Snowquill",
      id: "set-Snowquill"
    })
  },
  {
    category: "upgradable-set",
    id: "Soldier's Armor",
    name: intl.formatMessage({
      defaultMessage: "Soldier's Armor",
      id: "armor-Soldier's Armor"
    }),
    order: 8,
    rank1: [
      ["Chuchu Jelly", 5],
      ["Bokoblin Guts", 3]
    ],
    rank2: [
      ["Keese Eyeball", 5],
      ["Moblin Guts", 3]
    ],
    rank3: [
      ["Lizalfos Tail", 3],
      ["Hinox Guts", 3],
      ["Flint", 30]
    ],
    rank4: [
      ["Amber", 30],
      ["Lynel Hoof", 5],
      ["Lynel Guts", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Soldier's",
      id: "set-Soldier's"
    })
  },
  {
    category: "upgradable-set",
    id: "Soldier's Greaves",
    name: intl.formatMessage({
      defaultMessage: "Soldier's Greaves",
      id: "armor-Soldier's Greaves"
    }),
    order: 9,
    rank1: [
      ["Chuchu Jelly", 5],
      ["Bokoblin Guts", 3]
    ],
    rank2: [
      ["Keese Eyeball", 5],
      ["Moblin Guts", 3]
    ],
    rank3: [
      ["Lizalfos Tail", 3],
      ["Hinox Guts", 3],
      ["Flint", 30]
    ],
    rank4: [
      ["Amber", 30],
      ["Lynel Hoof", 5],
      ["Lynel Guts", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Soldier's",
      id: "set-Soldier's"
    })
  },
  {
    category: "upgradable-set",
    id: "Soldier's Helm",
    name: intl.formatMessage({
      defaultMessage: "Soldier's Helm",
      id: "armor-Soldier's Helm"
    }),
    order: 7,
    rank1: [
      ["Chuchu Jelly", 5],
      ["Bokoblin Guts", 3]
    ],
    rank2: [
      ["Keese Eyeball", 5],
      ["Moblin Guts", 3]
    ],
    rank3: [
      ["Lizalfos Tail", 3],
      ["Hinox Guts", 3],
      ["Flint", 30]
    ],
    rank4: [
      ["Amber", 30],
      ["Lynel Hoof", 5],
      ["Lynel Guts", 5]
    ],
    set: intl.formatMessage({
      defaultMessage: "Soldier's",
      id: "set-Soldier's"
    })
  },
  {
    buyPrice: 700,
    category: "upgradable-set",
    id: "Stealth Chest Guard",
    name: intl.formatMessage({
      defaultMessage: "Stealth Chest Guard",
      id: "armor-Stealth Chest Guard"
    }),
    order: 26,
    rank1: [["Blue Nightshade", 3]],
    rank2: [
      ["Blue Nightshade", 5],
      ["Sunset Firefly", 5]
    ],
    rank3: [
      ["Silent Shroom", 8],
      ["Sneaky River Snail", 5],
      ["Sticky Frog", 5]
    ],
    rank4: [
      ["Stealthfin Trout", 10],
      ["Silent Princess", 5],
      ["Sundelion", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Stealth",
      id: "set-Stealth"
    })
  },
  {
    buyPrice: 500,
    category: "upgradable-set",
    id: "Stealth Mask",
    name: intl.formatMessage({
      defaultMessage: "Stealth Mask",
      id: "armor-Stealth Mask"
    }),
    order: 25,
    rank1: [["Blue Nightshade", 3]],
    rank2: [
      ["Blue Nightshade", 5],
      ["Sunset Firefly", 5]
    ],
    rank3: [
      ["Silent Shroom", 8],
      ["Sneaky River Snail", 5],
      ["Sticky Frog", 5]
    ],
    rank4: [
      ["Stealthfin Trout", 10],
      ["Silent Princess", 5],
      ["Sundelion", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Stealth",
      id: "set-Stealth"
    })
  },
  {
    buyPrice: 600,
    category: "upgradable-set",
    id: "Stealth Tights",
    name: intl.formatMessage({
      defaultMessage: "Stealth Tights",
      id: "armor-Stealth Tights"
    }),
    order: 27,
    rank1: [["Blue Nightshade", 3]],
    rank2: [
      ["Blue Nightshade", 5],
      ["Sunset Firefly", 5]
    ],
    rank3: [
      ["Silent Shroom", 8],
      ["Sneaky River Snail", 5],
      ["Sticky Frog", 5]
    ],
    rank4: [
      ["Stealthfin Trout", 10],
      ["Silent Princess", 5],
      ["Sundelion", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Stealth",
      id: "set-Stealth"
    })
  },
  {
    category: "upgradable-set",
    id: "Cap of Time",
    name: intl.formatMessage({
      defaultMessage: "Cap of Time",
      id: "armor-Cap of Time"
    }),
    order: 121,
    rank1: [
      ["Amber", 10],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Amber", 20],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Amber", 30],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Amber", 40],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Time",
      id: "set-Time"
    })
  },
  {
    category: "upgradable-set",
    id: "Trousers of Time",
    name: intl.formatMessage({
      defaultMessage: "Trousers of Time",
      id: "armor-Trousers of Time"
    }),
    order: 123,
    rank1: [
      ["Amber", 10],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Amber", 20],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Amber", 30],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Amber", 40],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Time",
      id: "set-Time"
    })
  },
  {
    category: "upgradable-set",
    id: "Tunic of Time",
    name: intl.formatMessage({
      defaultMessage: "Tunic of Time",
      id: "armor-Tunic of Time"
    }),
    order: 122,
    rank1: [
      ["Amber", 10],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Amber", 20],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Amber", 30],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Amber", 40],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Time",
      id: "set-Time"
    })
  },
  {
    category: "upgradable-set",
    id: "Cap of Twilight",
    name: intl.formatMessage({
      defaultMessage: "Cap of Twilight",
      id: "armor-Cap of Twilight"
    }),
    order: 127,
    rank1: [
      ["Topaz", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Topaz", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Topaz", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Topaz", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Twilight",
      id: "set-Twilight"
    })
  },
  {
    category: "upgradable-set",
    id: "Trousers of Twilight",
    name: intl.formatMessage({
      defaultMessage: "Trousers of Twilight",
      id: "armor-Trousers of Twilight"
    }),
    order: 129,
    rank1: [
      ["Topaz", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Topaz", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Topaz", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Topaz", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Twilight",
      id: "set-Twilight"
    })
  },
  {
    category: "upgradable-set",
    id: "Tunic of Twilight",
    name: intl.formatMessage({
      defaultMessage: "Tunic of Twilight",
      id: "armor-Tunic of Twilight"
    }),
    order: 128,
    rank1: [
      ["Topaz", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Topaz", 4],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Topaz", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Topaz", 10],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Twilight",
      id: "set-Twilight"
    })
  },
  {
    category: "upgradable-set",
    id: "Cap of the Wild",
    name: intl.formatMessage({
      defaultMessage: "Cap of the Wild",
      id: "armor-Cap of the Wild"
    }),
    order: 115,
    rank1: [
      ["Acorn", 10],
      ["Farosh's Scale", 2]
    ],
    rank2: [
      ["Courser Bee Honey", 5],
      ["Farosh's Claw", 2]
    ],
    rank3: [
      ["Energetic Rhino Beetle", 3],
      ["Farosh's Fang", 2],
      ["Farosh's Spike", 5]
    ],
    rank4: [
      ["Farosh's Horn", 2],
      ["Star Fragment", 3],
      ["Farosh's Spike", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Wild",
      id: "set-Wild"
    })
  },
  {
    category: "upgradable-set",
    id: "Trousers of the Wild",
    name: intl.formatMessage({
      defaultMessage: "Trousers of the Wild",
      id: "armor-Trousers of the Wild"
    }),
    order: 117,
    rank1: [
      ["Acorn", 10],
      ["Dinraal's Scale", 2]
    ],
    rank2: [
      ["Courser Bee Honey", 5],
      ["Dinraal's Claw", 2]
    ],
    rank3: [
      ["Energetic Rhino Beetle", 3],
      ["Dinraal's Fang", 2],
      ["Dinraal's Spike", 5]
    ],
    rank4: [
      ["Dinraal's Horn", 2],
      ["Star Fragment", 3],
      ["Dinraal's Spike", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Wild",
      id: "set-Wild"
    })
  },
  {
    category: "upgradable-set",
    id: "Tunic of the Wild",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Wild",
      id: "armor-Tunic of the Wild"
    }),
    order: 116,
    rank1: [
      ["Acorn", 10],
      ["Naydra's Scale", 2]
    ],
    rank2: [
      ["Courser Bee Honey", 5],
      ["Naydra's Claw", 2]
    ],
    rank3: [
      ["Energetic Rhino Beetle", 3],
      ["Naydra's Fang", 2],
      ["Naydra's Spike", 5]
    ],
    rank4: [
      ["Naydra's Horn", 2],
      ["Star Fragment", 3],
      ["Naydra's Spike", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Wild",
      id: "set-Wild"
    })
  },
  {
    category: "upgradable-set",
    id: "Cap of the Wind",
    name: intl.formatMessage({
      defaultMessage: "Cap of the Wind",
      id: "armor-Cap of the Wind"
    }),
    order: 124,
    rank1: [
      ["Opal", 5],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Opal", 10],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Opal", 15],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Opal", 25],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Wind",
      id: "set-Wind"
    })
  },
  {
    category: "upgradable-set",
    id: "Trousers of the Wind",
    name: intl.formatMessage({
      defaultMessage: "Trousers of the Wind",
      id: "armor-Trousers of the Wind"
    }),
    order: 126,
    rank1: [
      ["Opal", 5],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Opal", 10],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Opal", 15],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Opal", 25],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Wind",
      id: "set-Wind"
    })
  },
  {
    category: "upgradable-set",
    id: "Tunic of the Wind",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Wind",
      id: "armor-Tunic of the Wind"
    }),
    order: 125,
    rank1: [
      ["Opal", 5],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Opal", 10],
      ["Star Fragment", 1]
    ],
    rank3: [
      ["Opal", 15],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Opal", 25],
      ["Star Fragment", 1]
    ],
    set: intl.formatMessage({
      defaultMessage: "Wind",
      id: "set-Wind"
    })
  },
  {
    category: "upgradable-set",
    id: "Yiga Armor",
    name: intl.formatMessage({
      defaultMessage: "Yiga Armor",
      id: "armor-Yiga Armor"
    }),
    order: 65,
    rank1: [["Octorok Eyeball", 2]],
    rank2: [
      ["Fire-Breath Lizalfos Tail", 3],
      ["Puffshroom", 3]
    ],
    rank3: [
      ["Keese Eyeball", 5],
      ["Ice-Breath Lizalfos Tail", 5]
    ],
    rank4: [
      ["Electric Lizalfos Tail", 5],
      ["Black Hinox Horn", 3],
      ["Mighty Banana", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Yiga",
      id: "set-Yiga"
    })
  },
  {
    category: "upgradable-set",
    id: "Yiga Mask",
    name: intl.formatMessage({
      defaultMessage: "Yiga Mask",
      id: "armor-Yiga Mask"
    }),
    order: 64,
    rank1: [["Octorok Eyeball", 2]],
    rank2: [
      ["Fire-Breath Lizalfos Tail", 3],
      ["Puffshroom", 3]
    ],
    rank3: [
      ["Keese Eyeball", 5],
      ["Ice-Breath Lizalfos Tail", 5]
    ],
    rank4: [
      ["Electric Lizalfos Tail", 5],
      ["Black Hinox Horn", 3],
      ["Mighty Banana", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Yiga",
      id: "set-Yiga"
    })
  },
  {
    category: "upgradable-set",
    id: "Yiga Tights",
    name: intl.formatMessage({
      defaultMessage: "Yiga Tights",
      id: "armor-Yiga Tights"
    }),
    order: 66,
    rank1: [["Octorok Eyeball", 2]],
    rank2: [
      ["Fire-Breath Lizalfos Tail", 3],
      ["Puffshroom", 3]
    ],
    rank3: [
      ["Keese Eyeball", 5],
      ["Ice-Breath Lizalfos Tail", 5]
    ],
    rank4: [
      ["Electric Lizalfos Tail", 5],
      ["Black Hinox Horn", 3],
      ["Mighty Banana", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Yiga",
      id: "set-Yiga"
    })
  },
  {
    category: "upgradable-set",
    id: "Zonaite Helm",
    name: intl.formatMessage({
      defaultMessage: "Zonaite Helm",
      id: "armor-Zonaite Helm"
    }),
    order: 73,
    rank1: [["Soldier Construct Horn", 5]],
    rank2: [
      ["Soldier Construct II Horn", 5],
      ["Captain Construct I Horn", 5],
      ["Zonaite", 5]
    ],
    rank3: [
      ["Soldier Construct III Horn", 5],
      ["Captain Construct II Horn", 5],
      ["Large Zonaite", 5]
    ],
    rank4: [
      ["Soldier Construct IV Horn", 5],
      ["Captain Construct III Horn", 5],
      ["Large Zonaite", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Zonaite",
      id: "set-Zonaite"
    })
  },
  {
    category: "upgradable-set",
    id: "Zonaite Shin Guards",
    name: intl.formatMessage({
      defaultMessage: "Zonaite Shin Guards",
      id: "armor-Zonaite Shin Guards"
    }),
    order: 74,
    rank1: [["Soldier Construct Horn", 5]],
    rank2: [
      ["Soldier Construct II Horn", 5],
      ["Captain Construct I Horn", 5],
      ["Zonaite", 5]
    ],
    rank3: [
      ["Soldier Construct III Horn", 5],
      ["Captain Construct II Horn", 5],
      ["Large Zonaite", 5]
    ],
    rank4: [
      ["Soldier Construct IV Horn", 5],
      ["Captain Construct III Horn", 5],
      ["Large Zonaite", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Zonaite",
      id: "set-Zonaite"
    })
  },
  {
    category: "upgradable-set",
    id: "Zonaite Waistguard",
    name: intl.formatMessage({
      defaultMessage: "Zonaite Waistguard",
      id: "armor-Zonaite Waistguard"
    }),
    order: 75,
    rank1: [["Soldier Construct Horn", 5]],
    rank2: [
      ["Soldier Construct II Horn", 5],
      ["Captain Construct I Horn", 5],
      ["Zonaite", 5]
    ],
    rank3: [
      ["Soldier Construct III Horn", 5],
      ["Captain Construct II Horn", 5],
      ["Large Zonaite", 5]
    ],
    rank4: [
      ["Soldier Construct IV Horn", 5],
      ["Captain Construct III Horn", 5],
      ["Large Zonaite", 10]
    ],
    set: intl.formatMessage({
      defaultMessage: "Zonaite",
      id: "set-Zonaite"
    })
  },
  {
    category: "upgradable-set",
    id: "Zora Armor",
    name: intl.formatMessage({
      defaultMessage: "Zora Armor",
      id: "armor-Zora Armor"
    }),
    order: 17,
    rank1: [["Lizalfos Horn", 3]],
    rank2: [
      ["Lizalfos Talon", 5],
      ["Hyrule Bass", 5]
    ],
    rank3: [
      ["Blue Lizalfos Horn", 5],
      ["Lizalfos Tail", 3],
      ["Hearty Bass", 3]
    ],
    rank4: [
      ["Black Lizalfos Horn", 5],
      ["Blue Lizalfos Tail", 5],
      ["Opal", 20]
    ],
    set: intl.formatMessage({
      defaultMessage: "Zora",
      id: "set-Zora"
    })
  },
  {
    category: "upgradable-set",
    id: "Zora Greaves",
    name: intl.formatMessage({
      defaultMessage: "Zora Greaves",
      id: "armor-Zora Greaves"
    }),
    order: 18,
    rank1: [["Lizalfos Horn", 3]],
    rank2: [
      ["Lizalfos Talon", 5],
      ["Hyrule Bass", 5]
    ],
    rank3: [
      ["Blue Lizalfos Horn", 5],
      ["Lizalfos Tail", 3],
      ["Hearty Bass", 3]
    ],
    rank4: [
      ["Black Lizalfos Horn", 5],
      ["Blue Lizalfos Tail", 5],
      ["Opal", 20]
    ],
    set: intl.formatMessage({
      defaultMessage: "Zora",
      id: "set-Zora"
    })
  },
  {
    category: "upgradable-set",
    id: "Zora Helm",
    name: intl.formatMessage({
      defaultMessage: "Zora Helm",
      id: "armor-Zora Helm"
    }),
    order: 16,
    rank1: [["Lizalfos Horn", 3]],
    rank2: [
      ["Lizalfos Talon", 5],
      ["Hyrule Bass", 5]
    ],
    rank3: [
      ["Blue Lizalfos Horn", 5],
      ["Lizalfos Tail", 3],
      ["Hearty Bass", 3]
    ],
    rank4: [
      ["Black Lizalfos Horn", 5],
      ["Blue Lizalfos Tail", 5],
      ["Opal", 20]
    ],
    set: intl.formatMessage({
      defaultMessage: "Zora",
      id: "set-Zora"
    })
  },
  {
    category: "upgradable-non-set",
    id: "Ancient Hero's Aspect",
    name: intl.formatMessage({
      defaultMessage: "Ancient Hero's Aspect",
      id: "armor-Ancient Hero's Aspect"
    }),
    order: 135,
    rank1: [
      ["Silver Bokoblin Horn", 9],
      ["Hinox Guts", 9],
      ["Zonaite", 15]
    ],
    rank2: [
      ["Silver Moblin Horn", 9],
      ["Frox Guts", 9],
      ["Large Zonaite", 10]
    ],
    rank3: [
      ["Silver Lizalfos Horn", 9],
      ["Molduga Guts", 9],
      ["Large Zonaite", 15]
    ],
    rank4: [
      ["Silver Lynel Saber Horn", 9],
      ["Silver Lynel Mace Horn", 9],
      ["Gleeok Guts", 9]
    ]
  },
  {
    buyPrice: 400,
    category: "upgradable-non-set",
    id: "Amber Earrings",
    name: intl.formatMessage({
      defaultMessage: "Amber Earrings",
      id: "armor-Amber Earrings"
    }),
    order: 81,
    rank1: [
      ["Amber", 10],
      ["Flint", 5]
    ],
    rank2: [
      ["Amber", 20],
      ["Flint", 10]
    ],
    rank3: [
      ["Amber", 35],
      ["Flint", 15]
    ],
    rank4: [
      ["Amber", 60],
      ["Flint", 25]
    ]
  },
  {
    category: "upgradable-non-set",
    id: "Champion's Leathers",
    name: intl.formatMessage({
      defaultMessage: "Champion's Leathers",
      id: "armor-Champion's Leathers"
    }),
    order: 91,
    rank1: [
      ["Silent Princess", 3],
      ["Light Dragon's Scale", 2]
    ],
    rank2: [
      ["Silent Princess", 3],
      ["Light Dragon's Claw", 2],
      ["Sundelion", 10]
    ],
    rank3: [
      ["Silent Princess", 5],
      ["Light Dragon's Fang", 2],
      ["Sundelion", 15]
    ],
    rank4: [
      ["Silent Princess", 10],
      ["Light Dragon's Horn", 2],
      ["Sundelion", 20]
    ]
  },
  {
    buyPrice: 2400,
    category: "upgradable-non-set",
    id: "Diamond Circlet",
    name: intl.formatMessage({
      defaultMessage: "Diamond Circlet",
      id: "armor-Diamond Circlet"
    }),
    order: 76,
    rank1: [
      ["Diamond", 2],
      ["Flint", 3]
    ],
    rank2: [
      ["Diamond", 3],
      ["Flint", 5]
    ],
    rank3: [
      ["Diamond", 5],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Diamond", 8],
      ["Star Fragment", 2]
    ]
  },
  {
    buyPrice: 700,
    category: "upgradable-non-set",
    id: "Opal Earrings",
    name: intl.formatMessage({
      defaultMessage: "Opal Earrings",
      id: "armor-Opal Earrings"
    }),
    order: 80,
    rank1: [
      ["Opal", 6],
      ["Flint", 5]
    ],
    rank2: [
      ["Opal", 12],
      ["Flint", 10]
    ],
    rank3: [
      ["Opal", 18],
      ["Flint", 15]
    ],
    rank4: [
      ["Opal", 30],
      ["Flint", 25]
    ]
  },
  {
    buyPrice: 1300,
    category: "upgradable-non-set",
    id: "Ruby Circlet",
    name: intl.formatMessage({
      defaultMessage: "Ruby Circlet",
      id: "armor-Ruby Circlet"
    }),
    order: 77,
    rank1: [
      ["Ruby", 2],
      ["Flint", 3]
    ],
    rank2: [
      ["Ruby", 4],
      ["Flint", 5]
    ],
    rank3: [
      ["Ruby", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Ruby", 10],
      ["Star Fragment", 2]
    ]
  },
  {
    buyPrice: 1200,
    category: "upgradable-non-set",
    id: "Sand Boots",
    name: intl.formatMessage({
      defaultMessage: "Sand Boots",
      id: "armor-Sand Boots"
    }),
    order: 83,
    rank1: [["Hightail Lizard", 3]],
    rank2: [
      ["Gibdo Bone", 20],
      ["Swift Carrot", 5]
    ],
    rank3: [
      ["Gibdo Guts", 5],
      ["Rushroom", 10],
      ["Molduga Fin", 5]
    ],
    rank4: [
      ["Molduga Guts", 5],
      ["Swift Violet", 10],
      ["Hearty Lizard", 5]
    ]
  },
  {
    buyPrice: 1300,
    category: "upgradable-non-set",
    id: "Sapphire Circlet",
    name: intl.formatMessage({
      defaultMessage: "Sapphire Circlet",
      id: "armor-Sapphire Circlet"
    }),
    order: 78,
    rank1: [
      ["Sapphire", 2],
      ["Flint", 3]
    ],
    rank2: [
      ["Sapphire", 4],
      ["Flint", 5]
    ],
    rank3: [
      ["Sapphire", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Sapphire", 10],
      ["Star Fragment", 2]
    ]
  },
  {
    category: "upgradable-non-set",
    id: "Sheik's Mask",
    name: intl.formatMessage({
      defaultMessage: "Sheik's Mask",
      id: "armor-Sheik's Mask"
    }),
    order: 134,
    rank1: [
      ["Silent Princess", 1],
      ["Star Fragment", 1]
    ],
    rank2: [
      ["Silent Princess", 2],
      ["Star Fragment", 2]
    ],
    rank3: [
      ["Silent Princess", 4],
      ["Star Fragment", 3]
    ],
    rank4: [
      ["Silent Princess", 8],
      ["Star Fragment", 4]
    ]
  },
  {
    buyPrice: 1300,
    category: "upgradable-non-set",
    id: "Snow Boots",
    name: intl.formatMessage({
      defaultMessage: "Snow Boots",
      id: "armor-Snow Boots"
    }),
    order: 84,
    rank1: [["Hightail Lizard", 3]],
    rank2: [
      ["Octorok Tentacle", 5],
      ["Swift Carrot", 5]
    ],
    rank3: [["Octo Balloon", 5]],
    rank4: [
      ["Naydra's Scale", 2],
      ["Swift Violet", 20]
    ]
  },
  {
    buyPrice: 1200,
    category: "upgradable-non-set",
    id: "Topaz Earrings",
    name: intl.formatMessage({
      defaultMessage: "Topaz Earrings",
      id: "armor-Topaz Earrings"
    }),
    order: 79,
    rank1: [
      ["Topaz", 2],
      ["Flint", 3]
    ],
    rank2: [
      ["Topaz", 4],
      ["Flint", 5]
    ],
    rank3: [["Rushroom", 20]],
    rank4: [
      ["Topaz", 10],
      ["Star Fragment", 2]
    ]
  },
  {
    category: "upgradable-non-set",
    id: "Vah Medoh Divine Helm",
    name: intl.formatMessage({
      defaultMessage: "Vah Medoh Divine Helm",
      id: "armor-Vah Medoh Divine Helm"
    }),
    order: 67,
    rank1: [
      ["Sapphire", 1],
      ["Zonaite", 5]
    ],
    rank2: [
      ["Sapphire", 4],
      ["Zonaite", 10]
    ],
    rank3: [
      ["Topaz", 6],
      ["Star Fragment", 1]
    ],
    rank4: [
      ["Sapphire", 10],
      ["Large Zonaite", 10],
      ["Dazzlefruit", 10]
    ]
  },
  {
    category: "upgradable-non-set",
    id: "Vah Naboris Divine Helm",
    name: intl.formatMessage({
      defaultMessage: "Vah Naboris Divine Helm",
      id: "armor-Vah Naboris Divine Helm"
    }),
    order: 70,
    rank1: [
      ["Topaz", 1],
      ["Zonaite", 5]
    ],
    rank2: [
      ["Topaz", 4],
      ["Zonaite", 10]
    ],
    rank3: [
      ["Sapphire", 6],
      ["Large Zonaite", 5],
      ["Dazzlefruit", 5]
    ],
    rank4: [
      ["Topaz", 10],
      ["Large Zonaite", 10],
      ["Dazzlefruit", 10]
    ]
  },
  {
    category: "upgradable-non-set",
    id: "Vah Rudania Divine Helm",
    name: intl.formatMessage({
      defaultMessage: "Vah Rudania Divine Helm",
      id: "armor-Vah Rudania Divine Helm"
    }),
    order: 68,
    rank1: [
      ["Ruby", 1],
      ["Zonaite", 5]
    ],
    rank2: [
      ["Ruby", 4],
      ["Zonaite", 10]
    ],
    rank3: [
      ["Topaz", 6],
      ["Large Zonaite", 5],
      ["Dazzlefruit", 5]
    ],
    rank4: [
      ["Ruby", 10],
      ["Large Zonaite", 10],
      ["Dazzlefruit", 10]
    ]
  },
  {
    category: "upgradable-non-set",
    id: "Vah Ruta Divine Helm",
    name: intl.formatMessage({
      defaultMessage: "Vah Ruta Divine Helm",
      id: "armor-Vah Ruta Divine Helm"
    }),
    order: 69,
    rank1: [
      ["Opal", 5],
      ["Zonaite", 5]
    ],
    rank2: [
      ["Opal", 10],
      ["Zonaite", 10]
    ],
    rank3: [
      ["Ruby", 6],
      ["Large Zonaite", 5],
      ["Dazzlefruit", 5]
    ],
    rank4: [
      ["Opal", 25],
      ["Large Zonaite", 10],
      ["Dazzlefruit", 10]
    ]
  },
  {
    category: "upgradable-non-set",
    id: "Tunic of Memories",
    name: intl.formatMessage({
      defaultMessage: "Tunic of Memories",
      id: "armor-Tunic of Memories"
    }),
    order: 90,
    rank1: [
      ["Silent Princess", 3],
      ["Light Dragon's Scale", 1]
    ],
    rank2: [
      ["Silent Princess", 3],
      ["Light Dragon's Claw", 1],
      ["Farosh's Horn", 2]
    ],
    rank3: [
      ["Silent Princess", 5],
      ["Light Dragon's Fang", 1],
      ["Naydra's Horn", 2]
    ],
    rank4: [
      ["Silent Princess", 10],
      ["Light Dragon's Horn", 1],
      ["Dinraal's Horn", 2]
    ]
  },

  {
    category: "non-upgradable-set",
    id: "Archaic Legwear",
    name: intl.formatMessage({
      defaultMessage: "Archaic Legwear",
      id: "armor-Archaic Legwear"
    }),
    order: 2,
    set: intl.formatMessage({
      defaultMessage: "Archaic",
      id: "set-Archaic"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Archaic Tunic",
    name: intl.formatMessage({
      defaultMessage: "Archaic Tunic",
      id: "armor-Archaic Tunic"
    }),
    order: 1,
    set: intl.formatMessage({
      defaultMessage: "Archaic",
      id: "set-Archaic"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Dark Hood",
    name: intl.formatMessage({
      defaultMessage: "Dark Hood",
      id: "armor-Dark Hood"
    }),
    order: 106,
    set: intl.formatMessage({
      defaultMessage: "Dark",
      id: "set-Dark"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Dark Trousers",
    name: intl.formatMessage({
      defaultMessage: "Dark Trousers",
      id: "armor-Dark Trousers"
    }),
    order: 108,
    set: intl.formatMessage({
      defaultMessage: "Dark",
      id: "set-Dark"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Dark Tunic",
    name: intl.formatMessage({
      defaultMessage: "Dark Tunic",
      id: "armor-Dark Tunic"
    }),
    order: 107,
    set: intl.formatMessage({
      defaultMessage: "Dark",
      id: "set-Dark"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Evil Spirit Armor",
    name: intl.formatMessage({
      defaultMessage: "Evil Spirit Armor",
      id: "armor-Evil Spirit Armor"
    }),
    order: 104,
    set: intl.formatMessage({
      defaultMessage: "Evil Spirit",
      id: "set-Evil Spirit"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Evil Spirit Greaves",
    name: intl.formatMessage({
      defaultMessage: "Evil Spirit Greaves",
      id: "armor-Evil Spirit Greaves"
    }),
    order: 105,
    set: intl.formatMessage({
      defaultMessage: "Evil Spirit",
      id: "set-Evil Spirit"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Evil Spirit Mask",
    name: intl.formatMessage({
      defaultMessage: "Evil Spirit Mask",
      id: "armor-Evil Spirit Mask"
    }),
    order: 103,
    set: intl.formatMessage({
      defaultMessage: "Evil Spirit",
      id: "set-Evil Spirit"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Mystic Robe",
    name: intl.formatMessage({
      defaultMessage: "Mystic Robe",
      id: "armor-Mystic Robe"
    }),
    order: 53,
    set: intl.formatMessage({
      defaultMessage: "Mystic",
      id: "set-Mystic"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Mystic Trousers",
    name: intl.formatMessage({
      defaultMessage: "Mystic Trousers",
      id: "armor-Mystic Trousers"
    }),
    order: 54,
    set: intl.formatMessage({
      defaultMessage: "Mystic",
      id: "set-Mystic"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Mystic Mask",
    name: intl.formatMessage({
      defaultMessage: "Mystic Mask",
      id: "armor-Mystic Mask"
    }),
    order: 52,
    set: intl.formatMessage({
      defaultMessage: "Mystic",
      id: "set-Mystic"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Phantom Armor",
    name: intl.formatMessage({
      defaultMessage: "Phantom Armor",
      id: "armor-Phantom Armor"
    }),
    order: 101,
    set: intl.formatMessage({
      defaultMessage: "Phantom",
      id: "set-Phantom"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Phantom Greaves",
    name: intl.formatMessage({
      defaultMessage: "Phantom Greaves",
      id: "armor-Phantom Greaves"
    }),
    order: 102,
    set: intl.formatMessage({
      defaultMessage: "Phantom",
      id: "set-Phantom"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Phantom Helm",
    name: intl.formatMessage({
      defaultMessage: "Phantom Helm",
      id: "armor-Phantom Helm"
    }),
    order: 100,
    set: intl.formatMessage({
      defaultMessage: "Phantom",
      id: "set-Phantom"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Tingle's Hood",
    name: intl.formatMessage({
      defaultMessage: "Tingle's Hood",
      id: "armor-Tingle's Hood"
    }),
    order: 97,
    set: intl.formatMessage({
      defaultMessage: "Tingle",
      id: "set-Tingle"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Tingle's Shirt",
    name: intl.formatMessage({
      defaultMessage: "Tingle's Shirt",
      id: "armor-Tingle's Shirt"
    }),
    order: 98,
    set: intl.formatMessage({
      defaultMessage: "Tingle",
      id: "set-Tingle"
    })
  },
  {
    category: "non-upgradable-set",
    id: "Tingle's Tights",
    name: intl.formatMessage({
      defaultMessage: "Tingle's Tights",
      id: "armor-Tingle's Tights"
    }),
    order: 99,
    set: intl.formatMessage({
      defaultMessage: "Tingle",
      id: "set-Tingle"
    })
  },
  {
    category: "non-upgradable-non-set",
    id: "Archaic Warm Greaves",
    name: intl.formatMessage({
      defaultMessage: "Archaic Warm Greaves",
      id: "armor-Archaic Warm Greaves"
    }),
    order: 3
  },
  {
    category: "non-upgradable-non-set",
    id: "Bokoblin Mask",
    name: intl.formatMessage({
      defaultMessage: "Bokoblin Mask",
      id: "armor-Bokoblin Mask"
    }),
    order: 85
  },
  {
    category: "non-upgradable-non-set",
    id: "Cece Hat",
    name: intl.formatMessage({
      defaultMessage: "Cece Hat",
      id: "armor-Cece Hat"
    }),
    order: 72
  },
  {
    category: "non-upgradable-non-set",
    id: "Horriblin Mask",
    name: intl.formatMessage({
      defaultMessage: "Horriblin Mask",
      id: "armor-Horriblin Mask"
    }),
    order: 86
  },
  {
    category: "non-upgradable-non-set",
    id: "Korok Mask",
    name: intl.formatMessage({
      defaultMessage: "Korok Mask",
      id: "armor-Korok Mask"
    }),
    order: 133
  },
  {
    category: "non-upgradable-non-set",
    id: "Lizalfos Mask",
    name: intl.formatMessage({
      defaultMessage: "Lizalfos Mask",
      id: "armor-Lizalfos Mask"
    }),
    order: 88
  },
  {
    category: "non-upgradable-non-set",
    id: "Lynel Mask",
    name: intl.formatMessage({
      defaultMessage: "Lynel Mask",
      id: "armor-Lynel Mask"
    }),
    order: 89
  },
  {
    category: "non-upgradable-non-set",
    id: "Majora's Mask",
    name: intl.formatMessage({
      defaultMessage: "Majora's Mask",
      id: "armor-Majora's Mask"
    }),
    order: 96
  },
  {
    category: "non-upgradable-non-set",
    id: "Midna's Helmet",
    name: intl.formatMessage({
      defaultMessage: "Midna's Helmet",
      id: "armor-Midna's Helmet"
    }),
    order: 95
  },
  {
    category: "non-upgradable-non-set",
    id: "Moblin Mask",
    name: intl.formatMessage({
      defaultMessage: "Moblin Mask",
      id: "armor-Moblin Mask"
    }),
    order: 87
  },
  {
    category: "non-upgradable-non-set",
    id: "Ravio Hood",
    name: intl.formatMessage({
      defaultMessage: "Ravio Hood",
      id: "armor-Ravio Hood"
    }),
    order: 93
  },
  {
    category: "non-upgradable-non-set",
    id: "Thunder Helm",
    name: intl.formatMessage({
      defaultMessage: "Thunder Helm",
      id: "armor-Thunder Helm"
    }),
    order: 82
  },
  {
    category: "non-upgradable-non-set",
    id: "Zant's Helmet",
    name: intl.formatMessage({
      defaultMessage: "Zant's Helmet",
      id: "armor-Zant's Helmet"
    }),
    order: 94
  },
  {
    category: "non-upgradable-non-set",
    id: "Lobster Shirt",
    name: intl.formatMessage({
      defaultMessage: "Lobster Shirt",
      id: "armor-Lobster Shirt"
    }),
    order: 92
  },
  {
    category: "non-upgradable-non-set",
    id: "Well-Worn Hair Band",
    name: intl.formatMessage({
      defaultMessage: "Well-Worn Hair Band",
      id: "armor-Well-Worn Hair Band"
    }),
    order: 71
  }
];

export const getMaterials = (intl: IntlShape): IDataMaterial[] => [
  {
    id: "Acorn",
    name: intl.formatMessage({ defaultMessage: "Acorn", id: "material-Acorn" }),
    order: 63
  },
  {
    id: "Aerocuda Eyeball",
    name: intl.formatMessage({
      defaultMessage: "Aerocuda Eyeball",
      id: "material-Aerocuda Eyeball"
    }),
    order: 141
  },
  {
    id: "Aerocuda Wing",
    name: intl.formatMessage({
      defaultMessage: "Aerocuda Wing",
      id: "material-Aerocuda Wing"
    }),
    order: 146
  },
  {
    id: "Amber",
    name: intl.formatMessage({ defaultMessage: "Amber", id: "material-Amber" }),
    order: 118
  },
  {
    id: "Black Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Bokoblin Horn",
      id: "material-Black Bokoblin Horn"
    }),
    order: 152
  },
  {
    id: "Black Boss Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Boss Bokoblin Horn",
      id: "material-Black Boss Bokoblin Horn"
    }),
    order: 156
  },
  {
    id: "Black Hinox Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Hinox Horn",
      id: "material-Black Hinox Horn"
    }),
    order: 204
  },
  {
    id: "Black Horriblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Horriblin Horn",
      id: "material-Black Horriblin Horn"
    }),
    order: 195
  },
  {
    id: "Black Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Lizalfos Horn",
      id: "material-Black Lizalfos Horn"
    }),
    order: 160
  },
  {
    id: "Black Moblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Moblin Horn",
      id: "material-Black Moblin Horn"
    }),
    order: 191
  },
  {
    id: "Bladed Rhino Beetle",
    name: intl.formatMessage({
      defaultMessage: "Bladed Rhino Beetle",
      id: "material-Bladed Rhino Beetle"
    }),
    order: 101
  },
  {
    id: "Blue Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Bokoblin Horn",
      id: "material-Blue Bokoblin Horn"
    }),
    order: 151
  },
  {
    id: "Blue Boss Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Boss Bokoblin Horn",
      id: "material-Blue Boss Bokoblin Horn"
    }),
    order: 155
  },
  {
    id: "Blue Horriblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Horriblin Horn",
      id: "material-Blue Horriblin Horn"
    }),
    order: 194
  },
  {
    id: "Blue Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Lizalfos Horn",
      id: "material-Blue Lizalfos Horn"
    }),
    order: 159
  },
  {
    id: "Blue Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Blue Lizalfos Tail",
      id: "material-Blue Lizalfos Tail"
    }),
    order: 215
  },
  {
    id: "Blue Moblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Moblin Horn",
      id: "material-Blue Moblin Horn"
    }),
    order: 190
  },
  {
    id: "Blue Nightshade",
    name: intl.formatMessage({
      defaultMessage: "Blue Nightshade",
      id: "material-Blue Nightshade"
    }),
    order: 47
  },
  {
    id: "Blue-Maned Lynel Mace Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue-Maned Lynel Mace Horn",
      id: "material-Blue-Maned Lynel Mace Horn"
    }),
    order: 199
  },
  {
    id: "Blue-Maned Lynel Saber Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue-Maned Lynel Saber Horn",
      id: "material-Blue-Maned Lynel Saber Horn"
    }),
    order: 166
  },
  {
    id: "Blue-White Frox Fang",
    name: intl.formatMessage({
      defaultMessage: "Blue-White Frox Fang",
      id: "material-Blue-White Frox Fang"
    }),
    order: 209
  },
  {
    id: "Bokoblin Fang",
    name: intl.formatMessage({
      defaultMessage: "Bokoblin Fang",
      id: "material-Bokoblin Fang"
    }),
    order: 223
  },
  {
    id: "Bokoblin Guts",
    name: intl.formatMessage({
      defaultMessage: "Bokoblin Guts",
      id: "material-Bokoblin Guts"
    }),
    order: 121
  },
  {
    id: "Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Bokoblin Horn",
      id: "material-Bokoblin Horn"
    }),
    order: 150
  },
  {
    id: "Boss Bokoblin Guts",
    name: intl.formatMessage({
      defaultMessage: "Boss Bokoblin Guts",
      id: "material-Boss Bokoblin Guts"
    }),
    order: 125
  },
  {
    id: "Boss Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Boss Bokoblin Horn",
      id: "material-Boss Bokoblin Horn"
    }),
    order: 154
  },
  {
    id: "Bright Caps",
    name: intl.formatMessage({
      defaultMessage: "Bright Caps",
      id: "material-Bright Caps"
    }),
    order: 23
  },
  {
    id: "Brightbloom Seeds",
    name: intl.formatMessage({
      defaultMessage: "Brightbloom Seeds",
      id: "material-Brightbloom Seeds"
    }),
    order: 244
  },
  {
    id: "Captain Construct I Horn",
    name: intl.formatMessage({
      defaultMessage: "Captain Construct I Horn",
      id: "material-Captain Construct I Horn"
    }),
    order: 173
  },
  {
    id: "Captain Construct II Horn",
    name: intl.formatMessage({
      defaultMessage: "Captain Construct II Horn",
      id: "material-Captain Construct II Horn"
    }),
    order: 174
  },
  {
    id: "Captain Construct III Horn",
    name: intl.formatMessage({
      defaultMessage: "Captain Construct III Horn",
      id: "material-Captain Construct III Horn"
    }),
    order: 175
  },
  {
    id: "Chillfin Trout",
    name: intl.formatMessage({
      defaultMessage: "Chillfin Trout",
      id: "material-Chillfin Trout"
    }),
    order: 77
  },
  {
    id: "Chillshroom",
    name: intl.formatMessage({
      defaultMessage: "Chillshroom",
      id: "material-Chillshroom"
    }),
    order: 25
  },
  {
    id: "Chuchu Jelly",
    name: intl.formatMessage({
      defaultMessage: "Chuchu Jelly",
      id: "material-Chuchu Jelly"
    }),
    order: 134
  },
  {
    id: "Cold Darner",
    name: intl.formatMessage({
      defaultMessage: "Cold Darner",
      id: "material-Cold Darner"
    }),
    order: 97
  },
  {
    id: "Cool Safflina",
    name: intl.formatMessage({
      defaultMessage: "Cool Safflina",
      id: "material-Cool Safflina"
    }),
    order: 43
  },
  {
    id: "Courser Bee Honey",
    name: intl.formatMessage({
      defaultMessage: "Courser Bee Honey",
      id: "material-Courser Bee Honey"
    }),
    order: 57
  },
  {
    id: "Dark Clump",
    name: intl.formatMessage({
      defaultMessage: "Dark Clump",
      id: "material-Dark Clump"
    }),
    order: 70
  },
  {
    id: "Dazzlefruit",
    name: intl.formatMessage({
      defaultMessage: "Dazzlefruit",
      id: "material-Dazzlefruit"
    }),
    order: 15
  },
  {
    id: "Deep Firefly",
    name: intl.formatMessage({
      defaultMessage: "Deep Firefly",
      id: "material-Deep Firefly"
    }),
    order: 104
  },
  {
    id: "Diamond",
    name: intl.formatMessage({
      defaultMessage: "Diamond",
      id: "material-Diamond"
    }),
    order: 113
  },
  {
    id: "Dinraal's Claw",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Claw",
      id: "material-Dinraal's Claw"
    }),
    order: 234
  },
  {
    id: "Dinraal's Fang",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Fang",
      id: "material-Dinraal's Fang"
    }),
    order: 238
  },
  {
    id: "Dinraal's Horn",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Horn",
      id: "material-Dinraal's Horn"
    }),
    order: 181
  },
  {
    id: "Dinraal's Scale",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Scale",
      id: "material-Dinraal's Scale"
    }),
    order: 230
  },
  {
    id: "Dinraal's Spike",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Spike",
      id: "material-Dinraal's Spike"
    }),
    order: 210
  },
  {
    id: "Electric Darner",
    name: intl.formatMessage({
      defaultMessage: "Electric Darner",
      id: "material-Electric Darner"
    }),
    order: 99
  },
  {
    id: "Electric Keese Wing",
    name: intl.formatMessage({
      defaultMessage: "Electric Keese Wing",
      id: "material-Electric Keese Wing"
    }),
    order: 145
  },
  {
    id: "Electric Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Electric Lizalfos Horn",
      id: "material-Electric Lizalfos Horn"
    }),
    order: 164
  },
  {
    id: "Electric Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Electric Lizalfos Tail",
      id: "material-Electric Lizalfos Tail"
    }),
    order: 220
  },
  {
    id: "Electric Safflina",
    name: intl.formatMessage({
      defaultMessage: "Electric Safflina",
      id: "material-Electric Safflina"
    }),
    order: 48
  },
  {
    id: "Energetic Rhino Beetle",
    name: intl.formatMessage({
      defaultMessage: "Energetic Rhino Beetle",
      id: "material-Energetic Rhino Beetle"
    }),
    order: 100
  },
  {
    id: "Farosh's Claw",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Claw",
      id: "material-Farosh's Claw"
    }),
    order: 236
  },
  {
    id: "Farosh's Fang",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Fang",
      id: "material-Farosh's Fang"
    }),
    order: 240
  },
  {
    id: "Farosh's Horn",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Horn",
      id: "material-Farosh's Horn"
    }),
    order: 183
  },
  {
    id: "Farosh's Scale",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Scale",
      id: "material-Farosh's Scale"
    }),
    order: 232
  },
  {
    id: "Farosh's Spike",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Spike",
      id: "material-Farosh's Spike"
    }),
    order: 212
  },
  {
    id: "Fire Fruit",
    name: intl.formatMessage({
      defaultMessage: "Fire Fruit",
      id: "material-Fire Fruit"
    }),
    order: 11
  },
  {
    id: "Fire Keese Wing",
    name: intl.formatMessage({
      defaultMessage: "Fire Keese Wing",
      id: "material-Fire Keese Wing"
    }),
    order: 143
  },
  {
    id: "Fire Like Stone",
    name: intl.formatMessage({
      defaultMessage: "Fire Like Stone",
      id: "material-Fire Like Stone"
    }),
    order: 186
  },
  {
    id: "Fire-Breath Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Fire-Breath Lizalfos Horn",
      id: "material-Fire-Breath Lizalfos Horn"
    }),
    order: 162
  },
  {
    id: "Fire-Breath Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Fire-Breath Lizalfos Tail",
      id: "material-Fire-Breath Lizalfos Tail"
    }),
    order: 218
  },
  {
    id: "Fireproof Lizard",
    name: intl.formatMessage({
      defaultMessage: "Fireproof Lizard",
      id: "material-Fireproof Lizard"
    }),
    order: 111
  },
  {
    id: "Flint",
    name: intl.formatMessage({ defaultMessage: "Flint", id: "material-Flint" }),
    order: 120
  },
  {
    id: "Frox Fang",
    name: intl.formatMessage({
      defaultMessage: "Frox Fang",
      id: "material-Frox Fang"
    }),
    order: 207
  },
  {
    id: "Frox Fingernail",
    name: intl.formatMessage({
      defaultMessage: "Frox Fingernail",
      id: "material-Frox Fingernail"
    }),
    order: 229
  },
  {
    id: "Frox Guts",
    name: intl.formatMessage({
      defaultMessage: "Frox Guts",
      id: "material-Frox Guts"
    }),
    order: 128
  },
  {
    id: "Giant Brightbloom Seed",
    name: intl.formatMessage({
      defaultMessage: "Giant Brightbloom Seed",
      id: "material-Giant Brightbloom Seed"
    }),
    order: 245
  },
  {
    id: "Gibdo Bone",
    name: intl.formatMessage({
      defaultMessage: "Gibdo Bone",
      id: "material-Gibdo Bone"
    }),
    order: 221
  },
  {
    id: "Gibdo Guts",
    name: intl.formatMessage({
      defaultMessage: "Gibdo Guts",
      id: "material-Gibdo Guts"
    }),
    order: 124
  },
  {
    id: "Gibdo Wing",
    name: intl.formatMessage({
      defaultMessage: "Gibdo Wing",
      id: "material-Gibdo Wing"
    }),
    order: 147
  },
  {
    id: "Gleeok Flame Horn",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Flame Horn",
      id: "material-Gleeok Flame Horn"
    }),
    order: 178
  },
  {
    id: "Gleeok Frost Horn",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Frost Horn",
      id: "material-Gleeok Frost Horn"
    }),
    order: 179
  },
  {
    id: "Gleeok Guts",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Guts",
      id: "material-Gleeok Guts"
    }),
    order: 127
  },
  {
    id: "Gleeok Thunder Horn",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Thunder Horn",
      id: "material-Gleeok Thunder Horn"
    }),
    order: 180
  },
  {
    id: "Gleeok Wing",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Wing",
      id: "material-Gleeok Wing"
    }),
    order: 148
  },
  {
    id: "Glowing Cave Fish",
    name: intl.formatMessage({
      defaultMessage: "Glowing Cave Fish",
      id: "material-Glowing Cave Fish"
    }),
    order: 85
  },
  {
    id: "Hearty Bass",
    name: intl.formatMessage({
      defaultMessage: "Hearty Bass",
      id: "material-Hearty Bass"
    }),
    order: 74
  },
  {
    id: "Hearty Lizard",
    name: intl.formatMessage({
      defaultMessage: "Hearty Lizard",
      id: "material-Hearty Lizard"
    }),
    order: 109
  },
  {
    id: "Hightail Lizard",
    name: intl.formatMessage({
      defaultMessage: "Hightail Lizard",
      id: "material-Hightail Lizard"
    }),
    order: 110
  },
  {
    id: "Hinox Guts",
    name: intl.formatMessage({
      defaultMessage: "Hinox Guts",
      id: "material-Hinox Guts"
    }),
    order: 130
  },
  {
    id: "Hinox Toenail",
    name: intl.formatMessage({
      defaultMessage: "Hinox Toenail",
      id: "material-Hinox Toenail"
    }),
    order: 177
  },
  {
    id: "Hinox Tooth",
    name: intl.formatMessage({
      defaultMessage: "Hinox Tooth",
      id: "material-Hinox Tooth"
    }),
    order: 226
  },
  {
    id: "Horriblin Guts",
    name: intl.formatMessage({
      defaultMessage: "Horriblin Guts",
      id: "material-Horriblin Guts"
    }),
    order: 123
  },
  {
    id: "Horriblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Horriblin Horn",
      id: "material-Horriblin Horn"
    }),
    order: 193
  },
  {
    id: "Hot-Footed Frog",
    name: intl.formatMessage({
      defaultMessage: "Hot-Footed Frog",
      id: "material-Hot-Footed Frog"
    }),
    order: 107
  },
  {
    id: "Hyrule Bass",
    name: intl.formatMessage({
      defaultMessage: "Hyrule Bass",
      id: "material-Hyrule Bass"
    }),
    order: 75
  },
  {
    id: "Ice Fruit",
    name: intl.formatMessage({
      defaultMessage: "Ice Fruit",
      id: "material-Ice Fruit"
    }),
    order: 12
  },
  {
    id: "Ice Keese Wing",
    name: intl.formatMessage({
      defaultMessage: "Ice Keese Wing",
      id: "material-Ice Keese Wing"
    }),
    order: 144
  },
  {
    id: "Ice Like Stone",
    name: intl.formatMessage({
      defaultMessage: "Ice Like Stone",
      id: "material-Ice Like Stone"
    }),
    order: 187
  },
  {
    id: "Ice-Breath Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Ice-Breath Lizalfos Horn",
      id: "material-Ice-Breath Lizalfos Horn"
    }),
    order: 163
  },
  {
    id: "Ice-Breath Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Ice-Breath Lizalfos Tail",
      id: "material-Ice-Breath Lizalfos Tail"
    }),
    order: 219
  },
  {
    id: "Keese Eyeball",
    name: intl.formatMessage({
      defaultMessage: "Keese Eyeball",
      id: "material-Keese Eyeball"
    }),
    order: 136
  },
  {
    id: "Keese Wing",
    name: intl.formatMessage({
      defaultMessage: "Keese Wing",
      id: "material-Keese Wing"
    }),
    order: 142
  },
  {
    id: "Large Zonai Charge",
    name: intl.formatMessage({
      defaultMessage: "Large Zonai Charge",
      id: "material-Large Zonai Charge"
    }),
    order: 251
  },
  {
    id: "Large Zonaite",
    name: intl.formatMessage({
      defaultMessage: "Large Zonaite",
      id: "material-Large Zonaite"
    }),
    order: 249
  },
  {
    id: "Light Dragon's Claw",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Claw",
      id: "material-Light Dragon's Claw"
    }),
    order: 237
  },
  {
    id: "Light Dragon's Fang",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Fang",
      id: "material-Light Dragon's Fang"
    }),
    order: 241
  },
  {
    id: "Light Dragon's Horn",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Horn",
      id: "material-Light Dragon's Horn"
    }),
    order: 184
  },
  {
    id: "Light Dragon's Scale",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Scale",
      id: "material-Light Dragon's Scale"
    }),
    order: 233
  },
  {
    id: "Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Lizalfos Horn",
      id: "material-Lizalfos Horn"
    }),
    order: 158
  },
  {
    id: "Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Lizalfos Tail",
      id: "material-Lizalfos Tail"
    }),
    order: 214
  },
  {
    id: "Lizalfos Talon",
    name: intl.formatMessage({
      defaultMessage: "Lizalfos Talon",
      id: "material-Lizalfos Talon"
    }),
    order: 228
  },
  {
    id: "Luminous Stone",
    name: intl.formatMessage({
      defaultMessage: "Luminous Stone",
      id: "material-Luminous Stone"
    }),
    order: 119
  },
  {
    id: "Lynel Guts",
    name: intl.formatMessage({
      defaultMessage: "Lynel Guts",
      id: "material-Lynel Guts"
    }),
    order: 126
  },
  {
    id: "Lynel Hoof",
    name: intl.formatMessage({
      defaultMessage: "Lynel Hoof",
      id: "material-Lynel Hoof"
    }),
    order: 197
  },
  {
    id: "Lynel Mace Horn",
    name: intl.formatMessage({
      defaultMessage: "Lynel Mace Horn",
      id: "material-Lynel Mace Horn"
    }),
    order: 198
  },
  {
    id: "Lynel Saber Horn",
    name: intl.formatMessage({
      defaultMessage: "Lynel Saber Horn",
      id: "material-Lynel Saber Horn"
    }),
    order: 165
  },
  {
    id: "Mighty Banana",
    name: intl.formatMessage({
      defaultMessage: "Mighty Banana",
      id: "material-Mighty Banana"
    }),
    order: 9
  },
  {
    id: "Mighty Thistle",
    name: intl.formatMessage({
      defaultMessage: "Mighty Thistle",
      id: "material-Mighty Thistle"
    }),
    order: 45
  },
  {
    id: "Moblin Fang",
    name: intl.formatMessage({
      defaultMessage: "Moblin Fang",
      id: "material-Moblin Fang"
    }),
    order: 224
  },
  {
    id: "Moblin Guts",
    name: intl.formatMessage({
      defaultMessage: "Moblin Guts",
      id: "material-Moblin Guts"
    }),
    order: 122
  },
  {
    id: "Moblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Moblin Horn",
      id: "material-Moblin Horn"
    }),
    order: 189
  },
  {
    id: "Molduga Fin",
    name: intl.formatMessage({
      defaultMessage: "Molduga Fin",
      id: "material-Molduga Fin"
    }),
    order: 149
  },
  {
    id: "Molduga Guts",
    name: intl.formatMessage({
      defaultMessage: "Molduga Guts",
      id: "material-Molduga Guts"
    }),
    order: 129
  },
  {
    id: "Molduga Jaw",
    name: intl.formatMessage({
      defaultMessage: "Molduga Jaw",
      id: "material-Molduga Jaw"
    }),
    order: 206
  },
  {
    id: "Naydra's Claw",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Claw",
      id: "material-Naydra's Claw"
    }),
    order: 235
  },
  {
    id: "Naydra's Fang",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Fang",
      id: "material-Naydra's Fang"
    }),
    order: 239
  },
  {
    id: "Naydra's Horn",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Horn",
      id: "material-Naydra's Horn"
    }),
    order: 182
  },
  {
    id: "Naydra's Scale",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Scale",
      id: "material-Naydra's Scale"
    }),
    order: 231
  },
  {
    id: "Naydra's Spike",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Spike",
      id: "material-Naydra's Spike"
    }),
    order: 211
  },
  {
    id: "Obsidian Frox Fang",
    name: intl.formatMessage({
      defaultMessage: "Obsidian Frox Fang",
      id: "material-Obsidian Frox Fang"
    }),
    order: 208
  },
  {
    id: "Octo Balloon",
    name: intl.formatMessage({
      defaultMessage: "Octo Balloon",
      id: "material-Octo Balloon"
    }),
    order: 135
  },
  {
    id: "Octorok Eyeball",
    name: intl.formatMessage({
      defaultMessage: "Octorok Eyeball",
      id: "material-Octorok Eyeball"
    }),
    order: 140
  },
  {
    id: "Octorok Tentacle",
    name: intl.formatMessage({
      defaultMessage: "Octorok Tentacle",
      id: "material-Octorok Tentacle"
    }),
    order: 222
  },
  {
    id: "Opal",
    name: intl.formatMessage({ defaultMessage: "Opal", id: "material-Opal" }),
    order: 117
  },
  {
    id: "Puffshroom",
    name: intl.formatMessage({
      defaultMessage: "Puffshroom",
      id: "material-Puffshroom"
    }),
    order: 17
  },
  {
    id: "Razorclaw Crab",
    name: intl.formatMessage({
      defaultMessage: "Razorclaw Crab",
      id: "material-Razorclaw Crab"
    }),
    order: 89
  },
  {
    id: "Razorshroom",
    name: intl.formatMessage({
      defaultMessage: "Razorshroom",
      id: "material-Razorshroom"
    }),
    order: 30
  },
  {
    id: "Red Chuchu Jelly",
    name: intl.formatMessage({
      defaultMessage: "Red Chuchu Jelly",
      id: "material-Red Chuchu Jelly"
    }),
    order: 131
  },
  {
    id: "Ruby",
    name: intl.formatMessage({ defaultMessage: "Ruby", id: "material-Ruby" }),
    order: 114
  },
  {
    id: "Rushroom",
    name: intl.formatMessage({
      defaultMessage: "Rushroom",
      id: "material-Rushroom"
    }),
    order: 22
  },
  {
    id: "Sapphire",
    name: intl.formatMessage({
      defaultMessage: "Sapphire",
      id: "material-Sapphire"
    }),
    order: 115
  },
  {
    id: "Shock Fruit",
    name: intl.formatMessage({
      defaultMessage: "Shock Fruit",
      id: "material-Shock Fruit"
    }),
    order: 13
  },
  {
    id: "Shock Like Stone",
    name: intl.formatMessage({
      defaultMessage: "Shock Like Stone",
      id: "material-Shock Like Stone"
    }),
    order: 188
  },
  {
    id: "Silent Princess",
    name: intl.formatMessage({
      defaultMessage: "Silent Princess",
      id: "material-Silent Princess"
    }),
    order: 37
  },
  {
    id: "Silent Shroom",
    name: intl.formatMessage({
      defaultMessage: "Silent Shroom",
      id: "material-Silent Shroom"
    }),
    order: 29
  },
  {
    id: "Silver Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Bokoblin Horn",
      id: "material-Silver Bokoblin Horn"
    }),
    order: 153
  },
  {
    id: "Silver Boss Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Boss Bokoblin Horn",
      id: "material-Silver Boss Bokoblin Horn"
    }),
    order: 157
  },
  {
    id: "Silver Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Lizalfos Horn",
      id: "material-Silver Lizalfos Horn"
    }),
    order: 161
  },
  {
    id: "Silver Lynel Mace Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Lynel Mace Horn",
      id: "material-Silver Lynel Mace Horn"
    }),
    order: 201
  },
  {
    id: "Silver Lynel Saber Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Lynel Saber Horn",
      id: "material-Silver Lynel Saber Horn"
    }),
    order: 168
  },
  {
    id: "Silver Moblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Moblin Horn",
      id: "material-Silver Moblin Horn"
    }),
    order: 192
  },
  {
    id: "Sizzlefin Trout",
    name: intl.formatMessage({
      defaultMessage: "Sizzlefin Trout",
      id: "material-Sizzlefin Trout"
    }),
    order: 78
  },
  {
    id: "Smotherwing Butterfly",
    name: intl.formatMessage({
      defaultMessage: "Smotherwing Butterfly",
      id: "material-Smotherwing Butterfly"
    }),
    order: 96
  },
  {
    id: "Sneaky River Snail",
    name: intl.formatMessage({
      defaultMessage: "Sneaky River Snail",
      id: "material-Sneaky River Snail"
    }),
    order: 88
  },
  {
    id: "Soldier Construct Horn",
    name: intl.formatMessage({
      defaultMessage: "Soldier Construct Horn",
      id: "material-Soldier Construct Horn"
    }),
    order: 169
  },
  {
    id: "Soldier Construct II Horn",
    name: intl.formatMessage({
      defaultMessage: "Soldier Construct II Horn",
      id: "material-Soldier Construct II Horn"
    }),
    order: 170
  },
  {
    id: "Soldier Construct III Horn",
    name: intl.formatMessage({
      defaultMessage: "Soldier Construct III Horn",
      id: "material-Soldier Construct III Horn"
    }),
    order: 171
  },
  {
    id: "Soldier Construct IV Horn",
    name: intl.formatMessage({
      defaultMessage: "Soldier Construct IV Horn",
      id: "material-Soldier Construct IV Horn"
    }),
    order: 172
  },
  {
    id: "Star Fragment",
    name: intl.formatMessage({
      defaultMessage: "Star Fragment",
      id: "material-Star Fragment"
    }),
    order: 72
  },
  {
    id: "Stealthfin Trout",
    name: intl.formatMessage({
      defaultMessage: "Stealthfin Trout",
      id: "material-Stealthfin Trout"
    }),
    order: 80
  },
  {
    id: "Sticky Frog",
    name: intl.formatMessage({
      defaultMessage: "Sticky Frog",
      id: "material-Sticky Frog"
    }),
    order: 108
  },
  {
    id: "Sticky Lizard",
    name: intl.formatMessage({
      defaultMessage: "Sticky Lizard",
      id: "material-Sticky Lizard"
    }),
    order: 112
  },
  {
    id: "Summerwing Butterfly",
    name: intl.formatMessage({
      defaultMessage: "Summerwing Butterfly",
      id: "material-Summerwing Butterfly"
    }),
    order: 94
  },
  {
    id: "Sundelion",
    name: intl.formatMessage({
      defaultMessage: "Sundelion",
      id: "material-Sundelion"
    }),
    order: 50
  },
  {
    id: "Sunset Firefly",
    name: intl.formatMessage({
      defaultMessage: "Sunset Firefly",
      id: "material-Sunset Firefly"
    }),
    order: 103
  },
  {
    id: "Sunshroom",
    name: intl.formatMessage({
      defaultMessage: "Sunshroom",
      id: "material-Sunshroom"
    }),
    order: 26
  },
  {
    id: "Swift Carrot",
    name: intl.formatMessage({
      defaultMessage: "Swift Carrot",
      id: "material-Swift Carrot"
    }),
    order: 40
  },
  {
    id: "Swift Violet",
    name: intl.formatMessage({
      defaultMessage: "Swift Violet",
      id: "material-Swift Violet"
    }),
    order: 49
  },
  {
    id: "Thunderwing Butterfly",
    name: intl.formatMessage({
      defaultMessage: "Thunderwing Butterfly",
      id: "material-Thunderwing Butterfly"
    }),
    order: 95
  },
  {
    id: "Topaz",
    name: intl.formatMessage({ defaultMessage: "Topaz", id: "material-Topaz" }),
    order: 116
  },
  {
    id: "Voltfin Trout",
    name: intl.formatMessage({
      defaultMessage: "Voltfin Trout",
      id: "material-Voltfin Trout"
    }),
    order: 79
  },
  {
    id: "Voltfruit",
    name: intl.formatMessage({
      defaultMessage: "Voltfruit",
      id: "material-Voltfruit"
    }),
    order: 6
  },
  {
    id: "Warm Darner",
    name: intl.formatMessage({
      defaultMessage: "Warm Darner",
      id: "material-Warm Darner"
    }),
    order: 98
  },
  {
    id: "Warm Safflina",
    name: intl.formatMessage({
      defaultMessage: "Warm Safflina",
      id: "material-Warm Safflina"
    }),
    order: 44
  },
  {
    id: "White Chuchu Jelly",
    name: intl.formatMessage({
      defaultMessage: "White Chuchu Jelly",
      id: "material-White Chuchu Jelly"
    }),
    order: 132
  },
  {
    id: "White-Maned Lynel Mace Horn",
    name: intl.formatMessage({
      defaultMessage: "White-Maned Lynel Mace Horn",
      id: "material-White-Maned Lynel Mace Horn"
    }),
    order: 200
  },
  {
    id: "White-Maned Lynel Saber Horn",
    name: intl.formatMessage({
      defaultMessage: "White-Maned Lynel Saber Horn",
      id: "material-White-Maned Lynel Saber Horn"
    }),
    order: 167
  },
  {
    id: "Winterwing Butterfly",
    name: intl.formatMessage({
      defaultMessage: "Winterwing Butterfly",
      id: "material-Winterwing Butterfly"
    }),
    order: 93
  },
  {
    id: "Yellow Chuchu Jelly",
    name: intl.formatMessage({
      defaultMessage: "Yellow Chuchu Jelly",
      id: "material-Yellow Chuchu Jelly"
    }),
    order: 133
  },
  {
    id: "Zapshroom",
    name: intl.formatMessage({
      defaultMessage: "Zapshroom",
      id: "material-Zapshroom"
    }),
    order: 28
  },
  {
    id: "Zonaite",
    name: intl.formatMessage({
      defaultMessage: "Zonaite",
      id: "material-Zonaite"
    }),
    order: 248
  }
];
