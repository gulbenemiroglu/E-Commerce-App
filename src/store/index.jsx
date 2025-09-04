import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app/appSlice'
import productReducer from './product/productSlice'
import basketReducer from './basket/basketSlice'
import searchReducer from './search/searchSlice'


export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer,
        search: searchReducer
    },
})