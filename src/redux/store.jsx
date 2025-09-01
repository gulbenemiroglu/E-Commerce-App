import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../features/app/appSlice'
import productReducer from '../features/product/productSlice'



export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer
    },
})