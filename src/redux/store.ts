import { type Middleware, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
  FLUSH,
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

import { migrations } from "./migrations";
import rootReducer, { type MergedState } from "./reducers";

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
