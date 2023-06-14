/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MigrationManifest } from "redux-persist";

import { armorsNonUpgradableStatic } from "../data";

import type { MergedState } from "./reducers";

export const migrations: MigrationManifest = {
  2: (state: any) => {
    const { armors } = (state as MergedState).armors;
    const newArmors = armors.map((armor) => ({
      ...armor,
      hidden: armor.hidden !== undefined ? armor.hidden : false,
      owned: armor.owned !== undefined ? armor.owned : armor.ownedLevel > 0
    }));
    return {
      ...state,
      armors: { armors: newArmors }
    };
  },
  3: (state: any) => {
    const newArmors = (state as MergedState).armors.armors.map((armor) => ({
      hidden: armor.hidden,
      id: (armor as any).name ?? armor.id,
      owned: armor.owned,
      ownedLevel: armor.ownedLevel,
      wanted: armor.wanted
    }));
    return {
      ...state,
      armors: {
        armors: newArmors,
        nonUpgradedArmors: armorsNonUpgradableStatic.map((armor) => ({
          hidden: false,
          id: armor,
          owned: false
        }))
      }
    };
  }
};
