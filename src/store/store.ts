import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice"
import userDataReducer from "./features/userData/userDataSlice"

const rootReducer = combineReducers({
  counter: counterReducer, // Add other reducers here as your app grows
  userData: userDataReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer> // Extract the state type
export type AppDispatch = typeof store.dispatch
export default store

