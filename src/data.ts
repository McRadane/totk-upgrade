import type { IntlShape } from "react-intl";

export type ArmorsIds =
  | "Amber Earrings"
  | "Ancient Hero's Aspect"
  | "Barbarian Armor"
  | "Barbarian Helm"
  | "Barbarian Leg Wraps"
  | "Cap of Time"
  | "Cap of Twilight"
  | "Cap of the Hero"
  | "Cap of the Sky"
  | "Cap of the Wild"
  | "Cap of the Wind"
  | "Champion's Leathers"
  | "Charged Headdress"
  | "Charged Shirt"
  | "Charged Trousers"
  | "Climber's Bandana"
  | "Climbing Boots"
  | "Climbing Gear"
  | "Desert Voe Headband"
  | "Desert Voe Spaulder"
  | "Desert Voe Trousers"
  | "Diamond Circlet"
  | "Ember Headdress"
  | "Ember Shirt"
  | "Ember Trousers"
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
  | "Hylian Hood"
  | "Hylian Trousers"
  | "Hylian Tunic"
  | "Mask of Awakening"
  | "Miner's Mask"
  | "Miner's Top"
  | "Miner's Trousers"
  | "Opal Earrings"
  | "Radiant Mask"
  | "Radiant Shirt"
  | "Radiant Tights"
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
  | "Yiga Armor"
  | "Yiga Mask"
  | "Yiga Tights"
  | "Zonaite Helm"
  | "Zonaite Shin Guards"
  | "Zonaite Waistguard"
  | "Zora Armor"
  | "Zora Greaves"
  | "Zora Helm";

export type SetsIds =
  | "Awakening"
  | "Barbarian"
  | "Charged"
  | "Climbing"
  | "Depths"
  | "Desert Voe"
  | "Ember"
  | "Fierce Deity"
  | "Flamebreaker"
  | "Froggy"
  | "Frostbite"
  | "Glide"
  | "Hero"
  | "Hylian"
  | "Miner's"
  | "Radiant"
  | "Royal Guard"
  | "Rubber"
  | "Sky"
  | "Snowquill"
  | "Soldier's"
  | "Stealth"
  | "Time"
  | "Twilight"
  | "Wild"
  | "Wind"
  | "Yiga"
  | "Zonaite"
  | "Zora";

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
  | "Light Dragon's Talon"
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
  | "Shard of Dinraal's Fang"
  | "Shard of Dinraal's Spike"
  | "Shard of Farosh's Fang"
  | "Shard of Farosh's Spike"
  | "Shard of Naydra's Fang"
  | "Shard of Naydra's Spike"
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
  id: ArmorsIds;
  name: string;
  rank1?: [string, number][];
  rank2?: [string, number][];
  rank3?: [string, number][];
  rank4?: [string, number][];
  set?: SetsIds;
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
  "Tunic of Memories",
];

export const getArmors = (intl: IntlShape): IDataArmor[] => [
  {
    id: "Mask of Awakening",
    name: intl.formatMessage({
      defaultMessage: "Mask of Awakening",
      id: "armor-Mask of Awakening",
    }),
    rank1: [
      ["Luminous Stone", 10],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Star Fragment", 1],
    ],
    set: "Awakening",
  },
  {
    id: "Trousers of Awakening",
    name: intl.formatMessage({
      defaultMessage: "Trousers of Awakening",
      id: "armor-Trousers of Awakening",
    }),
    rank1: [
      ["Luminous Stone", 10],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Star Fragment", 1],
    ],
    set: "Awakening",
  },
  {
    id: "Tunic of Awakening",
    name: intl.formatMessage({
      defaultMessage: "Tunic of Awakening",
      id: "armor-Tunic of Awakening",
    }),
    rank1: [
      ["Luminous Stone", 10],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Star Fragment", 1],
    ],
    set: "Awakening",
  },
  {
    id: "Barbarian Armor",
    name: intl.formatMessage({
      defaultMessage: "Barbarian Armor",
      id: "armor-Barbarian Armor",
    }),
    rank1: [["Mighty Thistle", 3]],
    rank2: [
      ["Lynel Saber Horn", 2],
      ["Lynel Mace Horn", 2],
      ["Razorshroom", 5],
    ],
    rank3: [
      ["Blue-Maned Lynel Saber Horn", 3],
      ["Blue-Maned Lynel Mace Horn", 3],
      ["Razorclaw Crab", 3],
    ],
    rank4: [
      ["White-Maned Lynel Saber Horn", 3],
      ["White-Maned Lynel Mace Horn", 3],
      ["Bladed Rhino Beetle", 3],
    ],
    set: "Barbarian",
  },
  {
    id: "Barbarian Helm",
    name: intl.formatMessage({
      defaultMessage: "Barbarian Helm",
      id: "armor-Barbarian Helm",
    }),
    rank1: [["Mighty Thistle", 3]],
    rank2: [
      ["Lynel Saber Horn", 2],
      ["Lynel Mace Horn", 2],
      ["Razorshroom", 5],
    ],
    rank3: [
      ["Blue-Maned Lynel Saber Horn", 3],
      ["Blue-Maned Lynel Mace Horn", 3],
      ["Razorclaw Crab", 3],
    ],
    rank4: [
      ["White-Maned Lynel Saber Horn", 3],
      ["White-Maned Lynel Mace Horn", 3],
      ["Bladed Rhino Beetle", 3],
    ],
    set: "Barbarian",
  },
  {
    id: "Barbarian Leg Wraps",
    name: intl.formatMessage({
      defaultMessage: "Barbarian Leg Wraps",
      id: "armor-Barbarian Leg Wraps",
    }),
    rank1: [["Mighty Thistle", 3]],
    rank2: [
      ["Lynel Saber Horn", 2],
      ["Lynel Mace Horn", 2],
      ["Razorshroom", 5],
    ],
    rank3: [
      ["Blue-Maned Lynel Saber Horn", 3],
      ["Blue-Maned Lynel Mace Horn", 3],
      ["Razorclaw Crab", 3],
    ],
    rank4: [
      ["White-Maned Lynel Saber Horn", 3],
      ["White-Maned Lynel Mace Horn", 3],
      ["Bladed Rhino Beetle", 3],
    ],
    set: "Barbarian",
  },
  {
    id: "Charged Headdress",
    name: intl.formatMessage({
      defaultMessage: "Charged Headdress",
      id: "armor-Charged Headdress",
    }),
    rank1: [["Shock Fruit", 3]],
    rank2: [
      ["Electric Lizalfos Horn", 5],
      ["Thunderwing Butterfly", 3],
    ],
    rank3: [
      ["Large Zonai Charge", 3],
      ["Shock Like Stone", 5],
      ["Electric Darner", 5],
    ],
    rank4: [
      ["Gleeok Thunder Horn", 5],
      ["Voltfin Trout", 10],
      ["Large Zonai Charge", 5],
    ],
    set: "Charged",
  },
  {
    id: "Charged Shirt",
    name: intl.formatMessage({
      defaultMessage: "Charged Shirt",
      id: "armor-Charged Shirt",
    }),
    rank1: [["Shock Fruit", 3]],
    rank2: [
      ["Electric Lizalfos Horn", 5],
      ["Thunderwing Butterfly", 3],
    ],
    rank3: [
      ["Large Zonai Charge", 3],
      ["Shock Like Stone", 5],
      ["Electric Darner", 5],
    ],
    rank4: [
      ["Gleeok Thunder Horn", 5],
      ["Voltfin Trout", 10],
      ["Large Zonai Charge", 5],
    ],
    set: "Charged",
  },
  {
    id: "Charged Trousers",
    name: intl.formatMessage({
      defaultMessage: "Charged Trousers",
      id: "armor-Charged Trousers",
    }),
    rank1: [["Shock Fruit", 3]],
    rank2: [
      ["Electric Lizalfos Horn", 5],
      ["Thunderwing Butterfly", 3],
    ],
    rank3: [
      ["Large Zonai Charge", 3],
      ["Shock Like Stone", 5],
      ["Electric Darner", 5],
    ],
    rank4: [
      ["Gleeok Thunder Horn", 5],
      ["Voltfin Trout", 10],
      ["Large Zonai Charge", 5],
    ],
    set: "Charged",
  },
  {
    id: "Climber's Bandana",
    name: intl.formatMessage({
      defaultMessage: "Climber's Bandana",
      id: "armor-Climber's Bandana",
    }),
    rank1: [
      ["Keese Wing", 3],
      ["Rushroom", 3],
    ],
    rank2: [
      ["Electric Keese Wing", 5],
      ["Hightail Lizard", 5],
    ],
    rank3: [
      ["Ice Keese Wing", 8],
      ["Hot-Footed Frog", 10],
    ],
    rank4: [
      ["Fire Keese Wing", 10],
      ["Swift Violet", 20],
    ],
    set: "Climbing",
  },
  {
    id: "Climbing Boots",
    name: intl.formatMessage({
      defaultMessage: "Climbing Boots",
      id: "armor-Climbing Boots",
    }),
    rank1: [
      ["Keese Wing", 3],
      ["Rushroom", 3],
    ],
    rank2: [
      ["Electric Keese Wing", 5],
      ["Hightail Lizard", 5],
    ],
    rank3: [
      ["Ice Keese Wing", 8],
      ["Hot-Footed Frog", 10],
    ],
    rank4: [
      ["Fire Keese Wing", 10],
      ["Swift Violet", 20],
    ],
    set: "Climbing",
  },
  {
    id: "Climbing Gear",
    name: intl.formatMessage({
      defaultMessage: "Climbing Gear",
      id: "armor-Climbing Gear",
    }),
    rank1: [
      ["Keese Wing", 3],
      ["Rushroom", 3],
    ],
    rank2: [
      ["Electric Keese Wing", 5],
      ["Hightail Lizard", 5],
    ],
    rank3: [
      ["Ice Keese Wing", 8],
      ["Hot-Footed Frog", 10],
    ],
    rank4: [
      ["Fire Keese Wing", 10],
      ["Swift Violet", 20],
    ],
    set: "Climbing",
  },
  {
    id: "Gaiters of the Depths",
    name: intl.formatMessage({
      defaultMessage: "Gaiters of the Depths",
      id: "armor-Gaiters of the Depths",
    }),
    rank1: [["Deep Firefly", 3]],
    rank2: [
      ["Dark Clump", 5],
      ["Frox Fang", 3],
    ],
    rank3: [
      ["Frox Fingernail", 3],
      ["Obsidian Frox Fang", 3],
      ["Zonaite", 20],
    ],
    rank4: [
      ["Blue-White Frox Fang", 5],
      ["Large Zonaite", 10],
      ["Frox Guts", 3],
    ],
    set: "Depths",
  },
  {
    id: "Hood of the Depths",
    name: intl.formatMessage({
      defaultMessage: "Hood of the Depths",
      id: "armor-Hood of the Depths",
    }),
    rank1: [["Deep Firefly", 3]],
    rank2: [
      ["Dark Clump", 5],
      ["Frox Fang", 3],
    ],
    rank3: [
      ["Frox Fingernail", 3],
      ["Obsidian Frox Fang", 3],
      ["Zonaite", 20],
    ],
    rank4: [
      ["Blue-White Frox Fang", 5],
      ["Large Zonaite", 10],
      ["Frox Guts", 3],
    ],
    set: "Depths",
  },
  {
    id: "Tunic of the Depths",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Depths",
      id: "armor-Tunic of the Depths",
    }),
    rank1: [["Deep Firefly", 3]],
    rank2: [
      ["Dark Clump", 5],
      ["Frox Fang", 3],
    ],
    rank3: [
      ["Frox Fingernail", 3],
      ["Obsidian Frox Fang", 3],
      ["Zonaite", 20],
    ],
    rank4: [
      ["Blue-White Frox Fang", 5],
      ["Large Zonaite", 10],
      ["Frox Guts", 3],
    ],
    set: "Depths",
  },
  {
    id: "Desert Voe Headband",
    name: intl.formatMessage({
      defaultMessage: "Desert Voe Headband",
      id: "armor-Desert Voe Headband",
    }),
    rank1: [["White Chuchu Jelly", 3]],
    rank2: [
      ["White Chuchu Jelly", 5],
      ["Cool Safflina", 3],
    ],
    rank3: [
      ["Ice Keese Wing", 5],
      ["Ice-Breath Lizalfos Tail", 3],
      ["Chillshroom", 5],
    ],
    rank4: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Ice-Breath Lizalfos Tail", 10],
      ["Sapphire", 5],
    ],
    set: "Desert Voe",
  },
  {
    id: "Desert Voe Spaulder",
    name: intl.formatMessage({
      defaultMessage: "Desert Voe Spaulder",
      id: "armor-Desert Voe Spaulder",
    }),
    rank1: [["White Chuchu Jelly", 3]],
    rank2: [
      ["White Chuchu Jelly", 5],
      ["Cool Safflina", 3],
    ],
    rank3: [
      ["Ice Keese Wing", 5],
      ["Ice-Breath Lizalfos Tail", 3],
      ["Chillshroom", 5],
    ],
    rank4: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Ice-Breath Lizalfos Tail", 10],
      ["Sapphire", 5],
    ],
    set: "Desert Voe",
  },
  {
    id: "Desert Voe Trousers",
    name: intl.formatMessage({
      defaultMessage: "Desert Voe Trousers",
      id: "armor-Desert Voe Trousers",
    }),
    rank1: [["White Chuchu Jelly", 3]],
    rank2: [
      ["White Chuchu Jelly", 5],
      ["Cool Safflina", 3],
    ],
    rank3: [
      ["Ice Keese Wing", 5],
      ["Ice-Breath Lizalfos Tail", 3],
      ["Chillshroom", 5],
    ],
    rank4: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Ice-Breath Lizalfos Tail", 10],
      ["Sapphire", 5],
    ],
    set: "Desert Voe",
  },
  {
    id: "Ember Headdress",
    name: intl.formatMessage({
      defaultMessage: "Ember Headdress",
      id: "armor-Ember Headdress",
    }),
    rank1: [["Fire Fruit", 3]],
    rank2: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Summerwing Butterfly", 5],
    ],
    rank3: [
      ["Fire Like Stone", 5],
      ["Warm Darner", 7],
      ["Large Zonai Charge", 5],
    ],
    rank4: [
      ["Gleeok Flame Horn", 5],
      ["Sizzlefin Trout", 10],
      ["Large Zonai Charge", 10],
    ],
    set: "Ember",
  },
  {
    id: "Ember Shirt",
    name: intl.formatMessage({
      defaultMessage: "Ember Shirt",
      id: "armor-Ember Shirt",
    }),
    rank1: [["Fire Fruit", 3]],
    rank2: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Summerwing Butterfly", 5],
    ],
    rank3: [
      ["Fire Like Stone", 5],
      ["Warm Darner", 7],
      ["Large Zonai Charge", 5],
    ],
    rank4: [
      ["Gleeok Flame Horn", 5],
      ["Sizzlefin Trout", 10],
      ["Large Zonai Charge", 10],
    ],
    set: "Ember",
  },
  {
    id: "Ember Trousers",
    name: intl.formatMessage({
      defaultMessage: "Ember Trousers",
      id: "armor-Ember Trousers",
    }),
    rank1: [["Fire Fruit", 3]],
    rank2: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Summerwing Butterfly", 5],
    ],
    rank3: [
      ["Fire Like Stone", 5],
      ["Warm Darner", 7],
      ["Large Zonai Charge", 5],
    ],
    rank4: [
      ["Gleeok Flame Horn", 5],
      ["Sizzlefin Trout", 10],
      ["Large Zonai Charge", 10],
    ],
    set: "Ember",
  },
  {
    id: "Fierce Deity Armor",
    name: intl.formatMessage({
      defaultMessage: "Fierce Deity Armor",
      id: "armor-Fierce Deity Armor",
    }),
    rank1: [
      ["Hinox Toenail", 5],
      ["Naydra's Scale", 1],
    ],
    rank2: [
      ["Hinox Tooth", 5],
      ["Naydra's Claw", 1],
    ],
    rank3: [
      ["Hinox Guts", 2],
      ["Shard of Naydra's Fang", 1],
    ],
    rank4: [
      ["Lynel Guts", 2],
      ["Naydra's Horn", 1],
    ],
    set: "Fierce Deity",
  },
  {
    id: "Fierce Deity Boots",
    name: intl.formatMessage({
      defaultMessage: "Fierce Deity Boots",
      id: "armor-Fierce Deity Boots",
    }),
    rank1: [
      ["Hinox Toenail", 5],
      ["Farosh's Scale", 1],
    ],
    rank2: [
      ["Hinox Tooth", 5],
      ["Farosh's Claw", 1],
    ],
    rank3: [
      ["Hinox Guts", 2],
      ["Shard of Farosh's Fang", 1],
    ],
    rank4: [
      ["Lynel Guts", 2],
      ["Farosh's Horn", 1],
    ],
    set: "Fierce Deity",
  },
  {
    id: "Fierce Deity Mask",
    name: intl.formatMessage({
      defaultMessage: "Fierce Deity Mask",
      id: "armor-Fierce Deity Mask",
    }),
    rank1: [
      ["Hinox Toenail", 5],
      ["Dinraal's Scale", 1],
    ],
    rank2: [
      ["Hinox Tooth", 5],
      ["Dinraal's Claw", 1],
    ],
    rank3: [
      ["Hinox Guts", 2],
      ["Shard of Dinraal's Fang", 1],
    ],
    rank4: [
      ["Lynel Guts", 2],
      ["Dinraal's Horn", 1],
    ],
    set: "Fierce Deity",
  },
  {
    id: "Flamebreaker Armor",
    name: intl.formatMessage({
      defaultMessage: "Flamebreaker Armor",
      id: "armor-Flamebreaker Armor",
    }),
    rank1: [["Moblin Horn", 3]],
    rank2: [
      ["Moblin Fang", 5],
      ["Fireproof Lizard", 5],
    ],
    rank3: [
      ["Blue Moblin Horn", 5],
      ["Smotherwing Butterfly", 3],
      ["Flint", 15],
    ],
    rank4: [
      ["Black Moblin Horn", 5],
      ["Smotherwing Butterfly", 5],
      ["Flint", 30],
    ],
    set: "Flamebreaker",
  },
  {
    id: "Flamebreaker Boots",
    name: intl.formatMessage({
      defaultMessage: "Flamebreaker Boots",
      id: "armor-Flamebreaker Boots",
    }),
    rank1: [["Moblin Horn", 3]],
    rank2: [
      ["Moblin Fang", 5],
      ["Fireproof Lizard", 5],
    ],
    rank3: [
      ["Blue Moblin Horn", 5],
      ["Smotherwing Butterfly", 3],
      ["Flint", 15],
    ],
    rank4: [
      ["Black Moblin Horn", 5],
      ["Smotherwing Butterfly", 5],
      ["Flint", 30],
    ],
    set: "Flamebreaker",
  },
  {
    id: "Flamebreaker Helm",
    name: intl.formatMessage({
      defaultMessage: "Flamebreaker Helm",
      id: "armor-Flamebreaker Helm",
    }),
    rank1: [["Moblin Horn", 3]],
    rank2: [
      ["Moblin Fang", 5],
      ["Fireproof Lizard", 5],
    ],
    rank3: [
      ["Blue Moblin Horn", 5],
      ["Smotherwing Butterfly", 3],
      ["Flint", 15],
    ],
    rank4: [
      ["Black Moblin Horn", 5],
      ["Smotherwing Butterfly", 5],
      ["Flint", 30],
    ],
    set: "Flamebreaker",
  },
  {
    id: "Froggy Hood",
    name: intl.formatMessage({
      defaultMessage: "Froggy Hood",
      id: "armor-Froggy Hood",
    }),
    rank1: [["Sticky Lizard", 3]],
    rank2: [
      ["Sticky Lizard", 5],
      ["Horriblin Horn", 5],
    ],
    rank3: [
      ["Blue Horriblin Horn", 5],
      ["Sticky Frog", 5],
    ],
    rank4: [
      ["Black Horriblin Horn", 5],
      ["Horriblin Guts", 10],
      ["Opal", 10],
    ],
    set: "Froggy",
  },
  {
    id: "Froggy Leggings",
    name: intl.formatMessage({
      defaultMessage: "Froggy Leggings",
      id: "armor-Froggy Leggings",
    }),
    rank1: [["Sticky Lizard", 3]],
    rank2: [
      ["Sticky Lizard", 5],
      ["Horriblin Horn", 5],
    ],
    rank3: [
      ["Blue Horriblin Horn", 5],
      ["Sticky Frog", 5],
    ],
    rank4: [
      ["Black Horriblin Horn", 5],
      ["Horriblin Guts", 10],
      ["Opal", 10],
    ],
    set: "Froggy",
  },
  {
    id: "Froggy Sleeve",
    name: intl.formatMessage({
      defaultMessage: "Froggy Sleeve",
      id: "armor-Froggy Sleeve",
    }),
    rank1: [["Sticky Lizard", 3]],
    rank2: [
      ["Sticky Lizard", 5],
      ["Horriblin Horn", 5],
    ],
    rank3: [
      ["Blue Horriblin Horn", 5],
      ["Sticky Frog", 5],
    ],
    rank4: [
      ["Black Horriblin Horn", 5],
      ["Horriblin Guts", 10],
      ["Opal", 10],
    ],
    set: "Froggy",
  },
  {
    id: "Frostbite Headdress",
    name: intl.formatMessage({
      defaultMessage: "Frostbite Headdress",
      id: "armor-Frostbite Headdress",
    }),
    rank1: [["Ice Fruit", 3]],
    rank2: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Winterwing Butterfly", 5],
    ],
    rank3: [
      ["Ice Like Stone", 5],
      ["Cold Darner", 5],
      ["Large Zonai Charge", 5],
    ],
    rank4: [
      ["Gleeok Frost Horn", 5],
      ["Chillfin Trout", 10],
      ["Large Zonai Charge", 10],
    ],
    set: "Frostbite",
  },
  {
    id: "Frostbite Shirt",
    name: intl.formatMessage({
      defaultMessage: "Frostbite Shirt",
      id: "armor-Frostbite Shirt",
    }),
    rank1: [["Ice Fruit", 3]],
    rank2: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Winterwing Butterfly", 5],
    ],
    rank3: [
      ["Ice Like Stone", 5],
      ["Cold Darner", 5],
      ["Large Zonai Charge", 5],
    ],
    rank4: [
      ["Gleeok Frost Horn", 5],
      ["Chillfin Trout", 10],
      ["Large Zonai Charge", 10],
    ],
    set: "Frostbite",
  },
  {
    id: "Frostbite Trousers",
    name: intl.formatMessage({
      defaultMessage: "Frostbite Trousers",
      id: "armor-Frostbite Trousers",
    }),
    rank1: [["Ice Fruit", 3]],
    rank2: [
      ["Ice-Breath Lizalfos Horn", 5],
      ["Winterwing Butterfly", 5],
    ],
    rank3: [
      ["Ice Like Stone", 5],
      ["Cold Darner", 5],
      ["Large Zonai Charge", 5],
    ],
    rank4: [
      ["Gleeok Frost Horn", 5],
      ["Chillfin Trout", 10],
      ["Large Zonai Charge", 10],
    ],
    set: "Frostbite",
  },
  {
    id: "Glide Mask",
    name: intl.formatMessage({
      defaultMessage: "Glide Mask",
      id: "armor-Glide Mask",
    }),
    rank1: [["Keese Wing", 3]],
    rank2: [
      ["Aerocuda Eyeball", 6],
      ["Keese Wing", 5],
    ],
    rank3: [
      ["Aerocuda Eyeball", 8],
      ["Aerocuda Wing", 6],
    ],
    rank4: [
      ["Gleeok Wing", 12],
      ["Aerocuda Wing", 10],
      ["Gibdo Wing", 8],
    ],
    set: "Glide",
  },
  {
    id: "Glide Shirt",
    name: intl.formatMessage({
      defaultMessage: "Glide Shirt",
      id: "armor-Glide Shirt",
    }),
    rank1: [["Keese Wing", 3]],
    rank2: [
      ["Aerocuda Eyeball", 6],
      ["Keese Wing", 5],
    ],
    rank3: [
      ["Aerocuda Eyeball", 8],
      ["Aerocuda Wing", 6],
    ],
    rank4: [
      ["Gleeok Wing", 12],
      ["Aerocuda Wing", 10],
      ["Gibdo Wing", 8],
    ],
    set: "Glide",
  },
  {
    id: "Glide Tights",
    name: intl.formatMessage({
      defaultMessage: "Glide Tights",
      id: "armor-Glide Tights",
    }),
    rank1: [["Keese Wing", 3]],
    rank2: [
      ["Aerocuda Eyeball", 6],
      ["Keese Wing", 5],
    ],
    rank3: [
      ["Aerocuda Eyeball", 8],
      ["Aerocuda Wing", 6],
    ],
    rank4: [
      ["Gleeok Wing", 12],
      ["Aerocuda Wing", 10],
      ["Gibdo Wing", 8],
    ],
    set: "Glide",
  },
  {
    id: "Cap of the Hero",
    name: intl.formatMessage({
      defaultMessage: "Cap of the Hero",
      id: "armor-Cap of the Hero",
    }),
    rank1: [
      ["Ruby", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Ruby", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Ruby", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Ruby", 10],
      ["Star Fragment", 1],
    ],
    set: "Hero",
  },
  {
    id: "Trousers of the Hero",
    name: intl.formatMessage({
      defaultMessage: "Trousers of the Hero",
      id: "armor-Trousers of the Hero",
    }),
    rank1: [
      ["Ruby", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Ruby", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Ruby", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Ruby", 10],
      ["Star Fragment", 1],
    ],
    set: "Hero",
  },
  {
    id: "Tunic of the Hero",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Hero",
      id: "armor-Tunic of the Hero",
    }),
    rank1: [
      ["Ruby", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Ruby", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Ruby", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Ruby", 10],
      ["Star Fragment", 1],
    ],
    set: "Hero",
  },
  {
    id: "Hylian Hood",
    name: intl.formatMessage({
      defaultMessage: "Hylian Hood",
      id: "armor-Hylian Hood",
    }),
    rank1: [["Bokoblin Horn", 5]],
    rank2: [
      ["Blue Bokoblin Horn", 5],
      ["Bokoblin Fang", 3],
    ],
    rank3: [
      ["Black Bokoblin Horn", 5],
      ["Bokoblin Guts", 3],
      ["Amber", 20],
    ],
    rank4: [
      ["Silver Bokoblin Horn", 5],
      ["Bokoblin Guts", 5],
      ["Amber", 30],
    ],
    set: "Hylian",
  },
  {
    id: "Hylian Trousers",
    name: intl.formatMessage({
      defaultMessage: "Hylian Trousers",
      id: "armor-Hylian Trousers",
    }),
    rank1: [["Bokoblin Horn", 5]],
    rank2: [
      ["Blue Bokoblin Horn", 5],
      ["Bokoblin Fang", 3],
    ],
    rank3: [
      ["Black Bokoblin Horn", 5],
      ["Bokoblin Guts", 3],
      ["Amber", 20],
    ],
    rank4: [
      ["Silver Bokoblin Horn", 5],
      ["Bokoblin Guts", 5],
      ["Amber", 30],
    ],
    set: "Hylian",
  },
  {
    id: "Hylian Tunic",
    name: intl.formatMessage({
      defaultMessage: "Hylian Tunic",
      id: "armor-Hylian Tunic",
    }),
    rank1: [["Bokoblin Horn", 5]],
    rank2: [
      ["Blue Bokoblin Horn", 5],
      ["Bokoblin Fang", 3],
    ],
    rank3: [
      ["Black Bokoblin Horn", 5],
      ["Bokoblin Guts", 3],
      ["Amber", 20],
    ],
    rank4: [
      ["Silver Bokoblin Horn", 5],
      ["Bokoblin Guts", 5],
      ["Amber", 30],
    ],
    set: "Hylian",
  },
  {
    id: "Miner's Mask",
    name: intl.formatMessage({
      defaultMessage: "Miner's Mask",
      id: "armor-Miner's Mask",
    }),
    rank1: [["Brightbloom Seeds", 10]],
    rank2: [
      ["Brightbloom Seeds", 20],
      ["Bright Caps", 5],
    ],
    rank3: [
      ["Giant Brightbloom Seed", 15],
      ["Glowing Cave Fish", 5],
      ["Deep Firefly", 10],
    ],
    rank4: [
      ["Giant Brightbloom Seed", 20],
      ["Diamond", 3],
      ["Large Zonaite", 10],
    ],
    set: "Miner's",
  },
  {
    id: "Miner's Top",
    name: intl.formatMessage({
      defaultMessage: "Miner's Top",
      id: "armor-Miner's Top",
    }),
    rank1: [["Brightbloom Seeds", 10]],
    rank2: [
      ["Brightbloom Seeds", 20],
      ["Bright Caps", 5],
    ],
    rank3: [
      ["Giant Brightbloom Seed", 15],
      ["Glowing Cave Fish", 5],
      ["Deep Firefly", 10],
    ],
    rank4: [
      ["Giant Brightbloom Seed", 20],
      ["Diamond", 3],
      ["Large Zonaite", 10],
    ],
    set: "Miner's",
  },
  {
    id: "Miner's Trousers",
    name: intl.formatMessage({
      defaultMessage: "Miner's Trousers",
      id: "armor-Miner's Trousers",
    }),
    rank1: [["Brightbloom Seeds", 10]],
    rank2: [
      ["Brightbloom Seeds", 20],
      ["Bright Caps", 5],
    ],
    rank3: [
      ["Giant Brightbloom Seed", 15],
      ["Glowing Cave Fish", 5],
      ["Deep Firefly", 10],
    ],
    rank4: [
      ["Giant Brightbloom Seed", 20],
      ["Diamond", 3],
      ["Large Zonaite", 10],
    ],
    set: "Miner's",
  },
  {
    id: "Radiant Mask",
    name: intl.formatMessage({
      defaultMessage: "Radiant Mask",
      id: "armor-Radiant Mask",
    }),
    rank1: [
      ["Luminous Stone", 10],
      ["Moblin Guts", 1],
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Moblin Guts", 2],
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Horriblin Guts", 3],
      ["Gibdo Bone", 10],
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Lynel Guts", 3],
      ["Molduga Jaw", 3],
    ],
    set: "Radiant",
  },
  {
    id: "Radiant Shirt",
    name: intl.formatMessage({
      defaultMessage: "Radiant Shirt",
      id: "armor-Radiant Shirt",
    }),
    rank1: [
      ["Luminous Stone", 10],
      ["Moblin Guts", 1],
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Moblin Guts", 2],
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Horriblin Guts", 3],
      ["Gibdo Bone", 10],
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Lynel Guts", 3],
      ["Molduga Jaw", 3],
    ],
    set: "Radiant",
  },
  {
    id: "Radiant Tights",
    name: intl.formatMessage({
      defaultMessage: "Radiant Tights",
      id: "armor-Radiant Tights",
    }),
    rank1: [
      ["Luminous Stone", 10],
      ["Moblin Guts", 1],
    ],
    rank2: [
      ["Luminous Stone", 15],
      ["Moblin Guts", 2],
    ],
    rank3: [
      ["Luminous Stone", 20],
      ["Horriblin Guts", 3],
      ["Gibdo Bone", 10],
    ],
    rank4: [
      ["Luminous Stone", 30],
      ["Lynel Guts", 3],
      ["Molduga Jaw", 3],
    ],
    set: "Radiant",
  },
  {
    id: "Royal Guard Boots",
    name: intl.formatMessage({
      defaultMessage: "Royal Guard Boots",
      id: "armor-Royal Guard Boots",
    }),
    rank1: [
      ["Boss Bokoblin Horn", 3],
      ["Bokoblin Guts", 3],
    ],
    rank2: [
      ["Blue Boss Bokoblin Horn", 3],
      ["Boss Bokoblin Guts", 3],
    ],
    rank3: [
      ["Black Boss Bokoblin Horn", 3],
      ["Hinox Guts", 3],
    ],
    rank4: [
      ["Silver Boss Bokoblin Horn", 3],
      ["Molduga Guts", 3],
      ["Gleeok Guts", 3],
    ],
    set: "Royal Guard",
  },
  {
    id: "Royal Guard Cap",
    name: intl.formatMessage({
      defaultMessage: "Royal Guard Cap",
      id: "armor-Royal Guard Cap",
    }),
    rank1: [
      ["Boss Bokoblin Horn", 3],
      ["Bokoblin Guts", 3],
    ],
    rank2: [
      ["Blue Boss Bokoblin Horn", 3],
      ["Boss Bokoblin Guts", 3],
    ],
    rank3: [
      ["Black Boss Bokoblin Horn", 3],
      ["Hinox Guts", 3],
    ],
    rank4: [
      ["Silver Boss Bokoblin Horn", 3],
      ["Molduga Guts", 3],
      ["Gleeok Guts", 3],
    ],
    set: "Royal Guard",
  },
  {
    id: "Royal Guard Uniform",
    name: intl.formatMessage({
      defaultMessage: "Royal Guard Uniform",
      id: "armor-Royal Guard Uniform",
    }),
    rank1: [
      ["Boss Bokoblin Horn", 3],
      ["Bokoblin Guts", 3],
    ],
    rank2: [
      ["Blue Boss Bokoblin Horn", 3],
      ["Boss Bokoblin Guts", 3],
    ],
    rank3: [
      ["Black Boss Bokoblin Horn", 3],
      ["Hinox Guts", 3],
    ],
    rank4: [
      ["Silver Boss Bokoblin Horn", 3],
      ["Molduga Guts", 3],
      ["Gleeok Guts", 3],
    ],
    set: "Royal Guard",
  },
  {
    id: "Rubber Armor",
    name: intl.formatMessage({
      defaultMessage: "Rubber Armor",
      id: "armor-Rubber Armor",
    }),
    rank1: [
      ["Electric Lizalfos Horn", 1],
      ["Yellow Chuchu Jelly", 3],
    ],
    rank2: [
      ["Yellow Chuchu Jelly", 8],
      ["Voltfruit", 5],
    ],
    rank3: [
      ["Zapshroom", 5],
      ["Electric Lizalfos Tail", 5],
      ["Electric Safflina", 8],
    ],
    rank4: [
      ["Electric Lizalfos Horn", 5],
      ["Topaz", 5],
      ["Electric Lizalfos Tail", 8],
    ],
    set: "Rubber",
  },
  {
    id: "Rubber Helm",
    name: intl.formatMessage({
      defaultMessage: "Rubber Helm",
      id: "armor-Rubber Helm",
    }),
    rank1: [
      ["Electric Lizalfos Horn", 1],
      ["Yellow Chuchu Jelly", 3],
    ],
    rank2: [
      ["Yellow Chuchu Jelly", 8],
      ["Voltfruit", 5],
    ],
    rank3: [
      ["Zapshroom", 5],
      ["Electric Lizalfos Tail", 5],
      ["Electric Safflina", 8],
    ],
    rank4: [
      ["Electric Lizalfos Horn", 5],
      ["Topaz", 5],
      ["Electric Lizalfos Tail", 8],
    ],
    set: "Rubber",
  },
  {
    id: "Rubber Tights",
    name: intl.formatMessage({
      defaultMessage: "Rubber Tights",
      id: "armor-Rubber Tights",
    }),
    rank1: [
      ["Electric Lizalfos Horn", 1],
      ["Yellow Chuchu Jelly", 3],
    ],
    rank2: [
      ["Yellow Chuchu Jelly", 8],
      ["Voltfruit", 5],
    ],
    rank3: [
      ["Zapshroom", 5],
      ["Electric Lizalfos Tail", 5],
      ["Electric Safflina", 8],
    ],
    rank4: [
      ["Electric Lizalfos Horn", 5],
      ["Topaz", 5],
      ["Electric Lizalfos Tail", 8],
    ],
    set: "Rubber",
  },
  {
    id: "Cap of the Sky",
    name: intl.formatMessage({
      defaultMessage: "Cap of the Sky",
      id: "armor-Cap of the Sky",
    }),
    rank1: [
      ["Sapphire", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Sapphire", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Sapphire", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Sapphire", 10],
      ["Star Fragment", 1],
    ],
    set: "Sky",
  },
  {
    id: "Tunic of the Sky",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Sky",
      id: "armor-Tunic of the Sky",
    }),
    rank1: [
      ["Sapphire", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Sapphire", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Sapphire", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Sapphire", 10],
      ["Star Fragment", 1],
    ],
    set: "Sky",
  },
  {
    id: "Trousers of the Sky",
    name: intl.formatMessage({
      defaultMessage: "Trousers of the Sky",
      id: "armor-Trousers of the Sky",
    }),
    rank1: [
      ["Sapphire", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Sapphire", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Sapphire", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Sapphire", 10],
      ["Star Fragment", 1],
    ],
    set: "Sky",
  },
  {
    id: "Snowquill Headdress",
    name: intl.formatMessage({
      defaultMessage: "Snowquill Headdress",
      id: "armor-Snowquill Headdress",
    }),
    rank1: [["Red Chuchu Jelly", 3]],
    rank2: [
      ["Red Chuchu Jelly", 5],
      ["Warm Safflina", 3],
    ],
    rank3: [
      ["Fire Keese Wing", 5],
      ["Fire-Breath Lizalfos Tail", 3],
      ["Sunshroom", 5],
    ],
    rank4: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Fire-Breath Lizalfos Tail", 10],
      ["Ruby", 5],
    ],
    set: "Snowquill",
  },
  {
    id: "Snowquill Trousers",
    name: intl.formatMessage({
      defaultMessage: "Snowquill Trousers",
      id: "armor-Snowquill Trousers",
    }),
    rank1: [["Red Chuchu Jelly", 3]],
    rank2: [
      ["Red Chuchu Jelly", 5],
      ["Warm Safflina", 3],
    ],
    rank3: [
      ["Fire Keese Wing", 5],
      ["Fire-Breath Lizalfos Tail", 3],
      ["Sunshroom", 5],
    ],
    rank4: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Fire-Breath Lizalfos Tail", 10],
      ["Ruby", 5],
    ],
    set: "Snowquill",
  },
  {
    id: "Snowquill Tunic",
    name: intl.formatMessage({
      defaultMessage: "Snowquill Tunic",
      id: "armor-Snowquill Tunic",
    }),
    rank1: [["Red Chuchu Jelly", 3]],
    rank2: [
      ["Red Chuchu Jelly", 5],
      ["Warm Safflina", 3],
    ],
    rank3: [
      ["Fire Keese Wing", 5],
      ["Fire-Breath Lizalfos Tail", 3],
      ["Sunshroom", 5],
    ],
    rank4: [
      ["Fire-Breath Lizalfos Horn", 5],
      ["Fire-Breath Lizalfos Tail", 10],
      ["Ruby", 5],
    ],
    set: "Snowquill",
  },
  {
    id: "Soldier's Armor",
    name: intl.formatMessage({
      defaultMessage: "Soldier's Armor",
      id: "armor-Soldier's Armor",
    }),
    rank1: [
      ["Chuchu Jelly", 5],
      ["Bokoblin Guts", 3],
    ],
    rank2: [
      ["Keese Eyeball", 5],
      ["Moblin Guts", 3],
    ],
    rank3: [
      ["Lizalfos Tail", 3],
      ["Hinox Guts", 3],
      ["Flint", 30],
    ],
    rank4: [
      ["Amber", 30],
      ["Lynel Hoof", 5],
      ["Lynel Guts", 5],
    ],
    set: "Soldier's",
  },
  {
    id: "Soldier's Greaves",
    name: intl.formatMessage({
      defaultMessage: "Soldier's Greaves",
      id: "armor-Soldier's Greaves",
    }),
    rank1: [
      ["Chuchu Jelly", 5],
      ["Bokoblin Guts", 3],
    ],
    rank2: [
      ["Keese Eyeball", 5],
      ["Moblin Guts", 3],
    ],
    rank3: [
      ["Lizalfos Tail", 3],
      ["Hinox Guts", 3],
      ["Flint", 30],
    ],
    rank4: [
      ["Amber", 30],
      ["Lynel Hoof", 5],
      ["Lynel Guts", 5],
    ],
    set: "Soldier's",
  },
  {
    id: "Soldier's Helm",
    name: intl.formatMessage({
      defaultMessage: "Soldier's Helm",
      id: "armor-Soldier's Helm",
    }),
    rank1: [
      ["Chuchu Jelly", 5],
      ["Bokoblin Guts", 3],
    ],
    rank2: [
      ["Keese Eyeball", 5],
      ["Moblin Guts", 3],
    ],
    rank3: [
      ["Lizalfos Tail", 3],
      ["Hinox Guts", 3],
      ["Flint", 30],
    ],
    rank4: [
      ["Amber", 30],
      ["Lynel Hoof", 5],
      ["Lynel Guts", 5],
    ],
    set: "Soldier's",
  },
  {
    id: "Stealth Chest Guard",
    name: intl.formatMessage({
      defaultMessage: "Stealth Chest Guard",
      id: "armor-Stealth Chest Guard",
    }),
    rank1: [["Blue Nightshade", 3]],
    rank2: [
      ["Blue Nightshade", 5],
      ["Sunset Firefly", 5],
    ],
    rank3: [
      ["Silent Shroom", 8],
      ["Sneaky River Snail", 5],
      ["Sticky Frog", 5],
    ],
    rank4: [
      ["Stealthfin Trout", 10],
      ["Silent Princess", 5],
      ["Sundelion", 10],
    ],
    set: "Stealth",
  },
  {
    id: "Stealth Mask",
    name: intl.formatMessage({
      defaultMessage: "Stealth Mask",
      id: "armor-Stealth Mask",
    }),
    rank1: [["Blue Nightshade", 3]],
    rank2: [
      ["Blue Nightshade", 5],
      ["Sunset Firefly", 5],
    ],
    rank3: [
      ["Silent Shroom", 8],
      ["Sneaky River Snail", 5],
      ["Sticky Frog", 5],
    ],
    rank4: [
      ["Stealthfin Trout", 10],
      ["Silent Princess", 5],
      ["Sundelion", 10],
    ],
    set: "Stealth",
  },
  {
    id: "Stealth Tights",
    name: intl.formatMessage({
      defaultMessage: "Stealth Tights",
      id: "armor-Stealth Tights",
    }),
    rank1: [["Blue Nightshade", 3]],
    rank2: [
      ["Blue Nightshade", 5],
      ["Sunset Firefly", 5],
    ],
    rank3: [
      ["Silent Shroom", 8],
      ["Sneaky River Snail", 5],
      ["Sticky Frog", 5],
    ],
    rank4: [
      ["Stealthfin Trout", 10],
      ["Silent Princess", 5],
      ["Sundelion", 10],
    ],
    set: "Stealth",
  },
  {
    id: "Cap of Time",
    name: intl.formatMessage({
      defaultMessage: "Cap of Time",
      id: "armor-Cap of Time",
    }),
    rank1: [
      ["Amber", 10],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Amber", 20],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Amber", 30],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Amber", 40],
      ["Star Fragment", 1],
    ],
    set: "Time",
  },
  {
    id: "Trousers of Time",
    name: intl.formatMessage({
      defaultMessage: "Trousers of Time",
      id: "armor-Trousers of Time",
    }),
    rank1: [
      ["Amber", 10],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Amber", 20],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Amber", 30],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Amber", 40],
      ["Star Fragment", 1],
    ],
    set: "Time",
  },
  {
    id: "Tunic of Time",
    name: intl.formatMessage({
      defaultMessage: "Tunic of Time",
      id: "armor-Tunic of Time",
    }),
    rank1: [
      ["Amber", 10],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Amber", 20],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Amber", 30],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Amber", 40],
      ["Star Fragment", 1],
    ],
    set: "Time",
  },
  {
    id: "Cap of Twilight",
    name: intl.formatMessage({
      defaultMessage: "Cap of Twilight",
      id: "armor-Cap of Twilight",
    }),
    rank1: [
      ["Topaz", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Topaz", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Topaz", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Topaz", 10],
      ["Star Fragment", 1],
    ],
    set: "Twilight",
  },
  {
    id: "Trousers of Twilight",
    name: intl.formatMessage({
      defaultMessage: "Trousers of Twilight",
      id: "armor-Trousers of Twilight",
    }),
    rank1: [
      ["Topaz", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Topaz", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Topaz", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Topaz", 10],
      ["Star Fragment", 1],
    ],
    set: "Twilight",
  },
  {
    id: "Tunic of Twilight",
    name: intl.formatMessage({
      defaultMessage: "Tunic of Twilight",
      id: "armor-Tunic of Twilight",
    }),
    rank1: [
      ["Topaz", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Topaz", 4],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Topaz", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Topaz", 10],
      ["Star Fragment", 1],
    ],
    set: "Twilight",
  },
  {
    id: "Cap of the Wild",
    name: intl.formatMessage({
      defaultMessage: "Cap of the Wild",
      id: "armor-Cap of the Wild",
    }),
    rank1: [
      ["Acorn", 10],
      ["Farosh's Scale", 2],
    ],
    rank2: [
      ["Courser Bee Honey", 5],
      ["Farosh's Claw", 2],
    ],
    rank3: [
      ["Energetic Rhino Beetle", 3],
      ["Farosh's Fang", 2],
      ["Shard of Farosh's Spike", 5],
    ],
    rank4: [
      ["Farosh's Horn", 2],
      ["Star Fragment", 3],
      ["Shard of Farosh's Spike", 10],
    ],
    set: "Wild",
  },
  {
    id: "Trousers of the Wild",
    name: intl.formatMessage({
      defaultMessage: "Trousers of the Wild",
      id: "armor-Trousers of the Wild",
    }),
    rank1: [
      ["Acorn", 10],
      ["Dinraal's Scale", 2],
    ],
    rank2: [
      ["Courser Bee Honey", 5],
      ["Dinraal's Claw", 2],
    ],
    rank3: [
      ["Energetic Rhino Beetle", 3],
      ["Dinraal's Fang", 2],
      ["Shard of Dinraal's Spike", 5],
    ],
    rank4: [
      ["Dinraal's Horn", 2],
      ["Star Fragment", 3],
      ["Shard of Dinraal's Spike", 10],
    ],
    set: "Wild",
  },
  {
    id: "Tunic of the Wild",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Wild",
      id: "armor-Tunic of the Wild",
    }),
    rank1: [
      ["Acorn", 10],
      ["Naydra's Scale", 2],
    ],
    rank2: [
      ["Courser Bee Honey", 5],
      ["Naydra's Claw", 2],
    ],
    rank3: [
      ["Energetic Rhino Beetle", 3],
      ["Naydra's Fang", 2],
      ["Shard of Naydra's Spike", 5],
    ],
    rank4: [
      ["Naydra's Horn", 2],
      ["Star Fragment", 3],
      ["Shard of Naydra's Spike", 10],
    ],
    set: "Wild",
  },
  {
    id: "Cap of the Wind",
    name: intl.formatMessage({
      defaultMessage: "Cap of the Wind",
      id: "armor-Cap of the Wind",
    }),
    rank1: [
      ["Opal", 5],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Opal", 10],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Opal", 15],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Opal", 25],
      ["Star Fragment", 1],
    ],
    set: "Wind",
  },
  {
    id: "Trousers of the Wind",
    name: intl.formatMessage({
      defaultMessage: "Trousers of the Wind",
      id: "armor-Trousers of the Wind",
    }),
    rank1: [
      ["Opal", 5],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Opal", 10],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Opal", 15],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Opal", 25],
      ["Star Fragment", 1],
    ],
    set: "Wind",
  },
  {
    id: "Tunic of the Wind",
    name: intl.formatMessage({
      defaultMessage: "Tunic of the Wind",
      id: "armor-Tunic of the Wind",
    }),
    rank1: [
      ["Opal", 5],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Opal", 10],
      ["Star Fragment", 1],
    ],
    rank3: [
      ["Opal", 15],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Opal", 25],
      ["Star Fragment", 1],
    ],
    set: "Wind",
  },
  {
    id: "Yiga Armor",
    name: intl.formatMessage({
      defaultMessage: "Yiga Armor",
      id: "armor-Yiga Armor",
    }),
    rank1: [["Octorok Eyeball", 2]],
    rank2: [
      ["Fire-Breath Lizalfos Tail", 3],
      ["Puffshroom", 3],
    ],
    rank3: [
      ["Keese Eyeball", 5],
      ["Ice-Breath Lizalfos Tail", 5],
    ],
    rank4: [
      ["Electric Lizalfos Tail", 5],
      ["Black Hinox Horn", 3],
      ["Mighty Banana", 10],
    ],
    set: "Yiga",
  },
  {
    id: "Yiga Mask",
    name: intl.formatMessage({
      defaultMessage: "Yiga Mask",
      id: "armor-Yiga Mask",
    }),
    rank1: [["Octorok Eyeball", 2]],
    rank2: [
      ["Fire-Breath Lizalfos Tail", 3],
      ["Puffshroom", 3],
    ],
    rank3: [
      ["Keese Eyeball", 5],
      ["Ice-Breath Lizalfos Tail", 5],
    ],
    rank4: [
      ["Electric Lizalfos Tail", 5],
      ["Black Hinox Horn", 3],
      ["Mighty Banana", 10],
    ],
    set: "Yiga",
  },
  {
    id: "Yiga Tights",
    name: intl.formatMessage({
      defaultMessage: "Yiga Tights",
      id: "armor-Yiga Tights",
    }),
    rank1: [["Octorok Eyeball", 2]],
    rank2: [
      ["Fire-Breath Lizalfos Tail", 3],
      ["Puffshroom", 3],
    ],
    rank3: [
      ["Keese Eyeball", 5],
      ["Ice-Breath Lizalfos Tail", 5],
    ],
    rank4: [
      ["Electric Lizalfos Tail", 5],
      ["Black Hinox Horn", 3],
      ["Mighty Banana", 10],
    ],
    set: "Yiga",
  },
  {
    id: "Zonaite Helm",
    name: intl.formatMessage({
      defaultMessage: "Zonaite Helm",
      id: "armor-Zonaite Helm",
    }),
    rank1: [["Soldier Construct Horn", 5]],
    rank2: [
      ["Soldier Construct II Horn", 5],
      ["Captain Construct I Horn", 5],
      ["Zonaite", 5],
    ],
    rank3: [
      ["Soldier Construct III Horn", 5],
      ["Captain Construct II Horn", 5],
      ["Large Zonaite", 5],
    ],
    rank4: [
      ["Soldier Construct IV Horn", 5],
      ["Captain Construct III Horn", 5],
      ["Large Zonaite", 10],
    ],
    set: "Zonaite",
  },
  {
    id: "Zonaite Shin Guards",
    name: intl.formatMessage({
      defaultMessage: "Zonaite Shin Guards",
      id: "armor-Zonaite Shin Guards",
    }),
    rank1: [["Soldier Construct Horn", 5]],
    rank2: [
      ["Soldier Construct II Horn", 5],
      ["Captain Construct I Horn", 5],
      ["Zonaite", 5],
    ],
    rank3: [
      ["Soldier Construct III Horn", 5],
      ["Captain Construct II Horn", 5],
      ["Large Zonaite", 5],
    ],
    rank4: [
      ["Soldier Construct IV Horn", 5],
      ["Captain Construct III Horn", 5],
      ["Large Zonaite", 10],
    ],
    set: "Zonaite",
  },
  {
    id: "Zonaite Waistguard",
    name: intl.formatMessage({
      defaultMessage: "Zonaite Waistguard",
      id: "armor-Zonaite Waistguard",
    }),
    rank1: [["Soldier Construct Horn", 5]],
    rank2: [
      ["Soldier Construct II Horn", 5],
      ["Captain Construct I Horn", 5],
      ["Zonaite", 5],
    ],
    rank3: [
      ["Soldier Construct III Horn", 5],
      ["Captain Construct II Horn", 5],
      ["Large Zonaite", 5],
    ],
    rank4: [
      ["Soldier Construct IV Horn", 5],
      ["Captain Construct III Horn", 5],
      ["Large Zonaite", 10],
    ],
    set: "Zonaite",
  },
  {
    id: "Zora Armor",
    name: intl.formatMessage({
      defaultMessage: "Zora Armor",
      id: "armor-Zora Armor",
    }),
    rank1: [["Lizalfos Horn", 3]],
    rank2: [
      ["Lizalfos Talon", 5],
      ["Hyrule Bass", 5],
    ],
    rank3: [
      ["Blue Lizalfos Horn", 5],
      ["Lizalfos Tail", 3],
      ["Hearty Bass", 3],
    ],
    rank4: [
      ["Black Lizalfos Horn", 5],
      ["Blue Lizalfos Tail", 5],
      ["Opal", 20],
    ],
    set: "Zora",
  },
  {
    id: "Zora Greaves",
    name: intl.formatMessage({
      defaultMessage: "Zora Greaves",
      id: "armor-Zora Greaves",
    }),
    rank1: [["Lizalfos Horn", 3]],
    rank2: [
      ["Lizalfos Talon", 5],
      ["Hyrule Bass", 5],
    ],
    rank3: [
      ["Blue Lizalfos Horn", 5],
      ["Lizalfos Tail", 3],
      ["Hearty Bass", 3],
    ],
    rank4: [
      ["Black Lizalfos Horn", 5],
      ["Blue Lizalfos Tail", 5],
      ["Opal", 20],
    ],
    set: "Zora",
  },
  {
    id: "Zora Helm",
    name: intl.formatMessage({
      defaultMessage: "Zora Helm",
      id: "armor-Zora Helm",
    }),
    rank1: [["Lizalfos Horn", 3]],
    rank2: [
      ["Lizalfos Talon", 5],
      ["Hyrule Bass", 5],
    ],
    rank3: [
      ["Blue Lizalfos Horn", 5],
      ["Lizalfos Tail", 3],
      ["Hearty Bass", 3],
    ],
    rank4: [
      ["Black Lizalfos Horn", 5],
      ["Blue Lizalfos Tail", 5],
      ["Opal", 20],
    ],
    set: "Zora",
  },
  {
    id: "Ancient Hero's Aspect",
    name: intl.formatMessage({
      defaultMessage: "Ancient Hero's Aspect",
      id: "armor-Ancient Hero's Aspect",
    }),
    rank1: [
      ["Silver Bokoblin Horn", 9],
      ["Hinox Guts", 9],
      ["Zonaite", 15],
    ],
    rank2: [
      ["Silver Moblin Horn", 9],
      ["Frox Guts", 9],
      ["Large Zonaite", 10],
    ],
    rank3: [
      ["Silver Lizalfos Horn", 9],
      ["Molduga Guts", 9],
      ["Large Zonaite", 15],
    ],
    rank4: [
      ["Silver Lynel Saber Horn", 9],
      ["Silver Lynel Mace Horn", 9],
      ["Gleeok Guts", 9],
    ],
  },
  {
    id: "Amber Earrings",
    name: intl.formatMessage({
      defaultMessage: "Amber Earrings",
      id: "armor-Amber Earrings",
    }),
    rank1: [
      ["Amber", 10],
      ["Flint", 5],
    ],
    rank2: [
      ["Amber", 20],
      ["Flint", 10],
    ],
    rank3: [
      ["Amber", 35],
      ["Flint", 15],
    ],
    rank4: [
      ["Amber", 60],
      ["Flint", 25],
    ],
  },
  {
    id: "Champion's Leathers",
    name: intl.formatMessage({
      defaultMessage: "Champion's Leathers",
      id: "armor-Champion's Leathers",
    }),
    rank1: [
      ["Silent Princess", 3],
      ["Light Dragon's Scale", 2],
    ],
    rank2: [
      ["Silent Princess", 3],
      ["Light Dragon's Claw", 2],
      ["Sundelion", 10],
    ],
    rank3: [
      ["Silent Princess", 5],
      ["Light Dragon's Fang", 2],
      ["Sundelion", 15],
    ],
    rank4: [
      ["Silent Princess", 10],
      ["Light Dragon's Horn", 2],
      ["Sundelion", 20],
    ],
  },
  {
    id: "Diamond Circlet",
    name: intl.formatMessage({
      defaultMessage: "Diamond Circlet",
      id: "armor-Diamond Circlet",
    }),
    rank1: [
      ["Diamond", 2],
      ["Flint", 3],
    ],
    rank2: [
      ["Diamond", 3],
      ["Flint", 5],
    ],
    rank3: [
      ["Diamond", 5],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Diamond", 8],
      ["Star Fragment", 2],
    ],
  },
  {
    id: "Opal Earrings",
    name: intl.formatMessage({
      defaultMessage: "Opal Earrings",
      id: "armor-Opal Earrings",
    }),
    rank1: [
      ["Opal", 6],
      ["Flint", 5],
    ],
    rank2: [
      ["Opal", 12],
      ["Flint", 10],
    ],
    rank3: [
      ["Opal", 18],
      ["Flint", 15],
    ],
    rank4: [
      ["Opal", 30],
      ["Flint", 25],
    ],
  },
  {
    id: "Ruby Circlet",
    name: intl.formatMessage({
      defaultMessage: "Ruby Circlet",
      id: "armor-Ruby Circlet",
    }),
    rank1: [
      ["Ruby", 2],
      ["Flint", 3],
    ],
    rank2: [
      ["Ruby", 4],
      ["Flint", 5],
    ],
    rank3: [
      ["Ruby", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Ruby", 10],
      ["Star Fragment", 2],
    ],
  },
  {
    id: "Sand Boots",
    name: intl.formatMessage({
      defaultMessage: "Sand Boots",
      id: "armor-Sand Boots",
    }),
    rank1: [["Hightail Lizard", 3]],
    rank2: [
      ["Gibdo Bone", 20],
      ["Swift Carrot", 5],
    ],
    rank3: [
      ["Gibdo Guts", 5],
      ["Rushroom", 10],
      ["Molduga Fin", 5],
    ],
    rank4: [
      ["Molduga Guts", 5],
      ["Swift Violet", 10],
      ["Hearty Lizard", 5],
    ],
  },
  {
    id: "Sapphire Circlet",
    name: intl.formatMessage({
      defaultMessage: "Sapphire Circlet",
      id: "armor-Sapphire Circlet",
    }),
    rank1: [
      ["Sapphire", 2],
      ["Flint", 3],
    ],
    rank2: [
      ["Sapphire", 4],
      ["Flint", 5],
    ],
    rank3: [
      ["Sapphire", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Sapphire", 10],
      ["Star Fragment", 2],
    ],
  },
  {
    id: "Sheik's Mask",
    name: intl.formatMessage({
      defaultMessage: "Sheik's Mask",
      id: "armor-Sheik's Mask",
    }),
    rank1: [
      ["Silent Princess", 1],
      ["Star Fragment", 1],
    ],
    rank2: [
      ["Silent Princess", 2],
      ["Star Fragment", 2],
    ],
    rank3: [
      ["Silent Princess", 4],
      ["Star Fragment", 3],
    ],
    rank4: [
      ["Silent Princess", 8],
      ["Star Fragment", 4],
    ],
  },
  {
    id: "Snow Boots",
    name: intl.formatMessage({
      defaultMessage: "Snow Boots",
      id: "armor-Snow Boots",
    }),
    rank1: [["Hightail Lizard", 3]],
    rank2: [
      ["Octorok Tentacle", 5],
      ["Swift Carrot", 5],
    ],
    rank3: [["Octo Balloon", 5]],
    rank4: [
      ["Naydra's Scale", 2],
      ["Swift Violet", 20],
    ],
  },
  {
    id: "Topaz Earrings",
    name: intl.formatMessage({
      defaultMessage: "Topaz Earrings",
      id: "armor-Topaz Earrings",
    }),
    rank1: [
      ["Topaz", 2],
      ["Flint", 3],
    ],
    rank2: [
      ["Topaz", 4],
      ["Flint", 5],
    ],
    rank3: [["Rushroom", 20]],
    rank4: [
      ["Topaz", 10],
      ["Star Fragment", 2],
    ],
  },
  {
    id: "Vah Medoh Divine Helm",
    name: intl.formatMessage({
      defaultMessage: "Vah Medoh Divine Helm",
      id: "armor-Vah Medoh Divine Helm",
    }),
    rank1: [
      ["Sapphire", 1],
      ["Zonaite", 5],
    ],
    rank2: [
      ["Sapphire", 4],
      ["Zonaite", 10],
    ],
    rank3: [
      ["Topaz", 6],
      ["Star Fragment", 1],
    ],
    rank4: [
      ["Sapphire", 10],
      ["Large Zonaite", 10],
      ["Dazzlefruit", 10],
    ],
  },
  {
    id: "Vah Naboris Divine Helm",
    name: intl.formatMessage({
      defaultMessage: "Vah Naboris Divine Helm",
      id: "armor-Vah Naboris Divine Helm",
    }),
    rank1: [
      ["Topaz", 1],
      ["Zonaite", 5],
    ],
    rank2: [
      ["Topaz", 4],
      ["Zonaite", 10],
    ],
    rank3: [
      ["Sapphire", 6],
      ["Large Zonaite", 5],
      ["Dazzlefruit", 5],
    ],
    rank4: [
      ["Topaz", 10],
      ["Large Zonaite", 10],
      ["Dazzlefruit", 10],
    ],
  },
  {
    id: "Vah Rudania Divine Helm",
    name: intl.formatMessage({
      defaultMessage: "Vah Rudania Divine Helm",
      id: "armor-Vah Rudania Divine Helm",
    }),
    rank1: [
      ["Ruby", 1],
      ["Zonaite", 5],
    ],
    rank2: [
      ["Ruby", 4],
      ["Zonaite", 10],
    ],
    rank3: [
      ["Topaz", 6],
      ["Large Zonaite", 5],
      ["Dazzlefruit", 5],
    ],
    rank4: [
      ["Ruby", 10],
      ["Large Zonaite", 10],
      ["Dazzlefruit", 10],
    ],
  },
  {
    id: "Vah Ruta Divine Helm",
    name: intl.formatMessage({
      defaultMessage: "Vah Ruta Divine Helm",
      id: "armor-Vah Ruta Divine Helm",
    }),
    rank1: [
      ["Opal", 5],
      ["Zonaite", 5],
    ],
    rank2: [
      ["Opal", 10],
      ["Zonaite", 10],
    ],
    rank3: [
      ["Ruby", 6],
      ["Large Zonaite", 5],
      ["Dazzlefruit", 5],
    ],
    rank4: [
      ["Opal", 25],
      ["Large Zonaite", 10],
      ["Dazzlefruit", 10],
    ],
  },
  {
    id: "Tunic of Memories",
    name: intl.formatMessage({
      defaultMessage: "Tunic of Memories",
      id: "armor-Tunic of Memories",
    }),
    rank1: [
      ["Silent Princess", 3],
      ["Light Dragon's Scale", 1],
    ],
    rank2: [
      ["Silent Princess", 3],
      ["Light Dragon's Talon", 1],
      ["Farosh's Horn", 2],
    ],
    rank3: [
      ["Opal", 15],
      ["Large Zonaite", 5],
      ["Dazzlefruit", 5],
    ],
    rank4: [
      ["Silent Princess", 10],
      ["Light Dragon's Horn", 1],
      ["Dinraal's Horn", 2],
    ],
  },
];

export const getSets = (intl: IntlShape): { id: SetsIds; name: string }[] => [
  {
    id: "Awakening",
    name: intl.formatMessage({
      defaultMessage: "Awakening",
      id: "set-Awakening",
    }),
  },
  {
    id: "Barbarian",
    name: intl.formatMessage({
      defaultMessage: "Barbarian",
      id: "set-Barbarian",
    }),
  },
  {
    id: "Charged",
    name: intl.formatMessage({ defaultMessage: "Charged", id: "set-Charged" }),
  },
  {
    id: "Climbing",
    name: intl.formatMessage({
      defaultMessage: "Climbing",
      id: "set-Climbing",
    }),
  },
  {
    id: "Depths",
    name: intl.formatMessage({ defaultMessage: "Depths", id: "set-Depths" }),
  },
  {
    id: "Desert Voe",
    name: intl.formatMessage({
      defaultMessage: "Desert Voe",
      id: "set-Desert Voe",
    }),
  },
  {
    id: "Ember",
    name: intl.formatMessage({ defaultMessage: "Ember", id: "set-Ember" }),
  },
  {
    id: "Fierce Deity",
    name: intl.formatMessage({
      defaultMessage: "Fierce Deity",
      id: "set-Fierce Deity",
    }),
  },
  {
    id: "Flamebreaker",
    name: intl.formatMessage({
      defaultMessage: "Flamebreaker",
      id: "set-Flamebreaker",
    }),
  },
  {
    id: "Froggy",
    name: intl.formatMessage({ defaultMessage: "Froggy", id: "set-Froggy" }),
  },
  {
    id: "Frostbite",
    name: intl.formatMessage({
      defaultMessage: "Frostbite",
      id: "set-Frostbite",
    }),
  },
  {
    id: "Glide",
    name: intl.formatMessage({ defaultMessage: "Glide", id: "set-Glide" }),
  },
  {
    id: "Hero",
    name: intl.formatMessage({ defaultMessage: "Hero", id: "set-Hero" }),
  },
  {
    id: "Hylian",
    name: intl.formatMessage({ defaultMessage: "Hylian", id: "set-Hylian" }),
  },
  {
    id: "Miner's",
    name: intl.formatMessage({ defaultMessage: "Miner's", id: "set-Miner's" }),
  },
  {
    id: "Radiant",
    name: intl.formatMessage({ defaultMessage: "Radiant", id: "set-Radiant" }),
  },
  {
    id: "Royal Guard",
    name: intl.formatMessage({
      defaultMessage: "Royal Guard",
      id: "set-Royal Guard",
    }),
  },
  {
    id: "Rubber",
    name: intl.formatMessage({ defaultMessage: "Rubber", id: "set-Rubber" }),
  },
  {
    id: "Sky",
    name: intl.formatMessage({ defaultMessage: "Sky", id: "set-Sky" }),
  },
  {
    id: "Snowquill",
    name: intl.formatMessage({
      defaultMessage: "Snowquill",
      id: "set-Snowquill",
    }),
  },
  {
    id: "Soldier's",
    name: intl.formatMessage({
      defaultMessage: "Soldier's",
      id: "set-Soldier's",
    }),
  },
  {
    id: "Stealth",
    name: intl.formatMessage({ defaultMessage: "Stealth", id: "set-Stealth" }),
  },
  {
    id: "Time",
    name: intl.formatMessage({ defaultMessage: "Time", id: "set-Time" }),
  },
  {
    id: "Twilight",
    name: intl.formatMessage({
      defaultMessage: "Twilight",
      id: "set-Twilight",
    }),
  },
  {
    id: "Wild",
    name: intl.formatMessage({ defaultMessage: "Wild", id: "set-Wild" }),
  },
  {
    id: "Wind",
    name: intl.formatMessage({ defaultMessage: "Wind", id: "set-Wind" }),
  },
  {
    id: "Yiga",
    name: intl.formatMessage({ defaultMessage: "Yiga", id: "set-Yiga" }),
  },
  {
    id: "Zonaite",
    name: intl.formatMessage({ defaultMessage: "Zonaite", id: "set-Zonaite" }),
  },
  {
    id: "Zora",
    name: intl.formatMessage({ defaultMessage: "Zora", id: "set-Zora" }),
  },
];

export const getMaterials = (
  intl: IntlShape
): { id: MaterialsIds; name: string }[] => [
  {
    id: "Acorn",
    name: intl.formatMessage({ defaultMessage: "Acorn", id: "material-Acorn" }),
  },
  {
    id: "Aerocuda Eyeball",
    name: intl.formatMessage({
      defaultMessage: "Aerocuda Eyeball",
      id: "material-Aerocuda Eyeball",
    }),
  },
  {
    id: "Aerocuda Wing",
    name: intl.formatMessage({
      defaultMessage: "Aerocuda Wing",
      id: "material-Aerocuda Wing",
    }),
  },
  {
    id: "Amber",
    name: intl.formatMessage({ defaultMessage: "Amber", id: "material-Amber" }),
  },
  {
    id: "Black Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Bokoblin Horn",
      id: "material-Black Bokoblin Horn",
    }),
  },
  {
    id: "Black Boss Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Boss Bokoblin Horn",
      id: "material-Black Boss Bokoblin Horn",
    }),
  },
  {
    id: "Black Hinox Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Hinox Horn",
      id: "material-Black Hinox Horn",
    }),
  },
  {
    id: "Black Horriblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Horriblin Horn",
      id: "material-Black Horriblin Horn",
    }),
  },
  {
    id: "Black Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Lizalfos Horn",
      id: "material-Black Lizalfos Horn",
    }),
  },
  {
    id: "Black Moblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Black Moblin Horn",
      id: "material-Black Moblin Horn",
    }),
  },
  {
    id: "Bladed Rhino Beetle",
    name: intl.formatMessage({
      defaultMessage: "Bladed Rhino Beetle",
      id: "material-Bladed Rhino Beetle",
    }),
  },
  {
    id: "Blue Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Bokoblin Horn",
      id: "material-Blue Bokoblin Horn",
    }),
  },
  {
    id: "Blue Boss Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Boss Bokoblin Horn",
      id: "material-Blue Boss Bokoblin Horn",
    }),
  },
  {
    id: "Blue Horriblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Horriblin Horn",
      id: "material-Blue Horriblin Horn",
    }),
  },
  {
    id: "Blue Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Lizalfos Horn",
      id: "material-Blue Lizalfos Horn",
    }),
  },
  {
    id: "Blue Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Blue Lizalfos Tail",
      id: "material-Blue Lizalfos Tail",
    }),
  },
  {
    id: "Blue Moblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue Moblin Horn",
      id: "material-Blue Moblin Horn",
    }),
  },
  {
    id: "Blue Nightshade",
    name: intl.formatMessage({
      defaultMessage: "Blue Nightshade",
      id: "material-Blue Nightshade",
    }),
  },
  {
    id: "Blue-Maned Lynel Mace Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue-Maned Lynel Mace Horn",
      id: "material-Blue-Maned Lynel Mace Horn",
    }),
  },
  {
    id: "Blue-Maned Lynel Saber Horn",
    name: intl.formatMessage({
      defaultMessage: "Blue-Maned Lynel Saber Horn",
      id: "material-Blue-Maned Lynel Saber Horn",
    }),
  },
  {
    id: "Blue-White Frox Fang",
    name: intl.formatMessage({
      defaultMessage: "Blue-White Frox Fang",
      id: "material-Blue-White Frox Fang",
    }),
  },
  {
    id: "Bokoblin Fang",
    name: intl.formatMessage({
      defaultMessage: "Bokoblin Fang",
      id: "material-Bokoblin Fang",
    }),
  },
  {
    id: "Bokoblin Guts",
    name: intl.formatMessage({
      defaultMessage: "Bokoblin Guts",
      id: "material-Bokoblin Guts",
    }),
  },
  {
    id: "Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Bokoblin Horn",
      id: "material-Bokoblin Horn",
    }),
  },
  {
    id: "Boss Bokoblin Guts",
    name: intl.formatMessage({
      defaultMessage: "Boss Bokoblin Guts",
      id: "material-Boss Bokoblin Guts",
    }),
  },
  {
    id: "Boss Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Boss Bokoblin Horn",
      id: "material-Boss Bokoblin Horn",
    }),
  },
  {
    id: "Bright Caps",
    name: intl.formatMessage({
      defaultMessage: "Bright Caps",
      id: "material-Bright Caps",
    }),
  },
  {
    id: "Brightbloom Seeds",
    name: intl.formatMessage({
      defaultMessage: "Brightbloom Seeds",
      id: "material-Brightbloom Seeds",
    }),
  },
  {
    id: "Captain Construct I Horn",
    name: intl.formatMessage({
      defaultMessage: "Captain Construct I Horn",
      id: "material-Captain Construct I Horn",
    }),
  },
  {
    id: "Captain Construct II Horn",
    name: intl.formatMessage({
      defaultMessage: "Captain Construct II Horn",
      id: "material-Captain Construct II Horn",
    }),
  },
  {
    id: "Captain Construct III Horn",
    name: intl.formatMessage({
      defaultMessage: "Captain Construct III Horn",
      id: "material-Captain Construct III Horn",
    }),
  },
  {
    id: "Chillfin Trout",
    name: intl.formatMessage({
      defaultMessage: "Chillfin Trout",
      id: "material-Chillfin Trout",
    }),
  },
  {
    id: "Chillshroom",
    name: intl.formatMessage({
      defaultMessage: "Chillshroom",
      id: "material-Chillshroom",
    }),
  },
  {
    id: "Chuchu Jelly",
    name: intl.formatMessage({
      defaultMessage: "Chuchu Jelly",
      id: "material-Chuchu Jelly",
    }),
  },
  {
    id: "Cold Darner",
    name: intl.formatMessage({
      defaultMessage: "Cold Darner",
      id: "material-Cold Darner",
    }),
  },
  {
    id: "Cool Safflina",
    name: intl.formatMessage({
      defaultMessage: "Cool Safflina",
      id: "material-Cool Safflina",
    }),
  },
  {
    id: "Courser Bee Honey",
    name: intl.formatMessage({
      defaultMessage: "Courser Bee Honey",
      id: "material-Courser Bee Honey",
    }),
  },
  {
    id: "Dark Clump",
    name: intl.formatMessage({
      defaultMessage: "Dark Clump",
      id: "material-Dark Clump",
    }),
  },
  {
    id: "Dazzlefruit",
    name: intl.formatMessage({
      defaultMessage: "Dazzlefruit",
      id: "material-Dazzlefruit",
    }),
  },
  {
    id: "Deep Firefly",
    name: intl.formatMessage({
      defaultMessage: "Deep Firefly",
      id: "material-Deep Firefly",
    }),
  },
  {
    id: "Diamond",
    name: intl.formatMessage({
      defaultMessage: "Diamond",
      id: "material-Diamond",
    }),
  },
  {
    id: "Dinraal's Claw",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Claw",
      id: "material-Dinraal's Claw",
    }),
  },
  {
    id: "Dinraal's Fang",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Fang",
      id: "material-Dinraal's Fang",
    }),
  },
  {
    id: "Dinraal's Horn",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Horn",
      id: "material-Dinraal's Horn",
    }),
  },
  {
    id: "Dinraal's Scale",
    name: intl.formatMessage({
      defaultMessage: "Dinraal's Scale",
      id: "material-Dinraal's Scale",
    }),
  },
  {
    id: "Electric Darner",
    name: intl.formatMessage({
      defaultMessage: "Electric Darner",
      id: "material-Electric Darner",
    }),
  },
  {
    id: "Electric Keese Wing",
    name: intl.formatMessage({
      defaultMessage: "Electric Keese Wing",
      id: "material-Electric Keese Wing",
    }),
  },
  {
    id: "Electric Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Electric Lizalfos Horn",
      id: "material-Electric Lizalfos Horn",
    }),
  },
  {
    id: "Electric Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Electric Lizalfos Tail",
      id: "material-Electric Lizalfos Tail",
    }),
  },
  {
    id: "Electric Safflina",
    name: intl.formatMessage({
      defaultMessage: "Electric Safflina",
      id: "material-Electric Safflina",
    }),
  },
  {
    id: "Energetic Rhino Beetle",
    name: intl.formatMessage({
      defaultMessage: "Energetic Rhino Beetle",
      id: "material-Energetic Rhino Beetle",
    }),
  },
  {
    id: "Farosh's Claw",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Claw",
      id: "material-Farosh's Claw",
    }),
  },
  {
    id: "Farosh's Fang",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Fang",
      id: "material-Farosh's Fang",
    }),
  },
  {
    id: "Farosh's Horn",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Horn",
      id: "material-Farosh's Horn",
    }),
  },
  {
    id: "Farosh's Scale",
    name: intl.formatMessage({
      defaultMessage: "Farosh's Scale",
      id: "material-Farosh's Scale",
    }),
  },
  {
    id: "Fire Fruit",
    name: intl.formatMessage({
      defaultMessage: "Fire Fruit",
      id: "material-Fire Fruit",
    }),
  },
  {
    id: "Fire Keese Wing",
    name: intl.formatMessage({
      defaultMessage: "Fire Keese Wing",
      id: "material-Fire Keese Wing",
    }),
  },
  {
    id: "Fire Like Stone",
    name: intl.formatMessage({
      defaultMessage: "Fire Like Stone",
      id: "material-Fire Like Stone",
    }),
  },
  {
    id: "Fire-Breath Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Fire-Breath Lizalfos Horn",
      id: "material-Fire-Breath Lizalfos Horn",
    }),
  },
  {
    id: "Fire-Breath Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Fire-Breath Lizalfos Tail",
      id: "material-Fire-Breath Lizalfos Tail",
    }),
  },
  {
    id: "Fireproof Lizard",
    name: intl.formatMessage({
      defaultMessage: "Fireproof Lizard",
      id: "material-Fireproof Lizard",
    }),
  },
  {
    id: "Flint",
    name: intl.formatMessage({ defaultMessage: "Flint", id: "material-Flint" }),
  },
  {
    id: "Frox Fang",
    name: intl.formatMessage({
      defaultMessage: "Frox Fang",
      id: "material-Frox Fang",
    }),
  },
  {
    id: "Frox Fingernail",
    name: intl.formatMessage({
      defaultMessage: "Frox Fingernail",
      id: "material-Frox Fingernail",
    }),
  },
  {
    id: "Frox Guts",
    name: intl.formatMessage({
      defaultMessage: "Frox Guts",
      id: "material-Frox Guts",
    }),
  },
  {
    id: "Giant Brightbloom Seed",
    name: intl.formatMessage({
      defaultMessage: "Giant Brightbloom Seed",
      id: "material-Giant Brightbloom Seed",
    }),
  },
  {
    id: "Gibdo Bone",
    name: intl.formatMessage({
      defaultMessage: "Gibdo Bone",
      id: "material-Gibdo Bone",
    }),
  },
  {
    id: "Gibdo Guts",
    name: intl.formatMessage({
      defaultMessage: "Gibdo Guts",
      id: "material-Gibdo Guts",
    }),
  },
  {
    id: "Gibdo Wing",
    name: intl.formatMessage({
      defaultMessage: "Gibdo Wing",
      id: "material-Gibdo Wing",
    }),
  },
  {
    id: "Gleeok Flame Horn",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Flame Horn",
      id: "material-Gleeok Flame Horn",
    }),
  },
  {
    id: "Gleeok Frost Horn",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Frost Horn",
      id: "material-Gleeok Frost Horn",
    }),
  },
  {
    id: "Gleeok Guts",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Guts",
      id: "material-Gleeok Guts",
    }),
  },
  {
    id: "Gleeok Thunder Horn",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Thunder Horn",
      id: "material-Gleeok Thunder Horn",
    }),
  },
  {
    id: "Gleeok Wing",
    name: intl.formatMessage({
      defaultMessage: "Gleeok Wing",
      id: "material-Gleeok Wing",
    }),
  },
  {
    id: "Glowing Cave Fish",
    name: intl.formatMessage({
      defaultMessage: "Glowing Cave Fish",
      id: "material-Glowing Cave Fish",
    }),
  },
  {
    id: "Hearty Bass",
    name: intl.formatMessage({
      defaultMessage: "Hearty Bass",
      id: "material-Hearty Bass",
    }),
  },
  {
    id: "Hearty Lizard",
    name: intl.formatMessage({
      defaultMessage: "Hearty Lizard",
      id: "material-Hearty Lizard",
    }),
  },
  {
    id: "Hightail Lizard",
    name: intl.formatMessage({
      defaultMessage: "Hightail Lizard",
      id: "material-Hightail Lizard",
    }),
  },
  {
    id: "Hinox Guts",
    name: intl.formatMessage({
      defaultMessage: "Hinox Guts",
      id: "material-Hinox Guts",
    }),
  },
  {
    id: "Hinox Toenail",
    name: intl.formatMessage({
      defaultMessage: "Hinox Toenail",
      id: "material-Hinox Toenail",
    }),
  },
  {
    id: "Hinox Tooth",
    name: intl.formatMessage({
      defaultMessage: "Hinox Tooth",
      id: "material-Hinox Tooth",
    }),
  },
  {
    id: "Horriblin Guts",
    name: intl.formatMessage({
      defaultMessage: "Horriblin Guts",
      id: "material-Horriblin Guts",
    }),
  },
  {
    id: "Horriblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Horriblin Horn",
      id: "material-Horriblin Horn",
    }),
  },
  {
    id: "Hot-Footed Frog",
    name: intl.formatMessage({
      defaultMessage: "Hot-Footed Frog",
      id: "material-Hot-Footed Frog",
    }),
  },
  {
    id: "Hyrule Bass",
    name: intl.formatMessage({
      defaultMessage: "Hyrule Bass",
      id: "material-Hyrule Bass",
    }),
  },
  {
    id: "Ice Fruit",
    name: intl.formatMessage({
      defaultMessage: "Ice Fruit",
      id: "material-Ice Fruit",
    }),
  },
  {
    id: "Ice Keese Wing",
    name: intl.formatMessage({
      defaultMessage: "Ice Keese Wing",
      id: "material-Ice Keese Wing",
    }),
  },
  {
    id: "Ice Like Stone",
    name: intl.formatMessage({
      defaultMessage: "Ice Like Stone",
      id: "material-Ice Like Stone",
    }),
  },
  {
    id: "Ice-Breath Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Ice-Breath Lizalfos Horn",
      id: "material-Ice-Breath Lizalfos Horn",
    }),
  },
  {
    id: "Ice-Breath Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Ice-Breath Lizalfos Tail",
      id: "material-Ice-Breath Lizalfos Tail",
    }),
  },
  {
    id: "Keese Eyeball",
    name: intl.formatMessage({
      defaultMessage: "Keese Eyeball",
      id: "material-Keese Eyeball",
    }),
  },
  {
    id: "Keese Wing",
    name: intl.formatMessage({
      defaultMessage: "Keese Wing",
      id: "material-Keese Wing",
    }),
  },
  {
    id: "Large Zonai Charge",
    name: intl.formatMessage({
      defaultMessage: "Large Zonai Charge",
      id: "material-Large Zonai Charge",
    }),
  },
  {
    id: "Large Zonaite",
    name: intl.formatMessage({
      defaultMessage: "Large Zonaite",
      id: "material-Large Zonaite",
    }),
  },
  {
    id: "Light Dragon's Claw",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Claw",
      id: "material-Light Dragon's Claw",
    }),
  },
  {
    id: "Light Dragon's Fang",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Fang",
      id: "material-Light Dragon's Fang",
    }),
  },
  {
    id: "Light Dragon's Horn",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Horn",
      id: "material-Light Dragon's Horn",
    }),
  },
  {
    id: "Light Dragon's Scale",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Scale",
      id: "material-Light Dragon's Scale",
    }),
  },
  {
    id: "Light Dragon's Talon",
    name: intl.formatMessage({
      defaultMessage: "Light Dragon's Talon",
      id: "material-Light Dragon's Talon",
    }),
  },
  {
    id: "Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Lizalfos Horn",
      id: "material-Lizalfos Horn",
    }),
  },
  {
    id: "Lizalfos Tail",
    name: intl.formatMessage({
      defaultMessage: "Lizalfos Tail",
      id: "material-Lizalfos Tail",
    }),
  },
  {
    id: "Lizalfos Talon",
    name: intl.formatMessage({
      defaultMessage: "Lizalfos Talon",
      id: "material-Lizalfos Talon",
    }),
  },
  {
    id: "Luminous Stone",
    name: intl.formatMessage({
      defaultMessage: "Luminous Stone",
      id: "material-Luminous Stone",
    }),
  },
  {
    id: "Lynel Guts",
    name: intl.formatMessage({
      defaultMessage: "Lynel Guts",
      id: "material-Lynel Guts",
    }),
  },
  {
    id: "Lynel Hoof",
    name: intl.formatMessage({
      defaultMessage: "Lynel Hoof",
      id: "material-Lynel Hoof",
    }),
  },
  {
    id: "Lynel Mace Horn",
    name: intl.formatMessage({
      defaultMessage: "Lynel Mace Horn",
      id: "material-Lynel Mace Horn",
    }),
  },
  {
    id: "Lynel Saber Horn",
    name: intl.formatMessage({
      defaultMessage: "Lynel Saber Horn",
      id: "material-Lynel Saber Horn",
    }),
  },
  {
    id: "Mighty Banana",
    name: intl.formatMessage({
      defaultMessage: "Mighty Banana",
      id: "material-Mighty Banana",
    }),
  },
  {
    id: "Mighty Thistle",
    name: intl.formatMessage({
      defaultMessage: "Mighty Thistle",
      id: "material-Mighty Thistle",
    }),
  },
  {
    id: "Moblin Fang",
    name: intl.formatMessage({
      defaultMessage: "Moblin Fang",
      id: "material-Moblin Fang",
    }),
  },
  {
    id: "Moblin Guts",
    name: intl.formatMessage({
      defaultMessage: "Moblin Guts",
      id: "material-Moblin Guts",
    }),
  },
  {
    id: "Moblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Moblin Horn",
      id: "material-Moblin Horn",
    }),
  },
  {
    id: "Molduga Fin",
    name: intl.formatMessage({
      defaultMessage: "Molduga Fin",
      id: "material-Molduga Fin",
    }),
  },
  {
    id: "Molduga Guts",
    name: intl.formatMessage({
      defaultMessage: "Molduga Guts",
      id: "material-Molduga Guts",
    }),
  },
  {
    id: "Molduga Jaw",
    name: intl.formatMessage({
      defaultMessage: "Molduga Jaw",
      id: "material-Molduga Jaw",
    }),
  },
  {
    id: "Naydra's Claw",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Claw",
      id: "material-Naydra's Claw",
    }),
  },
  {
    id: "Naydra's Fang",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Fang",
      id: "material-Naydra's Fang",
    }),
  },
  {
    id: "Naydra's Horn",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Horn",
      id: "material-Naydra's Horn",
    }),
  },
  {
    id: "Naydra's Scale",
    name: intl.formatMessage({
      defaultMessage: "Naydra's Scale",
      id: "material-Naydra's Scale",
    }),
  },
  {
    id: "Obsidian Frox Fang",
    name: intl.formatMessage({
      defaultMessage: "Obsidian Frox Fang",
      id: "material-Obsidian Frox Fang",
    }),
  },
  {
    id: "Octo Balloon",
    name: intl.formatMessage({
      defaultMessage: "Octo Balloon",
      id: "material-Octo Balloon",
    }),
  },
  {
    id: "Octorok Eyeball",
    name: intl.formatMessage({
      defaultMessage: "Octorok Eyeball",
      id: "material-Octorok Eyeball",
    }),
  },
  {
    id: "Octorok Tentacle",
    name: intl.formatMessage({
      defaultMessage: "Octorok Tentacle",
      id: "material-Octorok Tentacle",
    }),
  },
  {
    id: "Opal",
    name: intl.formatMessage({ defaultMessage: "Opal", id: "material-Opal" }),
  },
  {
    id: "Puffshroom",
    name: intl.formatMessage({
      defaultMessage: "Puffshroom",
      id: "material-Puffshroom",
    }),
  },
  {
    id: "Razorclaw Crab",
    name: intl.formatMessage({
      defaultMessage: "Razorclaw Crab",
      id: "material-Razorclaw Crab",
    }),
  },
  {
    id: "Razorshroom",
    name: intl.formatMessage({
      defaultMessage: "Razorshroom",
      id: "material-Razorshroom",
    }),
  },
  {
    id: "Red Chuchu Jelly",
    name: intl.formatMessage({
      defaultMessage: "Red Chuchu Jelly",
      id: "material-Red Chuchu Jelly",
    }),
  },
  {
    id: "Ruby",
    name: intl.formatMessage({ defaultMessage: "Ruby", id: "material-Ruby" }),
  },
  {
    id: "Rushroom",
    name: intl.formatMessage({
      defaultMessage: "Rushroom",
      id: "material-Rushroom",
    }),
  },
  {
    id: "Sapphire",
    name: intl.formatMessage({
      defaultMessage: "Sapphire",
      id: "material-Sapphire",
    }),
  },
  {
    id: "Shard of Dinraal's Fang",
    name: intl.formatMessage({
      defaultMessage: "Shard of Dinraal's Fang",
      id: "material-Shard of Dinraal's Fang",
    }),
  },
  {
    id: "Shard of Dinraal's Spike",
    name: intl.formatMessage({
      defaultMessage: "Shard of Dinraal's Spike",
      id: "material-Shard of Dinraal's Spike",
    }),
  },
  {
    id: "Shard of Farosh's Fang",
    name: intl.formatMessage({
      defaultMessage: "Shard of Farosh's Fang",
      id: "material-Shard of Farosh's Fang",
    }),
  },
  {
    id: "Shard of Farosh's Spike",
    name: intl.formatMessage({
      defaultMessage: "Shard of Farosh's Spike",
      id: "material-Shard of Farosh's Spike",
    }),
  },
  {
    id: "Shard of Naydra's Fang",
    name: intl.formatMessage({
      defaultMessage: "Shard of Naydra's Fang",
      id: "material-Shard of Naydra's Fang",
    }),
  },
  {
    id: "Shard of Naydra's Spike",
    name: intl.formatMessage({
      defaultMessage: "Shard of Naydra's Spike",
      id: "material-Shard of Naydra's Spike",
    }),
  },
  {
    id: "Shock Fruit",
    name: intl.formatMessage({
      defaultMessage: "Shock Fruit",
      id: "material-Shock Fruit",
    }),
  },
  {
    id: "Shock Like Stone",
    name: intl.formatMessage({
      defaultMessage: "Shock Like Stone",
      id: "material-Shock Like Stone",
    }),
  },
  {
    id: "Silent Princess",
    name: intl.formatMessage({
      defaultMessage: "Silent Princess",
      id: "material-Silent Princess",
    }),
  },
  {
    id: "Silent Shroom",
    name: intl.formatMessage({
      defaultMessage: "Silent Shroom",
      id: "material-Silent Shroom",
    }),
  },
  {
    id: "Silver Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Bokoblin Horn",
      id: "material-Silver Bokoblin Horn",
    }),
  },
  {
    id: "Silver Boss Bokoblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Boss Bokoblin Horn",
      id: "material-Silver Boss Bokoblin Horn",
    }),
  },
  {
    id: "Silver Lizalfos Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Lizalfos Horn",
      id: "material-Silver Lizalfos Horn",
    }),
  },
  {
    id: "Silver Lynel Mace Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Lynel Mace Horn",
      id: "material-Silver Lynel Mace Horn",
    }),
  },
  {
    id: "Silver Lynel Saber Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Lynel Saber Horn",
      id: "material-Silver Lynel Saber Horn",
    }),
  },
  {
    id: "Silver Moblin Horn",
    name: intl.formatMessage({
      defaultMessage: "Silver Moblin Horn",
      id: "material-Silver Moblin Horn",
    }),
  },
  {
    id: "Sizzlefin Trout",
    name: intl.formatMessage({
      defaultMessage: "Sizzlefin Trout",
      id: "material-Sizzlefin Trout",
    }),
  },
  {
    id: "Smotherwing Butterfly",
    name: intl.formatMessage({
      defaultMessage: "Smotherwing Butterfly",
      id: "material-Smotherwing Butterfly",
    }),
  },
  {
    id: "Sneaky River Snail",
    name: intl.formatMessage({
      defaultMessage: "Sneaky River Snail",
      id: "material-Sneaky River Snail",
    }),
  },
  {
    id: "Soldier Construct Horn",
    name: intl.formatMessage({
      defaultMessage: "Soldier Construct Horn",
      id: "material-Soldier Construct Horn",
    }),
  },
  {
    id: "Soldier Construct II Horn",
    name: intl.formatMessage({
      defaultMessage: "Soldier Construct II Horn",
      id: "material-Soldier Construct II Horn",
    }),
  },
  {
    id: "Soldier Construct III Horn",
    name: intl.formatMessage({
      defaultMessage: "Soldier Construct III Horn",
      id: "material-Soldier Construct III Horn",
    }),
  },
  {
    id: "Soldier Construct IV Horn",
    name: intl.formatMessage({
      defaultMessage: "Soldier Construct IV Horn",
      id: "material-Soldier Construct IV Horn",
    }),
  },
  {
    id: "Star Fragment",
    name: intl.formatMessage({
      defaultMessage: "Star Fragment",
      id: "material-Star Fragment",
    }),
  },
  {
    id: "Stealthfin Trout",
    name: intl.formatMessage({
      defaultMessage: "Stealthfin Trout",
      id: "material-Stealthfin Trout",
    }),
  },
  {
    id: "Sticky Frog",
    name: intl.formatMessage({
      defaultMessage: "Sticky Frog",
      id: "material-Sticky Frog",
    }),
  },
  {
    id: "Sticky Lizard",
    name: intl.formatMessage({
      defaultMessage: "Sticky Lizard",
      id: "material-Sticky Lizard",
    }),
  },
  {
    id: "Summerwing Butterfly",
    name: intl.formatMessage({
      defaultMessage: "Summerwing Butterfly",
      id: "material-Summerwing Butterfly",
    }),
  },
  {
    id: "Sundelion",
    name: intl.formatMessage({
      defaultMessage: "Sundelion",
      id: "material-Sundelion",
    }),
  },
  {
    id: "Sunset Firefly",
    name: intl.formatMessage({
      defaultMessage: "Sunset Firefly",
      id: "material-Sunset Firefly",
    }),
  },
  {
    id: "Sunshroom",
    name: intl.formatMessage({
      defaultMessage: "Sunshroom",
      id: "material-Sunshroom",
    }),
  },
  {
    id: "Swift Carrot",
    name: intl.formatMessage({
      defaultMessage: "Swift Carrot",
      id: "material-Swift Carrot",
    }),
  },
  {
    id: "Swift Violet",
    name: intl.formatMessage({
      defaultMessage: "Swift Violet",
      id: "material-Swift Violet",
    }),
  },
  {
    id: "Thunderwing Butterfly",
    name: intl.formatMessage({
      defaultMessage: "Thunderwing Butterfly",
      id: "material-Thunderwing Butterfly",
    }),
  },
  {
    id: "Topaz",
    name: intl.formatMessage({ defaultMessage: "Topaz", id: "material-Topaz" }),
  },
  {
    id: "Voltfin Trout",
    name: intl.formatMessage({
      defaultMessage: "Voltfin Trout",
      id: "material-Voltfin Trout",
    }),
  },
  {
    id: "Voltfruit",
    name: intl.formatMessage({
      defaultMessage: "Voltfruit",
      id: "material-Voltfruit",
    }),
  },
  {
    id: "Warm Darner",
    name: intl.formatMessage({
      defaultMessage: "Warm Darner",
      id: "material-Warm Darner",
    }),
  },
  {
    id: "Warm Safflina",
    name: intl.formatMessage({
      defaultMessage: "Warm Safflina",
      id: "material-Warm Safflina",
    }),
  },
  {
    id: "White Chuchu Jelly",
    name: intl.formatMessage({
      defaultMessage: "White Chuchu Jelly",
      id: "material-White Chuchu Jelly",
    }),
  },
  {
    id: "White-Maned Lynel Mace Horn",
    name: intl.formatMessage({
      defaultMessage: "White-Maned Lynel Mace Horn",
      id: "material-White-Maned Lynel Mace Horn",
    }),
  },
  {
    id: "White-Maned Lynel Saber Horn",
    name: intl.formatMessage({
      defaultMessage: "White-Maned Lynel Saber Horn",
      id: "material-White-Maned Lynel Saber Horn",
    }),
  },
  {
    id: "Winterwing Butterfly",
    name: intl.formatMessage({
      defaultMessage: "Winterwing Butterfly",
      id: "material-Winterwing Butterfly",
    }),
  },
  {
    id: "Yellow Chuchu Jelly",
    name: intl.formatMessage({
      defaultMessage: "Yellow Chuchu Jelly",
      id: "material-Yellow Chuchu Jelly",
    }),
  },
  {
    id: "Zapshroom",
    name: intl.formatMessage({
      defaultMessage: "Zapshroom",
      id: "material-Zapshroom",
    }),
  },
  {
    id: "Zonaite",
    name: intl.formatMessage({
      defaultMessage: "Zonaite",
      id: "material-Zonaite",
    }),
  },
];
