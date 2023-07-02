import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/theme/themeSlice'
import switchReducer from './features/switch/switchSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    switch: switchReducer,
  },
})