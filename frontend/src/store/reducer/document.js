import { createReducer } from '@reduxjs/toolkit'

export const docReducer = createReducer(
  {},
  {
    allDocRequest: (state) => {
      state.loading = true
    },
    allDocSuccess: (state, action) => {
      state.loading = false
      state.doc = action.payload.doc
      state.alldoc = action.payload
      state.message = action.payload.message
    },
    allDocFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    oneDocRequest: (state) => {
      state.loading = true
    },
    oneDocSuccess: (state, action) => {
      state.loading = false
      state.doc = action.payload.doc
      state.message = action.payload.message
    },
    oneDocFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    delDocRequest: (state) => {
      state.loading = true
    },
    delDocSuccess: (state, action) => {
      state.loading = false
      state.doc = action.payload.doc
      state.message = action.payload.message
    },
    delDocFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
    clearMessage: (state) => {
      state.message = null
    },
    addDocRequest: (state) => {
      state.loading = true
    },
    addDocSuccess: (state, action) => {
      state.loading = false
      state.doc = action.payload.doc
      state.message = action.payload.message
    },
    addDocFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    editDocRequest: (state) => {
      state.loading = true
    },
    editDocSuccess: (state, action) => {
      state.loading = false
      state.doc = action.payload.doc
      state.message = action.payload.message
    },
    editDocFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  }
)
