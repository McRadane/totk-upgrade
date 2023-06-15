import { describe, expect, it, vi } from "vitest";

import armors, { initialState, setHidden, setOwned, setOwnedLevel, setWanted, useArmorStatus } from "./armors";
import { migrations } from "./migrations";
import navigation, { setHideArmors, setHideNoCost, setLanguage, setPage } from "./navigation";

const validArmors = "Cap of Time";
const validNonUpgradable = "Majora's Mask";

const invalidArmor = "test" as any;

describe("migrations", () => {
  it("should migrate from version 1 to 2", () => {
    const initial = {
      armors: {
        armors: [
          {
            name: "Mask of Awakening",
            ownedLevel: 0,
            wanted: 0
          },
          {
            name: "Trousers of Awakening",
            ownedLevel: 0,
            wanted: 0
          },
          {
            name: "Tunic of Awakening",
            ownedLevel: 0,
            wanted: 0
          },
          {
            name: "Barbarian Armor",
            ownedLevel: 2,
            wanted: 4
          },
          {
            name: "Barbarian Helm",
            ownedLevel: 0,
            wanted: 0
          },
          {
            name: "Barbarian Leg Wraps",
            ownedLevel: 0,
            wanted: 0
          },
          {
            name: "Charged Headdress",
            ownedLevel: 0,
            wanted: 0
          },
          {
            name: "Charged Shirt",
            ownedLevel: 0,
            wanted: 0
          },
          {
            name: "Charged Trousers",
            ownedLevel: 0,
            wanted: 0
          }
        ]
      },
      navigation: { hideArmors: true, hideNoCost: true, page: 1 }
    };

    const result = {
      armors: {
        armors: [
          {
            hidden: false,
            name: "Mask of Awakening",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Trousers of Awakening",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Tunic of Awakening",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Barbarian Armor",
            owned: true,
            ownedLevel: 2,
            wanted: 4
          },
          {
            hidden: false,
            name: "Barbarian Helm",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Barbarian Leg Wraps",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Charged Headdress",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Charged Shirt",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Charged Trousers",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          }
        ]
      },
      navigation: { hideArmors: true, hideNoCost: true, page: 1 }
    };

    const migrator = migrations[2];

    const migratedState = migrator(initial as any);
    expect(migratedState).toMatchObject(result);
  });

  it("should migrate from version 2 to 3", () => {
    const initial = {
      armors: {
        armors: [
          {
            hidden: false,
            name: "Mask of Awakening",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Trousers of Awakening",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Tunic of Awakening",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Barbarian Armor",
            owned: true,
            ownedLevel: 2,
            wanted: 4
          },
          {
            hidden: true,
            name: "Barbarian Helm",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Barbarian Leg Wraps",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Charged Headdress",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Charged Shirt",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          },
          {
            hidden: false,
            name: "Charged Trousers",
            owned: false,
            ownedLevel: 0,
            wanted: 0
          }
        ]
      },
      navigation: { hideArmors: true, hideNoCost: true, page: 1 }
    };

    const result = {
      armors: {
        armors: [
          { hidden: false, id: "Mask of Awakening", owned: false, ownedLevel: 0, wanted: 0 },
          { hidden: false, id: "Trousers of Awakening", owned: false, ownedLevel: 0, wanted: 0 },
          { hidden: false, id: "Tunic of Awakening", owned: false, ownedLevel: 0, wanted: 0 },
          { hidden: false, id: "Barbarian Armor", owned: true, ownedLevel: 2, wanted: 4 },
          { hidden: true, id: "Barbarian Helm", owned: false, ownedLevel: 0, wanted: 0 },
          { hidden: false, id: "Barbarian Leg Wraps", owned: false, ownedLevel: 0, wanted: 0 },
          { hidden: false, id: "Charged Headdress", owned: false, ownedLevel: 0, wanted: 0 },
          { hidden: false, id: "Charged Shirt", owned: false, ownedLevel: 0, wanted: 0 },
          { hidden: false, id: "Charged Trousers", owned: false, ownedLevel: 0, wanted: 0 }
        ],
        nonUpgradedArmors: [
          { hidden: false, id: "Archaic Legwear", owned: false },
          { hidden: false, id: "Archaic Tunic", owned: false },
          { hidden: false, id: "Dark Hood", owned: false },
          { hidden: false, id: "Dark Trousers", owned: false },
          { hidden: false, id: "Dark Tunic", owned: false },
          { hidden: false, id: "Evil Spirit Armor", owned: false },
          { hidden: false, id: "Evil Spirit Greaves", owned: false },
          { hidden: false, id: "Evil Spirit Mask", owned: false },
          { hidden: false, id: "Mystic Robe", owned: false },
          { hidden: false, id: "Mystic Trousers", owned: false },
          { hidden: false, id: "Mystic Mask", owned: false },
          { hidden: false, id: "Phantom Armor", owned: false },
          { hidden: false, id: "Phantom Greaves", owned: false },
          { hidden: false, id: "Phantom Helm", owned: false },
          { hidden: false, id: "Tingle's Hood", owned: false },
          { hidden: false, id: "Tingle's Shirt", owned: false },
          { hidden: false, id: "Tingle's Tights", owned: false },
          { hidden: false, id: "Archaic Warm Greaves", owned: false },
          { hidden: false, id: "Bokoblin Mask", owned: false },
          { hidden: false, id: "Cece Hat", owned: false },
          { hidden: false, id: "Horriblin Mask", owned: false },
          { hidden: false, id: "Korok Mask", owned: false },
          { hidden: false, id: "Lizalfos Mask", owned: false },
          { hidden: false, id: "Lynel Mask", owned: false },
          { hidden: false, id: validNonUpgradable, owned: false },
          { hidden: false, id: "Midna's Helmet", owned: false },
          { hidden: false, id: "Moblin Mask", owned: false },
          { hidden: false, id: "Ravio Hood", owned: false },
          { hidden: false, id: "Thunder Helm", owned: false },
          { hidden: false, id: "Well-Worn Hair Band", owned: false },
          { hidden: false, id: "Zant's Helmet", owned: false },
          { hidden: false, id: "Lobster Shirt", owned: false }
        ]
      },
      navigation: { hideArmors: true, hideNoCost: true, page: 1 }
    };

    const migrator = migrations[3];

    const migratedState = migrator(initial as any);
    expect(migratedState).toMatchObject(result);
  });
});

describe("armors reducer", () => {
  it("should set the hidden flag of armors", () => {
    expect.assertions(4);
    const action = setHidden([validArmors, true]);
    const actionNonUpgradable = setHidden([validNonUpgradable, true]);
    const actionFalse = setHidden([validArmors, false]);

    const actionInvalid = setHidden([invalidArmor, true]);

    const result = armors(undefined, action).armors.find((a) => a.id === validArmors);
    const resultNonUpgradable = armors(undefined, actionNonUpgradable).nonUpgradedArmors.find((a) => a.id === validNonUpgradable);
    const resultFalse = armors(undefined, actionFalse).armors.find((a) => a.id === validArmors);

    expect(result).toMatchObject({
      hidden: true
    });

    expect(resultNonUpgradable).toMatchObject({
      hidden: true
    });

    expect(resultFalse).toMatchObject({
      hidden: false
    });

    expect(armors(undefined, actionInvalid)).toMatchObject(initialState);
  });

  it("should set the owned flag of armors", () => {
    expect.assertions(4);
    const action = setOwned([validArmors, true]);
    const actionNonUpgradable = setOwned([validNonUpgradable, true]);
    const actionFalse = setOwned([validArmors, false]);

    const actionInvalid = setOwned([invalidArmor, true]);

    const result = armors(undefined, action).armors.find((a) => a.id === validArmors);
    const resultNonUpgradable = armors(undefined, actionNonUpgradable).nonUpgradedArmors.find((a) => a.id === validNonUpgradable);
    const resultFalse = armors(undefined, actionFalse).armors.find((a) => a.id === validArmors);

    expect(result).toMatchObject({
      owned: true
    });

    expect(resultNonUpgradable).toMatchObject({
      owned: true
    });

    expect(resultFalse).toMatchObject({
      owned: false
    });

    expect(armors(undefined, actionInvalid)).toMatchObject(initialState);
  });

  it("should set the owned level of armors", () => {
    expect.assertions(3);
    const action = setOwnedLevel([validArmors, 3]);
    const actionNonUpgradable = setOwnedLevel([validNonUpgradable, 3]);

    const actionInvalid = setOwnedLevel([invalidArmor, 3]);

    const result = armors(undefined, action).armors.find((a) => a.id === validArmors);

    expect(result).toMatchObject({
      ownedLevel: 3
    });

    expect(armors(undefined, actionNonUpgradable)).toMatchObject(initialState);
    expect(armors(undefined, actionInvalid)).toMatchObject(initialState);
  });

  it("should set the wanted level of armors", () => {
    expect.assertions(3);
    const action = setWanted([validArmors, 3]);
    const actionNonUpgradable = setWanted([validNonUpgradable, 3]);

    const actionInvalid = setWanted([invalidArmor, 3]);

    const result = armors(undefined, action).armors.find((a) => a.id === validArmors);

    expect(result).toMatchObject({
      wanted: 3
    });

    expect(armors(undefined, actionNonUpgradable)).toMatchObject(initialState);
    expect(armors(undefined, actionInvalid)).toMatchObject(initialState);
  });

  it("should adjust the wanted level when changing owned level", () => {
    const actionInitial = setWanted([validArmors, 2]);
    const actionAdjust1 = setOwnedLevel([validArmors, 3]);
    const actionAdjust2 = setWanted([validArmors, 1]);

    const intermediate = armors(undefined, actionInitial);

    const result1 = armors(intermediate, actionAdjust1);
    const result1Item = result1.armors.find((a) => a.id === validArmors);

    expect(result1Item).toMatchObject({
      ownedLevel: 3,
      wanted: 3
    });

    const result2 = armors(result1, actionAdjust2);
    const result2Item = result2.armors.find((a) => a.id === validArmors);

    expect(result2Item).toMatchObject({
      ownedLevel: 3,
      wanted: 3
    });
  });

  it("should return the correct data with custom hook", () => {
    vi.mock("react-redux", () => {
      return { useSelector: (selector: (state: any) => any) => selector({ armors: initialState }) };
    });

    const resultArmor = useArmorStatus(validArmors);
    const resultNonUpgradable = useArmorStatus(validNonUpgradable);

    const resultInvalid = useArmorStatus(invalidArmor);

    const expectedArmor = initialState.armors.find((a) => a.id === validArmors);
    const expectedNonUpgradable = initialState.nonUpgradedArmors.find((a) => a.id === validNonUpgradable);

    expect(resultArmor).toEqual(expectedArmor);
    expect(resultNonUpgradable).toEqual(expectedNonUpgradable);
    expect(resultInvalid).toBeUndefined();
  });
});

describe("navigation reducer", () => {
  expect.assertions(2);
  it("should set the hidden armor flag", () => {
    const actionOn = setHideArmors(true);
    const actionOff = setHideArmors(false);

    expect(navigation(undefined, actionOn)).toMatchObject({
      hideArmors: true
    });

    expect(navigation(undefined, actionOff)).toMatchObject({
      hideArmors: false
    });
  });

  it("should set the hidden on no cost flag", () => {
    expect.assertions(2);
    const actionOn = setHideNoCost(true);
    const actionOff = setHideNoCost(false);

    expect(navigation(undefined, actionOn)).toMatchObject({
      hideNoCost: true
    });

    expect(navigation(undefined, actionOff)).toMatchObject({
      hideNoCost: false
    });
  });

  it("should set the language", () => {
    expect.assertions(2);
    const actionFR = setLanguage("fr");
    const actionUndefined = setLanguage();

    expect(navigation(undefined, actionFR)).toMatchObject({
      language: "fr"
    });
    expect(navigation(undefined, actionUndefined)).toMatchObject({
      language: undefined
    });
  });

  it("should set the page", () => {
    const action = setPage(2);

    expect(navigation(undefined, action)).toMatchObject({
      page: 2
    });
  });
});
