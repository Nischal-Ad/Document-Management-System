import { configureStore } from '@reduxjs/toolkit'
import { allUserReducer, userReducer } from './reducer/user'
import { docReducer } from './reducer/document'
import { categoryReducer } from './reducer/category'
import { departmentReducer } from './reducer/department'

const store = configureStore({
  reducer: {
    user: userReducer,
    doc: docReducer,
    users: allUserReducer,
    category: categoryReducer,
    department: departmentReducer,
  },
})

export default store
