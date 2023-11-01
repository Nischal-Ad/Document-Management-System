import { configureStore } from '@reduxjs/toolkit'
import { allUserReducer, userReducer } from './reducer/user'
import { docReducer } from './reducer/document'
import { categoryReducer } from './reducer/category'

const store = configureStore({
  reducer: {
    user: userReducer,
    doc: docReducer,
    users: allUserReducer,
    category: categoryReducer,
  },
})

export default store
