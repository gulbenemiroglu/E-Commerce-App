import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app/appSlice'
import productReducer from './product/productSlice'
import basketReducer from './basket/basketSlice'



export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer,
    },
})