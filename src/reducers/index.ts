import { combineReducers } from "@reduxjs/toolkit";

import armors, { type ArmorState } from "./armors";
import navigation, { type NavigationState } from "./navigation";

export type MergedState = {
    armors: ArmorState;
    navigation: NavigationState;
};

export default combineReducers({ armors, navigation });
