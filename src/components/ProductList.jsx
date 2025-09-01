import React, { useEffect } from 'react'
import { getAllProducts } from '../features/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product)
    console.log(products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])


    return (
        <div>
            {
                products?.map((product) => (
                    <div key={product.id}>{product.title}</div>
                ))
            }
        </div>
    )
}

export default ProductList