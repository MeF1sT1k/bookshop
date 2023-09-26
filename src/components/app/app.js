import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage, CartPage } from "../pages"
import ShopHeader from '../shop-header';
import "./app.css";

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </main>
    )
};

export default App;