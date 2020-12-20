import React from 'react'
import CategorySort from "./CategorySort/CategorySort";
import ProductList from "./ProductsList/ProductList";

const MainPage = () => {
    return (
        <div>
            <CategorySort/>
            <ProductList/>
        </div>
    )
}

export default MainPage