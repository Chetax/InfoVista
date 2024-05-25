import { configureStore } from '@reduxjs/toolkit'
import keywordReducer from './Keyword';
export default configureStore({
  reducer: {
    keyword: keywordReducer,
  
  }
}) 