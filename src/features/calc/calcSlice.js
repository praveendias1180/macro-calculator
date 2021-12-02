import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
  name: 'calculator',
  initialState: {
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
    description: null
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
    set_weight: (state, action) => {
        state.weight =  action.payload
    },
    set_activity: (state, action) => {
        state.activity =  action.payload
    },
    set_description: (state, action) => {
        state.description =  action.payload
    },
  },
})

export const { set_gender, set_age, set_height, set_weight, set_activity, set_description } = calcSlice.actions

export default calcSlice.reducer
