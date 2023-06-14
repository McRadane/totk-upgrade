/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Middleware, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
  FLUSH,
  type MigrationManifest,
  PAUSE,
  PERSIST,
  PURGE,
  type PersistConfig,
  REGISTER,
  REHYDRATE,
  createMigrate,
  persistReducer,
  persistStore
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { armorsNonUpgradableStatic } from "./data";
import rootReducer, { type MergedState } from "./reducers";

const migrations: MigrationManifest = {
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
      ...armor,
      id: (armor as any).name ?? armor.id
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

const middlewares: Middleware[] = [];

const logger = createLogger({
  predicate: (_getState, action) => ![FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE].includes(action.type)
});

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const persistConfig: PersistConfig<MergedState> = {
  key: "root",
  migrate: createMigrate(migrations, { debug: true }),
  storage,
  version: 3
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(...middlewares),
  reducer: persistedReducer
});
const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;

export { persistor, store };
