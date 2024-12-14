import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice"
import userDataReducer from "./features/userData/userDataSlice"
import userPreferencesReducer from "./features/userPreferences/userPreferencesSlice"

const rootReducer = combineReducers({
  counter: counterReducer, // Add other reducers here as your app grows
  userData: userDataReducer,
  userPreferences: userPreferencesReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// These are imported in types/redux.d.ts and referenced from there in all other files
export type RootState = ReturnType<typeof rootReducer> 
export type AppDispatch = typeof store.dispatch

export default store

