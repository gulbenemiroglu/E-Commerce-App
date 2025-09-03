import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../store/product/productSlice';
import "../css/ProductDetails.css"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const ProductDetails = () => {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { category, description, image, price, title } = selectedProduct
    const [count, setCount] = useState(0)

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const getProductById = () => {
        const found = products?.find((product) => product.id == id)
        if (found) {
            dispatch(setSelectedProduct(found))
        }
    }

    useEffect(() => {
        getProductById();
    }, [])


    return (
        <div className='flex-row product-details-card'>
            <div >
                <img src={image} alt={title} className='product-details-image' />
            </div>
            <div >
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{category}</p>
                <h3 className='product-details-price'>{price ? `$${price.toFixed(2)}` : '-'}</h3>
                <div className='product-details-icons'>
                    <CiCirclePlus className='plus-btn' onClick={increment} />
                    <span>{count}</span>
                    <CiCircleMinus className='minus-btn' onClick={decrement} />

                    <button className='product-details-button'>Sepete Ekle</button>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails