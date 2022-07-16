import React from "react";
import Navbar from "../components/Navbar.js";
import { makeAutoObservable } from "mobx";
import MyComponent from "../components/Products.items";

function Products() {
    return (
        <div>
            <Navbar />
            <MyComponent />
        </div>
    );
}

export default Products;
