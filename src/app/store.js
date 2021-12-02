import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import calcReducer from '../features/calc/calcSlice'

export default configureStore({
  reducer: {
    stepCounter: counterReducer,
    calculationData: calcReducer,
  },
})