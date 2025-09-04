import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import { clearSearch } from '../store/search/searchSlice';
const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearSearch());
    }, [dispatch])
    return (
        <div>
            <ProductList />
        </div>
    )
}

export default Home