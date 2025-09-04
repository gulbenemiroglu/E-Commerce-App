import React, { useEffect } from 'react'
import { getAllProducts } from '../store/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import "../css/ProductList.css"


const ProductList = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product)
    const { query } = useSelector((store) => store.search)

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])

    const filteredProducts =
        query && query.trim() !== ""
            ? products?.filter((p) =>
                p.title.toLowerCase().includes(query.toLowerCase())
            )
            : products;

    return (
        <div className="products-grid">
            {filteredProducts?.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList