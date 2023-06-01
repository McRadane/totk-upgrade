import { combineReducers } from "@reduxjs/toolkit";
import armors, { ArmorState } from "./armors";
import navigation, { NavigationState } from "./navigation";

export type MergedState = {
    armors: ArmorState;
    navigation: NavigationState;
};

export default combineReducers({ armors, navigation });
