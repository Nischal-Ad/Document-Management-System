import { createReducer } from '@reduxjs/toolkit'

export const categoryReducer = createReducer(
  {},
  {
    allCategoryRequest: (state) => {
      state.loading = true
    },
    allCategorySuccess: (state, action) => {
      state.loading = false
      state.category = action.payload.data
      state.message = action.payload.message
    },
    allCategoryFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    delCategoryRequest: (state) => {
      state.loading = true
    },
    delCategorySuccess: (state, action) => {
      state.loading = false
      state.category = action.payload.data
      state.message = action.payload.message
    },
    delCategoryFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
    clearMessage: (state) => {
      state.message = null
    },
    addCategoryRequest: (state) => {
      state.loading = true
    },
    addCategorySuccess: (state, action) => {
      state.loading = false
      state.category = action.payload.data
      state.message = action.payload.message
    },
    addCategoryFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  }
)
