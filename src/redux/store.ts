import { configureStore  } from "@reduxjs/toolkit"
import reducer from "./reducer"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key:"neobuild",
    storage:storage
}

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
   
})

export const persistor = persistStore(store);

export type TrootState = ReturnType<typeof store.getState>