import { configureStore } from '@reduxjs/toolkit'

import AuthSlice from './features/authSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice
  }
})
