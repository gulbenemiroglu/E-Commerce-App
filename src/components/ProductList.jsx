import React, { useEffect } from 'react'
import { getAllProducts } from '../store/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import "../css/ProductList.css"

const ProductList = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product)

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])


    return (
        <div className="products-grid">
            {
                products?.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList