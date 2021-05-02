import React from 'react'
import CategorySort from "./CategorySort/CategorySort";
import ProductList from "./ProductsList/ProductList";

const MainPage = (props) => {
    return (
        <div>
            <CategorySort/>
            <ProductList data={props.data}/>
        </div>
    )
};

export default MainPage