import { describe, expect, it } from "vitest";

import type { IArmor } from "../redux/armors";

import { getActiveStatus } from "./functions";

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
