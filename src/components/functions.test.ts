import { describe, expect, it } from "vitest";

import type { IArmor } from "../redux/armors";

import { calculateListItems, getActiveStatus } from "./functions";

describe("calculate list items", () => {
  const intl = {
    formatMessage: (options: { defaultMessage: [{ value: string }]; id: string }) => {
      return options.defaultMessage[0].value;
    }
  };

  it("should return the sum of rupees and materials", () => {
    const result = calculateListItems(
      [
        { hidden: false, id: "Cap of Time", owned: true, ownedLevel: 0, wanted: 4 },
        { hidden: false, id: "Cap of Twilight", owned: true, ownedLevel: 0, wanted: 0 },
        { hidden: false, id: "Cap of the Hero", owned: true, ownedLevel: 3, wanted: 3 }
      ],
      intl as any
    );

    expect(result).toMatchObject({
      items: [
        { all: 100, id: "Amber", name: "Amber", selection: 100 },
        { all: 10, id: "Ruby", name: "Ruby", selection: 0 },
        { all: 9, id: "Star Fragment", name: "Star Fragment", selection: 4 },
        { all: 21, id: "Topaz", name: "Topaz", selection: 0 }
      ],
      rupee: { all: 2020, selection: 760 },
      rupeeBuy: { all: 0, selection: 0 }
    });
  });
});

describe("get active status", () => {
  it("should return false if the armor is invalid or non-upgradable", () => {
    const executorUndefined = getActiveStatus(undefined as any);
    const executorNonUpgradable = getActiveStatus({ hidden: false, id: "Majora's Mask", owned: false } as IArmor);

    expect(executorUndefined(1)).toBe(false);
    expect(executorNonUpgradable(1)).toBe(false);
  });

  it("should return false if the wanted level is below the rank", () => {
    const executor = getActiveStatus({
      hidden: false,
      id: "Cap of Time",
      owned: false,
      ownedLevel: 0,
      wanted: 1
    });

    expect(executor(2)).toBe(false);
  });

  it("should return false if the owned level is above the rank", () => {
    const executor = getActiveStatus({
      hidden: false,
      id: "Cap of Time",
      owned: false,
      ownedLevel: 4,
      wanted: 1
    });

    expect(executor(2)).toBe(false);
  });

  it("should return true if the owned level is below the rank and wanted level is above the rank", () => {
    const executor = getActiveStatus({
      hidden: false,
      id: "Cap of Time",
      owned: false,
      ownedLevel: 1,
      wanted: 4
    });

    expect(executor(2)).toBe(true);
  });
});
