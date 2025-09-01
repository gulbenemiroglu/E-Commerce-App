import React from 'react'
import "../css/Product.css"
import { FaUpRightFromSquare } from "react-icons/fa6";


const Product = ({ product }) => {
    console.log(product);
    const { id, category, description, image, price, title } = product
    return (
        <div className='product-card'>
            <img src={image} alt="" className='product-image' />
            <div className='flex-column'>
                <p className='product-title'>{title}</p>
                <h3 className='product-price'>{price} $</h3>

            </div>
            <div className='flex-column'>
                <button className='product-button'>Detayına git
                    <span className='icon-RightFromSquare'><FaUpRightFromSquare /></span>
                </button>

            </div>
        </div>
    )
}

export default Product