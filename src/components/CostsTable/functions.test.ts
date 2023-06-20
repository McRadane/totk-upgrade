import { describe, expect, it } from "vitest";

import type { ArmorsIds } from "../../data";
import type { IArmor } from "../../redux/armors";

import { calculateListItems, deduplicateItems } from "./functions";

describe("calculate list items", () => {
  const intl = {
    formatMessage: (options: { defaultMessage: [{ value: string }]; id: string }) => {
      return options.defaultMessage[0].value;
    }
  };

  const armorsState: IArmor[] = [
    { hidden: false, id: "Cap of Time", owned: true, ownedLevel: 0, wanted: 4 },
    { hidden: false, id: "Cap of Twilight", owned: true, ownedLevel: 0, wanted: 0 },
    { hidden: false, id: "Cap of the Hero", owned: true, ownedLevel: 3, wanted: 3 },
    { hidden: false, id: "Stealth Chest Guard", owned: false, ownedLevel: 0, wanted: 1 },
    { hidden: false, id: "Stealth Mask", owned: true, ownedLevel: 0, wanted: 1 },
    { hidden: false, id: "Stealth Tights", owned: false, ownedLevel: 0, wanted: 0 }
  ];

  it("should return the sum of rupees and materials without filters", () => {
    const result = calculateListItems({
      armorsState,
      intl: intl as any,
      text: ""
    });

    expect(result).toMatchObject({
      items: [
        {
          all: { items: [["Cap of Time", 100]], sum: 100 },
          id: "Amber",
          name: "Amber",
          selection: { items: [["Cap of Time", 100]], sum: 100 }
        },
        {
          all: {
            items: [
              ["Stealth Chest Guard", 8],
              ["Stealth Mask", 8],
              ["Stealth Tights", 8]
            ],
            sum: 24
          },
          id: "Blue Nightshade",
          name: "Blue Nightshade",
          selection: {
            items: [
              ["Stealth Chest Guard", 3],
              ["Stealth Mask", 3]
            ],
            sum: 6
          }
        },
        {
          all: { items: [["Cap of the Hero", 10]], sum: 10 },
          id: "Ruby",
          name: "Ruby",
          selection: { items: [], sum: 0 }
        },
        {
          all: {
            items: [
              ["Stealth Chest Guard", 5],
              ["Stealth Mask", 5],
              ["Stealth Tights", 5]
            ],
            sum: 15
          },
          id: "Silent Princess",
          name: "Silent Princess",
          selection: { items: [], sum: 0 }
        },
        {
          all: {
            items: [
              ["Stealth Chest Guard", 8],
              ["Stealth Mask", 8],
              ["Stealth Tights", 8]
            ],
            sum: 24
          },
          id: "Silent Shroom",
          name: "Silent Shroom",
          selection: { items: [], sum: 0 }
        },
        {
          all: {
            items: [
              ["Stealth Chest Guard", 5],
              ["Stealth Mask", 5],
              ["Stealth Tights", 5]
            ],
            sum: 15
          },
          id: "Sneaky River Snail",
          name: "Sneaky River Snail",
          selection: { items: [], sum: 0 }
        },
        {
          all: {
            items: [
              ["Cap of the Hero", 1],
              ["Cap of Time", 4],
              ["Cap of Twilight", 4]
            ],
            sum: 9
          },
          id: "Star Fragment",
          name: "Star Fragment",
          selection: { items: [["Cap of Time", 4]], sum: 4 }
        },
        {
          all: {
            items: [
              ["Stealth Chest Guard", 10],
              ["Stealth Mask", 10],
              ["Stealth Tights", 10]
            ],
            sum: 30
          },
          id: "Stealthfin Trout",
          name: "Stealthfin Trout",
          selection: { items: [], sum: 0 }
        },
        {
          all: {
            items: [
              ["Stealth Chest Guard", 5],
              ["Stealth Mask", 5],
              ["Stealth Tights", 5]
            ],
            sum: 15
          },
          id: "Sticky Frog",
          name: "Sticky Frog",
          selection: { items: [], sum: 0 }
        },
        {
          all: {
            items: [
              ["Stealth Chest Guard", 10],
              ["Stealth Mask", 10],
              ["Stealth Tights", 10]
            ],
            sum: 30
          },
          id: "Sundelion",
          name: "Sundelion",
          selection: { items: [], sum: 0 }
        },
        {
          all: {
            items: [
              ["Stealth Chest Guard", 5],
              ["Stealth Mask", 5],
              ["Stealth Tights", 5]
            ],
            sum: 15
          },
          id: "Sunset Firefly",
          name: "Sunset Firefly",
          selection: { items: [], sum: 0 }
        },
        {
          all: { items: [["Cap of Twilight", 21]], sum: 21 },
          id: "Topaz",
          name: "Topaz",
          selection: { items: [], sum: 0 }
        }
      ],
      rupee: {
        all: {
          items: [
            ["Cap of the Hero", 500],
            ["Cap of Time", 760],
            ["Cap of Twilight", 760],
            ["Stealth Chest Guard", 760],
            ["Stealth Mask", 760],
            ["Stealth Tights", 760]
          ],
          sum: 4300
        },
        selection: {
          items: [
            ["Cap of Time", 760],
            ["Stealth Chest Guard", 10],
            ["Stealth Mask", 10]
          ],
          sum: 780
        }
      },
      rupeeBuy: {
        all: {
          items: [
            ["Stealth Chest Guard", 700],
            ["Stealth Tights", 600]
          ],
          sum: 1300
        },
        selection: { items: [["Stealth Chest Guard", 700]], sum: 700 }
      }
    });
  });

  it("should return the sum of rupees and materials with text filters", () => {
    const result = calculateListItems({
      armorsState,
      intl: intl as any,
      text: "ruby"
    });

    expect(result).toMatchObject({
      items: [
        {
          all: { items: [["Cap of the Hero", 10]], sum: 10 },
          id: "Ruby",
          name: "Ruby",
          selection: { items: [], sum: 0 }
        }
      ],
      rupee: {
        all: {
          items: [
            ["Cap of the Hero", 500],
            ["Cap of Time", 760],
            ["Cap of Twilight", 760],
            ["Stealth Chest Guard", 760],
            ["Stealth Mask", 760],
            ["Stealth Tights", 760]
          ],
          sum: 4300
        },
        selection: {
          items: [
            ["Cap of Time", 760],
            ["Stealth Chest Guard", 10],
            ["Stealth Mask", 10]
          ],
          sum: 780
        }
      },
      rupeeBuy: {
        all: {
          items: [
            ["Stealth Chest Guard", 700],
            ["Stealth Tights", 600]
          ],
          sum: 1300
        },
        selection: { items: [["Stealth Chest Guard", 700]], sum: 700 }
      }
    });
  });
});

describe("items deduplication", () => {
  it("should return the sum of the values of the same key", () => {
    const input1: [ArmorsIds, number][] = [
      ["Amber Earrings", 50],
      ["Archaic Legwear", 100],
      ["Amber Earrings", 25]
    ];

    const input2: [ArmorsIds, number][] = [
      ["Barbarian Armor", 500],
      ["Archaic Legwear", 1000],
      ["Amber Earrings", 250]
    ];

    const expected1: { items: [ArmorsIds, number][]; sum: number } = {
      items: [
        ["Amber Earrings", 75],
        ["Archaic Legwear", 100]
      ],
      sum: 175
    };
    const expected2: { items: [ArmorsIds, number][]; sum: number } = {
      items: [
        ["Amber Earrings", 250],
        ["Archaic Legwear", 1000],
        ["Barbarian Armor", 500]
      ],
      sum: 1750
    };

    expect(deduplicateItems(input1)).toMatchObject(expected1);
    expect(deduplicateItems(input2)).toMatchObject(expected2);
  });
});
