import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
  name: 'counter',
  initialState: {
    gender: null,
    age: null,
    height: null
  },
  reducers: {
    set_gender: (state, action) => {
        state.gender =  action.payload
    },
    set_age: (state, action) => {
        state.age =  action.payload
    },
    set_height: (state, action) => {
        state.height =  action.payload
    },
  },
})

export const { set_gender, set_age, set_height } = calcSlice.actions

export default calcSlice.reducer
