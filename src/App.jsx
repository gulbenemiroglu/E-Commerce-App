import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from "./components/Header"
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from "react-icons/fa";
import { calculateBasket, setDrawer } from './store/basket/basketSlice'


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket)
  }, [])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer open={drawer} onClose={() => dispatch(setDrawer())} anchor="right" >
          <div className='basket-drawer-wrapper'>
            {
              products && products.map((product) => {
                return (
                  <div key={product.id}>
                    <div className='basket-drawer'>
                      <img src={product.image} alt="" />
                      <p className='drawer-product-count'>({product.count})</p>
                      <p className='drawer-product-title'>{product.title}</p>
                      <p className='drawer-product-price'>$ {product.price}</p>
                      <button className='drawer-product-button'>
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </div>


                )
              })
            }
            <div className='total-amount-title'>Total Amount: <span className='total-amount'> $ {totalAmount}</span></div>
          </div>

        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
