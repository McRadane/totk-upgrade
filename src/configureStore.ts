import { type Middleware, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  createMigrate,
  type PersistConfig,
  type MigrationManifest,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";

import rootReducer, { type MergedState } from "./reducers";

const migrations: MigrationManifest = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  2: (state: any) => {
    const { armors } = (state as MergedState).armors;
    const newArmors = armors.map((armor) => ({
      ...armor,
      owned: armor.owned !== undefined ? armor.owned : armor.ownedLevel > 0,
      hidden: armor.hidden !== undefined ? armor.hidden : false,
    }));
    return {
      ...state,
      armors: { armors: newArmors },
    };
  },
};

const middlewares: Middleware[] = [];

const logger = createLogger({
  predicate: (_getState, action) => ![FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER].includes(action.type),
});

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const persistConfig: PersistConfig<MergedState> = {
  key: "root",
  version: 2,
  storage,
  migrate: createMigrate(migrations, { debug: true }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares),
});
const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;

export { store, persistor };
