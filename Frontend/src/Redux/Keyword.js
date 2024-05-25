import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'keywords',
  initialState: {
    keyword:"Facebook"
  },
  reducers: {
    setKeyword: (state, action) => {
        state.keyword = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setKeyword } = counterSlice.actions

export default counterSlice.reducer